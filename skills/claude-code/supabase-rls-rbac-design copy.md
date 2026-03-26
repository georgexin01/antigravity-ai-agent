# Supabase RLS 与 RBAC 架构设计

> 多项目、基于角色的访问控制系统与行级安全

---

## 目录

1. [概述](#概述)
2. [架构图](#架构图)
3. [Schema 设计](#schema-设计)
4. [角色与权限系统](#角色与权限系统)
5. [Auth Hook 设计](#auth-hook-设计)
6. [RLS 策略](#rls-策略)
7. [Edge Functions](#edge-functions)
8. [敏感字段处理（View 方案）](#敏感字段处理view-方案)
9. [安全考虑](#安全考虑)
10. [参考文档](#参考文档)

---

## 概述

### 项目需求

- **多项目隔离**：一个 Supabase 实例托管多个项目，通过 schema 分隔
- **集中用户管理**：所有用户在 `public` schema 统一管理
- **基于角色的访问**：用户有角色，角色有权限
- **一个用户一个项目**：每个用户只属于一个项目
- **一个用户一个角色**：每个用户只有一个角色

### 关键技术

- Supabase Auth（认证）
- PostgreSQL RLS（行级安全）
- Auth Hook（JWT 自定义 claims 注入）
- Edge Functions（安全的后端操作）

---

## 迁移脚本复用指南

### 概述

数据库迁移脚本分为**固定部分**（只创建一次）和**定制部分**（每个项目需要编写）。

### 固定部分（只创建一次）

以下内容在整个 Supabase 实例中只需要创建一次，所有项目共用：

#### 第1部分：public schema 表

| 表/对象 | 说明 |
|---------|------|
| `public.project` | 项目表 - 存储所有项目信息 |
| `public.role` | 角色表 - 全局角色定义 |
| `public.user` | 用户表 - 关联 auth.users |
| 默认角色数据 | root_admin, super_admin, admin, user 等 |

#### 第4部分：public 辅助函数

| 函数 | 说明 |
|------|------|
| `public.get_current_project_id()` | 从 JWT 获取当前项目 ID |
| `public.get_current_role()` | 从 JWT 获取当前角色名 |
| `public.get_current_role_level()` | 从 JWT 获取角色级别 |

#### 第5部分：public 表的 RLS 策略

| 策略 | 说明 |
|------|------|
| `public.user` 的策略 | 用户只能看/改自己 |
| `public.project` 的策略 | 只能看自己所属项目 |
| `public.role` 的策略 | 所有已登录用户可读 |

#### 第6部分：Auth Hook

| 函数 | 说明 |
|------|------|
| `public.custom_access_token_hook()` | 登录时注入 JWT claims（project_id, role, role_level） |

---

### 定制部分（每个项目需要编写）

以下内容需要为每个新项目分别创建：

#### 第2部分：项目 schema 和业务表

```sql
-- 1. 创建项目 schema
CREATE SCHEMA IF NOT EXISTS {project_schema};

-- 2. 在 public.project 插入记录
INSERT INTO public.project (name, schema_name, description) VALUES
  ('项目名称', '{project_schema}', '项目描述');

-- 3. 创建业务角色（如果需要）
INSERT INTO public.role (name, description, level, is_system) VALUES
  ('custom_role', '自定义角色', 50, false);

-- 4. 创建 permission 表（结构固定，但在各自 schema）
CREATE TABLE {project_schema}.permission (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_id UUID NOT NULL REFERENCES public.role(id),
  resource TEXT NOT NULL,
  action TEXT NOT NULL,
  scope TEXT NOT NULL DEFAULT 'none',
  is_delete BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(role_id, resource, action)
);

-- 5. 创建业务表（根据项目需求）
CREATE TABLE {project_schema}.your_entity (
  -- 字段定义
);
```

#### 第3部分：权限数据

每个项目需要根据业务需求插入权限记录：

```sql
INSERT INTO {project_schema}.permission (role_id, resource, action, scope) VALUES
  -- 根据业务需求定义
  ((SELECT id FROM public.role WHERE name = 'admin'), 'entity', 'read', 'all'),
  ((SELECT id FROM public.role WHERE name = 'user'), 'entity', 'read', 'own');
```

#### 第4部分：项目 schema 的辅助函数

需要在每个项目 schema 中创建（只需替换 schema 名称）：

```sql
-- 检查权限并返回 scope
CREATE OR REPLACE FUNCTION {project_schema}.get_permission_scope(
  p_resource text,
  p_action text
)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT COALESCE(
    (
      SELECT scope
      FROM {project_schema}.permission p
      JOIN public.role r ON p.role_id = r.id
      WHERE r.name = public.get_current_role()
        AND p.resource = p_resource
        AND p.action = p_action
        AND p.is_delete = false
    ),
    'none'
  );
$$;

-- RLS 授权函数
CREATE OR REPLACE FUNCTION {project_schema}.authorize(
  p_resource text,
  p_action text
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT {project_schema}.get_permission_scope(p_resource, p_action) != 'none';
$$;
```

#### 第5部分：项目 schema 的 RLS 策略

需要根据业务逻辑为每个业务表编写 RLS 策略：

```sql
-- 启用 RLS
ALTER TABLE {project_schema}.your_entity ENABLE ROW LEVEL SECURITY;

-- 根据业务逻辑编写策略
CREATE POLICY "entity_select" ON {project_schema}.your_entity
FOR SELECT TO authenticated
USING (
  CASE
    WHEN {project_schema}.get_permission_scope('entity', 'read') = 'all' THEN
      is_delete = false
    WHEN {project_schema}.get_permission_scope('entity', 'read') = 'own' THEN
      is_delete = false AND user_id = (SELECT id FROM public.user WHERE auth_id = auth.uid())
    ELSE false
  END
);
```

---

### 新建项目检查清单

```
□ 1. 创建 schema: CREATE SCHEMA IF NOT EXISTS {schema_name}
□ 2. 插入 project 记录到 public.project
□ 3. 创建业务角色（如果需要新角色）
□ 4. 创建 {schema_name}.permission 表
□ 5. 创建业务表（teacher, student, etc.）
□ 6. 插入权限数据到 {schema_name}.permission
□ 7. 创建 {schema_name}.get_permission_scope() 函数
□ 8. 创建 {schema_name}.authorize() 函数
□ 9. 为每个业务表启用 RLS 并创建策略
□ 10. 测试各角色的数据访问
```

---

## 架构图

### 整体结构

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              auth schema                                    │
│                           (Supabase 原生管理)                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────┐                                │
│  │             auth.users                  │                                │
│  │  ───────────────────────────────────    │                                │
│  │  id (uuid) ◄────────────────────────────┼──────────┐                     │
│  │  email                                  │          │                     │
│  │  encrypted_password                     │          │                     │
│  │  raw_app_metadata (jsonb) ──────────────┼───┐      │                     │
│  │    {                                    │   │      │                     │
│  │      "project_id": "xxx",               │   │      │                     │
│  │      "role": "teacher"                  │   │ JWT  │                     │
│  │    }                                    │   │ 注入  │                     │
│  │  created_at, updated_at                 │   │      │                     │
│  └─────────────────────────────────────────┘   │      │                     │
│                                                │      │                     │
└────────────────────────────────────────────────┼──────┼─────────────────────┘
                                                 │      │
                         Auth Hook 动态注入 ──────┘      │ auth_id
                                                        │
┌───────────────────────────────────────────────────────┼─────────────────────┐
│                           public schema               │                     │
│                        (管理层 - 有 RLS 保护)          │                     │
├───────────────────────────────────────────────────────┼─────────────────────┤
│                                                       │                     │
│  ┌─────────────────┐       ┌──────────────────────────┴────┐                │
│  │     project     │       │            user               │                │
│  │  ─────────────  │       │  ────────────────────────     │                │
│  │  id (uuid) PK ◄─┼───────┤  id (uuid) PK                 │                │
│  │  name           │       │  auth_id (uuid) FK ───────────┼─► auth.users   │
│  │  schema_name    │       │  project_id (uuid) FK         │                │
│  │  status         │       │  role_id (uuid) FK ───────────┼───┐            │
│  │  created_at     │       │  name                         │   │            │
│  │  updated_at     │       │  email                        │   │            │
│  └─────────────────┘       │  status                       │   │            │
│                            │  created_at, updated_at       │   │            │
│                            └───────────────────────────────┘   │            │
│                                                                │            │
│  ┌─────────────────────────────────────────────────────────────┴──┐         │
│  │                          role                                  │         │
│  │  ────────────────────────────────────────────────────────────  │         │
│  │  id (uuid) PK                                                  │         │
│  │  name (root_admin, super_admin, admin, user, teacher, student) │         │
│  │  description                                                   │         │
│  │  level (权限等级: 0=最高, 100=最低)                              │         │
│  │  created_at, updated_at                                        │         │
│  └────────────────────────────────────────────────────────────────┘         │
│                                                                             │
│  RLS 策略:                                                                   │
│  ├── user: 只能看自己 (auth.uid() = auth_id)                                 │
│  ├── project: 只能看自己所属的项目                                           │
│  └── role: 所有已登录用户可读（公开角色列表）                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     │ project_id + role 决定访问权限
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         test_school schema                                  │
│                        (项目业务层 - 有 RLS 保护)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────┐           │
│  │                       permission                             │           │
│  │  ──────────────────────────────────────────────────────────  │           │
│  │  id (uuid) PK                                                │           │
│  │  role_id (uuid) FK ─────────────────────────► public.role    │           │
│  │  resource (student, teacher, subject)                        │           │
│  │  action (create, read, update, delete)                       │           │
│  │  scope (all, own, none)                                      │           │
│  │  UNIQUE(role_id, resource, action)                           │           │
│  └──────────────────────────────────────────────────────────────┘           │
│                                                                             │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐          │
│  │     teacher     │    │     student     │    │     subject     │          │
│  │  ─────────────  │    │  ─────────────  │    │  ─────────────  │          │
│  │  id (uuid) PK ◄─┼────┤  homeroom_      │    │  id (uuid) PK   │          │
│  │  user_id FK ────┼─┐  │  teacher_id FK  │    │  name           │          │
│  │  name           │ │  │  id (uuid) PK   │    │  description    │          │
│  │  email          │ │  │  user_id FK ────┼─┐  │  status         │          │
│  │  phone          │ │  │  name           │ │  └─────────────────┘          │
│  │  salary         │ │  │  email          │ │           ▲                   │
│  │  status         │ │  │  phone          │ │           │                   │
│  └─────────────────┘ │  │  status         │ │           │                   │
│          ▲           │  └─────────────────┘ │           │                   │
│          │           │          ▲           │           │                   │
│          │           └──────────┼───────────┘           │                   │
│          │                      │ public.user           │                   │
│          │                      │                       │                   │
│  ┌───────┴──────────────────────┴───────────────────────┴───────┐           │
│  │                    M:N 关联表                                 │           │
│  ├──────────────────────────────────────────────────────────────┤           │
│  │  ┌─────────────────────┐      ┌─────────────────────┐        │           │
│  │  │   student_teacher   │      │   student_subject   │        │           │
│  │  │  ─────────────────  │      │  ─────────────────  │        │           │
│  │  │  id (uuid) PK       │      │  id (uuid) PK       │        │           │
│  │  │  student_id FK      │      │  student_id FK      │        │           │
│  │  │  teacher_id FK      │      │  subject_id FK      │        │           │
│  │  │  created_at         │      │  created_at         │        │           │
│  │  └─────────────────────┘      └─────────────────────┘        │           │
│  └──────────────────────────────────────────────────────────────┘           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 访问流程

```
用户请求 GET /rest/v1/student
           │
           ▼
┌─────────────────────────┐
│ 1. Supabase Auth 验证    │
│    检查 JWT Token        │
│    获取 auth.uid()       │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 2. 从 JWT 获取信息       │
│    project_id = ?       │
│    role = ?             │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 3. RLS Policy 检查       │
│    ├─ 项目隔离检查        │
│    │  project_id 匹配?   │
│    │                    │
│    ├─ 权限检查           │
│    │  authorize(        │
│    │    'student',      │
│    │    'read'          │
│    │  ) = true?         │
│    │                    │
│    └─ Scope 检查         │
│       scope = 'own'?    │
│       → 只返回自己的数据  │
│       scope = 'all'?    │
│       → 返回所有数据     │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 4. 返回数据              │
│    只有通过所有检查的行   │
└─────────────────────────┘
```

---

## Schema 设计

### public.project

```sql
CREATE TABLE public.project (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  schema_name TEXT NOT NULL UNIQUE,  -- 例如 'test_school'
  description TEXT,
  status TEXT NOT NULL DEFAULT 'active',  -- active, inactive
  is_delete BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_project_schema ON public.project(schema_name);
```

### public.role

```sql
CREATE TABLE public.role (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  level INT NOT NULL DEFAULT 100,  -- 0=最高权限, 100=最低权限
  is_system BOOLEAN NOT NULL DEFAULT false,  -- 系统角色不可删除
  is_delete BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_role_name ON public.role(name);
CREATE INDEX idx_role_level ON public.role(level);

-- 插入默认角色
INSERT INTO public.role (name, description, level, is_system) VALUES
  ('root_admin', '超级管理员 - 全系统访问', 0, true),
  ('super_admin', '项目超级管理员 - 全项目访问', 10, true),
  ('admin', '管理员 - 项目管理', 20, true),
  ('user', '普通用户 - 最低访问权限', 100, true),
  ('teacher', '老师 - 管理自己的学生', 50, false),
  ('student', '学生 - 查看自己的数据', 60, false);
```

### public.user

```sql
CREATE TABLE public.user (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  project_id UUID REFERENCES public.project(id),
  role_id UUID NOT NULL REFERENCES public.role(id),
  name TEXT NOT NULL,
  email TEXT,  -- 可选，与 phone 至少填一个
  phone TEXT,  -- 可选，与 email 至少填一个
  avatar_url TEXT,
  status TEXT NOT NULL DEFAULT 'active',  -- active, inactive, banned
  is_delete BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- 确保至少有 email 或 phone
  CONSTRAINT user_email_or_phone CHECK (email IS NOT NULL OR phone IS NOT NULL)
);

-- 索引
CREATE INDEX idx_user_auth_id ON public.user(auth_id);
CREATE INDEX idx_user_project_id ON public.user(project_id);
CREATE INDEX idx_user_role_id ON public.user(role_id);
CREATE INDEX idx_user_email ON public.user(email);
CREATE INDEX idx_user_phone ON public.user(phone);

-- 部分唯一索引：同项目内 email 不能重复（允许 NULL）
CREATE UNIQUE INDEX idx_user_email_project
ON public.user(email, project_id)
WHERE email IS NOT NULL;

-- 部分唯一索引：同项目内 phone 不能重复（允许 NULL）
CREATE UNIQUE INDEX idx_user_phone_project
ON public.user(phone, project_id)
WHERE phone IS NOT NULL;
```

### {project_schema}.permission

```sql
-- 示例: test_school.permission
CREATE TABLE test_school.permission (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_id UUID NOT NULL REFERENCES public.role(id),
  resource TEXT NOT NULL,  -- 'student', 'teacher', 'subject'
  action TEXT NOT NULL,    -- 'create', 'read', 'update', 'delete'
  scope TEXT NOT NULL DEFAULT 'none',  -- 'all', 'own', 'none'
  is_delete BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  UNIQUE(role_id, resource, action)
);

CREATE INDEX idx_permission_role ON test_school.permission(role_id);
CREATE INDEX idx_permission_resource ON test_school.permission(resource);
```

---

## 角色与权限系统

### 角色层级

```
┌─────────────────────────────────────────────────────────────┐
│                       角色层级                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  系统角色（固定）                                             │
│  ├── root_admin   (level=0)   → 最高权限，跨项目              │
│  ├── super_admin  (level=10)  → 项目所有者                   │
│  ├── admin        (level=20)  → 项目管理员                   │
│  └── user         (level=100) → 基础访问，最低权限            │
│                                                             │
│  业务角色（按项目扩展）                                        │
│  ├── teacher      (level=50)  → test_school 项目            │
│  ├── student      (level=60)  → test_school 项目            │
│  ├── salesman     (level=50)  → 其他项目                     │
│  ├── merchant     (level=50)  → 其他项目                     │
│  └── ...          → 未来扩展                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Level 用途

`level` 字段控制角色层级，用于：

1. **创建用户** - 只能创建比自己 level 高（权限低）的用户
2. **修改角色** - 只能修改比自己 level 高的用户
3. **数据访问** - 更高权限可以看到更多数据

```
root_admin (level=0) 尝试修改用户角色
           │
           ▼
┌─────────────────────────┐
│ 检查目标用户的 level     │
├─────────────────────────┤
│                         │
│  目标是 super_admin?    │
│  level=10 > 0           │
│  ✅ 允许（权限更低）      │
│                         │
│  目标是 root_admin?     │
│  level=0 = 0            │
│  ❌ 拒绝（同级）         │
│                         │
└─────────────────────────┘
```

### Scope 说明

`scope` 字段决定数据访问范围：

| Scope | 含义 | 示例 |
|-------|------|------|
| `all` | 访问所有数据 | admin 看所有学生 |
| `own` | 只访问自己相关的数据 | teacher 只看自己的学生 |
| `none` | 无访问权限 | student 不能删除任何数据 |

### 权限表示例

```
┌────────────┬──────────┬────────┬────────┬────────────────────────┐
│ role       │ resource │ action │ scope  │ 说明                   │
├────────────┼──────────┼────────┼────────┼────────────────────────┤
│ root_admin │ *        │ *      │ all    │ 全部权限               │
├────────────┼──────────┼────────┼────────┼────────────────────────┤
│ super_admin│ student  │ create │ all    │ 项目内全部权限          │
│ super_admin│ student  │ read   │ all    │                        │
│ super_admin│ student  │ update │ all    │                        │
│ super_admin│ student  │ delete │ all    │                        │
│ super_admin│ teacher  │ *      │ all    │                        │
│ super_admin│ subject  │ *      │ all    │                        │
├────────────┼──────────┼────────┼────────┼────────────────────────┤
│ admin      │ student  │ create │ all    │ 管理学生               │
│ admin      │ student  │ read   │ all    │                        │
│ admin      │ student  │ update │ all    │                        │
│ admin      │ teacher  │ read   │ all    │ 只读老师               │
│ admin      │ teacher  │ update │ all    │                        │
│ admin      │ subject  │ *      │ all    │                        │
├────────────┼──────────┼────────┼────────┼────────────────────────┤
│ teacher    │ student  │ read   │ own    │ 只看自己的学生          │
│ teacher    │ student  │ update │ own    │                        │
│ teacher    │ teacher  │ read   │ own    │ 只看自己               │
│ teacher    │ subject  │ read   │ all    │ 可看所有科目            │
├────────────┼──────────┼────────┼────────┼────────────────────────┤
│ student    │ student  │ read   │ own    │ 只看自己               │
│ student    │ teacher  │ read   │ own    │ 只看自己的老师          │
│ student    │ subject  │ read   │ own    │ 只看自己的科目          │
├────────────┼──────────┼────────┼────────┼────────────────────────┤
│ user       │ subject  │ read   │ all    │ 只能看公开数据          │
└────────────┴──────────┴────────┴────────┴────────────────────────┘
```

---

## Auth Hook 设计

### 用途

Auth Hook 在用户登录时将 `project_id` 和 `role` 注入到 JWT token，这样 RLS 策略可以直接从 JWT 读取，不需要查询数据库。

### 实现

```sql
-- 创建 Auth Hook 函数
CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_project_id uuid;
  user_role text;
  user_role_level int;
  claims jsonb;
BEGIN
  -- 1. 从 public.user 查询用户的 project_id 和 role
  SELECT
    u.project_id,
    r.name,
    r.level
  INTO
    user_project_id,
    user_role,
    user_role_level
  FROM public.user u
  JOIN public.role r ON u.role_id = r.id
  WHERE u.auth_id = (event->>'user_id')::uuid
    AND u.is_delete = false
    AND u.status = 'active';

  -- 2. 获取现有的 claims
  claims := event->'claims';

  -- 3. 注入自定义 claims
  IF user_project_id IS NOT NULL THEN
    claims := jsonb_set(claims, '{project_id}', to_jsonb(user_project_id));
  END IF;

  IF user_role IS NOT NULL THEN
    claims := jsonb_set(claims, '{role}', to_jsonb(user_role));
    claims := jsonb_set(claims, '{role_level}', to_jsonb(user_role_level));
  END IF;

  -- 4. 返回修改后的 event
  RETURN jsonb_set(event, '{claims}', claims);
END;
$$;

-- 授权
GRANT EXECUTE ON FUNCTION public.custom_access_token_hook TO supabase_auth_admin;
REVOKE EXECUTE ON FUNCTION public.custom_access_token_hook FROM authenticated, anon, public;
```

### 在 RLS 中使用

```sql
-- 从 JWT 获取 project_id（不需要查数据库！）
(auth.jwt() ->> 'project_id')::uuid

-- 从 JWT 获取 role
auth.jwt() ->> 'role'

-- 从 JWT 获取 role level
(auth.jwt() ->> 'role_level')::int
```

---

## RLS 策略

### 辅助函数

```sql
-- 从 JWT 获取当前用户的 project_id
CREATE OR REPLACE FUNCTION public.get_current_project_id()
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT (auth.jwt() ->> 'project_id')::uuid;
$$;

-- 从 JWT 获取当前用户的 role
CREATE OR REPLACE FUNCTION public.get_current_role()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT auth.jwt() ->> 'role';
$$;

-- 从 JWT 获取当前用户的 role level
CREATE OR REPLACE FUNCTION public.get_current_role_level()
RETURNS int
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT COALESCE((auth.jwt() ->> 'role_level')::int, 100);
$$;

-- 检查权限并返回 scope
CREATE OR REPLACE FUNCTION test_school.get_permission_scope(
  p_resource text,
  p_action text
)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT COALESCE(
    (
      SELECT scope
      FROM test_school.permission p
      JOIN public.role r ON p.role_id = r.id
      WHERE r.name = public.get_current_role()
        AND p.resource = p_resource
        AND p.action = p_action
        AND p.is_delete = false
    ),
    'none'
  );
$$;

-- RLS 用的授权函数
CREATE OR REPLACE FUNCTION test_school.authorize(
  p_resource text,
  p_action text
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT test_school.get_permission_scope(p_resource, p_action) != 'none';
$$;
```

### public.user RLS

```sql
ALTER TABLE public.user ENABLE ROW LEVEL SECURITY;

-- 用户只能看自己
CREATE POLICY "user_select_self" ON public.user
FOR SELECT TO authenticated
USING (auth.uid() = auth_id);

-- 用户可以更新自己（部分字段通过 Edge Function 限制）
CREATE POLICY "user_update_self" ON public.user
FOR UPDATE TO authenticated
USING (auth.uid() = auth_id);

-- 新增/删除只能通过 Edge Function (service_role)
```

### public.project RLS

```sql
ALTER TABLE public.project ENABLE ROW LEVEL SECURITY;

-- 用户只能看自己所属的项目
CREATE POLICY "project_select_own" ON public.project
FOR SELECT TO authenticated
USING (
  id = public.get_current_project_id()
);
```

### public.role RLS

```sql
ALTER TABLE public.role ENABLE ROW LEVEL SECURITY;

-- 所有已登录用户可读角色（公开列表）
CREATE POLICY "role_select_all" ON public.role
FOR SELECT TO authenticated
USING (is_delete = false);
```

### test_school.student RLS

```sql
ALTER TABLE test_school.student ENABLE ROW LEVEL SECURITY;

-- SELECT 策略带 scope 检查
CREATE POLICY "student_select" ON test_school.student
FOR SELECT TO authenticated
USING (
  CASE
    -- scope = 'all' → 看项目内所有学生
    WHEN test_school.get_permission_scope('student', 'read') = 'all' THEN
      is_delete = false

    -- scope = 'own' 且 role = 'teacher' → 只看自己的学生
    WHEN test_school.get_permission_scope('student', 'read') = 'own'
         AND public.get_current_role() = 'teacher' THEN
      is_delete = false AND (
        -- 班主任的学生
        homeroom_teacher_id IN (
          SELECT id FROM test_school.teacher
          WHERE user_id = (SELECT id FROM public.user WHERE auth_id = auth.uid())
        )
        OR
        -- 通过 student_teacher 关联的学生
        id IN (
          SELECT student_id FROM test_school.student_teacher
          WHERE teacher_id IN (
            SELECT id FROM test_school.teacher
            WHERE user_id = (SELECT id FROM public.user WHERE auth_id = auth.uid())
          )
        )
      )

    -- scope = 'own' 且 role = 'student' → 只看自己
    WHEN test_school.get_permission_scope('student', 'read') = 'own'
         AND public.get_current_role() = 'student' THEN
      is_delete = false AND
      user_id = (SELECT id FROM public.user WHERE auth_id = auth.uid())

    ELSE false
  END
);

-- UPDATE 策略
CREATE POLICY "student_update" ON test_school.student
FOR UPDATE TO authenticated
USING (
  CASE
    WHEN test_school.get_permission_scope('student', 'update') = 'all' THEN
      is_delete = false
    WHEN test_school.get_permission_scope('student', 'update') = 'own'
         AND public.get_current_role() = 'teacher' THEN
      is_delete = false AND (
        homeroom_teacher_id IN (
          SELECT id FROM test_school.teacher
          WHERE user_id = (SELECT id FROM public.user WHERE auth_id = auth.uid())
        )
      )
    ELSE false
  END
);

-- INSERT 策略
CREATE POLICY "student_insert" ON test_school.student
FOR INSERT TO authenticated
WITH CHECK (
  test_school.authorize('student', 'create')
);

-- DELETE 策略
CREATE POLICY "student_delete" ON test_school.student
FOR DELETE TO authenticated
USING (
  test_school.authorize('student', 'delete')
);
```

---

## Edge Functions

### 为什么需要 Edge Functions

涉及安全敏感的操作**必须**在后端完成：

```
┌─────────────────────────────────────────────────────────────┐
│                  需要后端处理的操作                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ✅ 创建用户（检查角色等级）                                  │
│  ✅ 修改用户角色（检查角色等级）                              │
│  ✅ 删除用户（检查角色等级）                                  │
│  ✅ 使用优惠券 / 扣积分                                      │
│  ✅ 任何涉及「钱」「权限」「库存」的操作                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 目录结构

```
project-root/
└── supabase/
    ├── config.toml
    ├── migrations/
    │   ├── 001_public_schema.sql
    │   ├── 002_test_school_schema.sql
    │   └── 003_rls_policies.sql
    └── functions/
        ├── create-user/
        │   └── index.ts
        ├── update-user-role/
        │   └── index.ts
        ├── delete-user/
        │   └── index.ts
        └── use-coupon/
            └── index.ts
```

### Edge Function 安全性

```
┌─────────────────────────────────────────────────────────────┐
│                 Edge Function 架构                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  客户端 (浏览器)                                             │
│       │                                                     │
│       │ 只发送: { email, password, role_id }                │
│       │ 看不到: SERVICE_ROLE_KEY                            │
│       ▼                                                     │
│  ┌─────────────────────────────────────────┐                │
│  │       Supabase Edge Function            │                │
│  │       (运行在 Supabase 服务器上)          │                │
│  │                                         │                │
│  │  环境变量（服务器端，黑客看不到）：         │                │
│  │  ├── SUPABASE_URL                       │                │
│  │  └── SUPABASE_SERVICE_ROLE_KEY          │                │
│  │                                         │                │
│  └─────────────────────────────────────────┘                │
│       │                                                     │
│       │ 使用 SERVICE_ROLE_KEY 操作数据库                    │
│       ▼                                                     │
│  ┌─────────────────────────────────────────┐                │
│  │            Supabase Database            │                │
│  └─────────────────────────────────────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 创建用户函数示例

```typescript
// supabase/functions/create-user/index.ts
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

Deno.serve(async (req) => {
  try {
    // 1. 获取当前用户的 token
    const authHeader = req.headers.get('Authorization')!
    const token = authHeader.replace('Bearer ', '')

    // 2. 验证当前用户
    const supabaseAuth = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!
    )
    const { data: { user: currentUser }, error: authError } =
      await supabaseAuth.auth.getUser(token)

    if (authError || !currentUser) {
      return new Response(
        JSON.stringify({ error: '未授权' }),
        { status: 401 }
      )
    }

    // 3. 获取当前用户的角色等级
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    const { data: currentUserData } = await supabaseAdmin
      .from('user')
      .select('project_id, role:role_id(name, level)')
      .eq('auth_id', currentUser.id)
      .single()

    const currentLevel = currentUserData.role.level
    const currentProjectId = currentUserData.project_id

    // 4. 获取请求内容
    const { email, password, role_id, project_id, name } = await req.json()

    // 5. 检查目标角色等级
    const { data: targetRole } = await supabaseAdmin
      .from('role')
      .select('name, level')
      .eq('id', role_id)
      .single()

    // 6. 权限检查：只能创建等级更低的用户
    if (targetRole.level <= currentLevel) {
      return new Response(
        JSON.stringify({ error: '无法创建同级或更高权限的用户' }),
        { status: 403 }
      )
    }

    // 7. 项目检查：必须是同一项目（除非是 root_admin）
    if (currentUserData.role.name !== 'root_admin' && project_id !== currentProjectId) {
      return new Response(
        JSON.stringify({ error: '无法在其他项目创建用户' }),
        { status: 403 }
      )
    }

    // 8. 创建 auth 用户
    const { data: newAuthUser, error: createAuthError } =
      await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        app_metadata: {
          project_id,
          role: targetRole.name
        }
      })

    if (createAuthError) {
      return new Response(
        JSON.stringify({ error: createAuthError.message }),
        { status: 400 }
      )
    }

    // 9. 创建 public.user 记录
    const { data: newUser, error: createUserError } = await supabaseAdmin
      .from('user')
      .insert({
        auth_id: newAuthUser.user.id,
        project_id,
        role_id,
        name,
        email
      })
      .select()
      .single()

    if (createUserError) {
      // 回滚：删除 auth 用户
      await supabaseAdmin.auth.admin.deleteUser(newAuthUser.user.id)
      return new Response(
        JSON.stringify({ error: createUserError.message }),
        { status: 400 }
      )
    }

    return new Response(
      JSON.stringify({ user: newUser }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    )
  }
})
```

### 前端调用

```typescript
// 前端代码
const createUser = async (userData: CreateUserInput) => {
  const { data, error } = await supabase.functions.invoke('create-user', {
    body: {
      email: userData.email,
      password: userData.password,
      role_id: userData.roleId,
      project_id: userData.projectId,
      name: userData.name
    }
  })

  if (error) {
    message.error(error.message)
    return null
  }

  message.success('用户创建成功')
  return data.user
}
```

### 权限检查流程

```
┌─────────────────────────────────────────────────────────────┐
│                    创建用户权限检查                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  root_admin (level=0)                                       │
│       │                                                     │
│       ├── ✅ 可以创建 super_admin (level=10)                │
│       ├── ✅ 可以创建 admin (level=20)                      │
│       ├── ✅ 可以创建 teacher (level=50)                    │
│       └── ✅ 可以创建 user (level=100)                      │
│                                                             │
│  super_admin (level=10)                                     │
│       │                                                     │
│       ├── ❌ 不能创建 root_admin (level=0)                  │
│       ├── ❌ 不能创建 super_admin (level=10) ← 同级也不行    │
│       ├── ✅ 可以创建 admin (level=20)                      │
│       ├── ✅ 可以创建 teacher (level=50)                    │
│       └── ✅ 可以创建 user (level=100)                      │
│                                                             │
│  admin (level=20)                                           │
│       │                                                     │
│       ├── ❌ 不能创建 root_admin                            │
│       ├── ❌ 不能创建 super_admin                           │
│       ├── ❌ 不能创建 admin                                 │
│       ├── ✅ 可以创建 teacher (level=50)                    │
│       └── ✅ 可以创建 user (level=100)                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 敏感字段处理（View 方案）

如果未来需要隐藏某些字段（如老师薪水只给上层管理者看），可以使用 View 方案：

```sql
-- 创建 View，根据角色返回不同字段
CREATE VIEW test_school.teacher_view
WITH (security_invoker = true)
AS
SELECT
  id,
  user_id,
  name,
  email,
  phone,
  status,
  -- 只有 super_admin 以上（level <= 10）能看到 salary
  CASE
    WHEN (SELECT public.get_current_role_level()) <= 10
    THEN salary
    ELSE NULL
  END AS salary
FROM test_school.teacher;

-- 前端查询 View 而不是原表
-- admin 看到: { ..., salary: null }
-- super_admin 看到: { ..., salary: 50000 }
```

---

## 安全考虑

### 1. 暴力破解防护（内置）

Supabase Auth 包含：
- 登录尝试次数限制
- IP 临时封锁
- 可选 CAPTCHA（hCaptcha / Cloudflare Turnstile）
- MFA 支持（TOTP）

### 2. RLS 是强制的

```
⚠️ 重要：所有通过 API 暴露的表必须启用 RLS！

- 没有 RLS 的表可以被任意访问
- 部署前务必测试 RLS 策略
- 使用 Supabase Security Advisor 检查
```

### 3. Service Role Key 保护

```
┌─────────────────────────────────────────────────────────────┐
│                      密钥安全                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ❌ 绝对不要在前端暴露 service_role key                      │
│  ❌ 绝对不要把 service_role key 提交到 git                   │
│  ✅ 只在 Edge Functions 中使用 (Deno.env.get)               │
│  ✅ 只在后端服务器使用                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4. JWT Claims 安全

```
使用 raw_app_metadata（不是 raw_user_metadata）存储授权数据：

- raw_app_metadata: 用户无法自己修改 ✅
- raw_user_metadata: 用户可以自己修改 ❌
```

### 5. 纵深防御

```
第 1 层: 认证 (Supabase Auth)
    │
    ▼
第 2 层: JWT Claims (Auth Hook 注入 project_id, role)
    │
    ▼
第 3 层: RLS 策略 (行级访问控制)
    │
    ▼
第 4 层: Edge Functions (业务逻辑验证)
    │
    ▼
第 5 层: 数据库约束 (外键、唯一、检查)
```

---

## 快速参考

### Supabase CLI 命令

```bash
# 初始化 Supabase
supabase init

# 创建新的 Edge Function
supabase functions new function-name

# 部署 Edge Functions
supabase functions deploy

# 运行数据库迁移
supabase db push

# 生成类型
supabase gen types typescript --local > types/supabase.ts
```

### RLS 策略模板

```sql
-- 启用 RLS
ALTER TABLE schema.table ENABLE ROW LEVEL SECURITY;

-- SELECT 策略
CREATE POLICY "policy_name" ON schema.table
FOR SELECT TO authenticated
USING (/* 条件 */);

-- INSERT 策略
CREATE POLICY "policy_name" ON schema.table
FOR INSERT TO authenticated
WITH CHECK (/* 条件 */);

-- UPDATE 策略
CREATE POLICY "policy_name" ON schema.table
FOR UPDATE TO authenticated
USING (/* 行选择条件 */)
WITH CHECK (/* 新值验证条件 */);

-- DELETE 策略
CREATE POLICY "policy_name" ON schema.table
FOR DELETE TO authenticated
USING (/* 条件 */);
```

### 在策略中访问 JWT

```sql
-- 获取已认证用户的 ID
auth.uid()

-- 获取自定义 claim
auth.jwt() ->> 'claim_name'

-- 获取嵌套 claim
auth.jwt() -> 'app_metadata' ->> 'project_id'
```

---

## WhatsApp OTP 登录

### 概述

使用 Twilio WhatsApp API 发送 OTP 验证码，比 SMS 便宜约 18 倍。

| 方式 | 马来西亚价格 |
|-----|-------------|
| SMS | ~RM 1.17/条 |
| WhatsApp | ~RM 0.063/条 |

### 登录流程

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         WhatsApp OTP 登录流程                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  用户输入手机号 + project_id（从域名获取）                                    │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │ 1. 调用 send-otp Edge Function       │                                    │
│  │    - 检查 public.user 是否存在        │                                    │
│  │    - 生成 6 位 OTP                   │                                    │
│  │    - 存入 public.otp_verification    │                                    │
│  │    - 通过 Twilio 发送 WhatsApp       │                                    │
│  └─────────────────┬───────────────────┘                                    │
│                    │                                                        │
│                    ▼                                                        │
│  用户收到 WhatsApp 验证码，输入验证码                                         │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │ 2. 调用 verify-otp Edge Function     │                                    │
│  │    - 验证 OTP 是否正确且未过期        │                                    │
│  │    - 查询 public.user 获取用户信息    │                                    │
│  │    - 创建或更新 auth.users           │                                    │
│  │    - 生成 JWT Token                  │                                    │
│  └─────────────────┬───────────────────┘                                    │
│                    │                                                        │
│                    ▼                                                        │
│  返回 JWT Token，用户登录成功                                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### OTP 验证表

```sql
-- OTP 验证记录表
CREATE TABLE public.otp_verification (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT NOT NULL,
  project_id UUID NOT NULL REFERENCES public.project(id),
  otp_code TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT false,
  attempts INT NOT NULL DEFAULT 0,  -- 尝试次数，防止暴力破解
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- 同一手机号+项目，5分钟内只能有一个有效 OTP
  UNIQUE(phone, project_id, otp_code)
);

CREATE INDEX idx_otp_phone_project ON public.otp_verification(phone, project_id);
CREATE INDEX idx_otp_expires ON public.otp_verification(expires_at);

-- 自动清理过期 OTP（可选，通过 pg_cron）
-- SELECT cron.schedule('cleanup-expired-otp', '*/10 * * * *',
--   $$DELETE FROM public.otp_verification WHERE expires_at < now()$$);
```

### 环境变量配置

在 `.env` 文件中添加：

```bash
# Twilio WhatsApp OTP
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
```

在 `docker-compose.yml` 的 `functions` 服务中添加环境变量：

```yaml
functions:
  environment:
    # ... 其他环境变量
    TWILIO_ACCOUNT_SID: ${TWILIO_ACCOUNT_SID}
    TWILIO_AUTH_TOKEN: ${TWILIO_AUTH_TOKEN}
    TWILIO_WHATSAPP_FROM: ${TWILIO_WHATSAPP_FROM}
```

### Edge Function: send-otp

```typescript
// volumes/functions/send-otp/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const TWILIO_ACCOUNT_SID = Deno.env.get('TWILIO_ACCOUNT_SID')!
const TWILIO_AUTH_TOKEN = Deno.env.get('TWILIO_AUTH_TOKEN')!
const TWILIO_WHATSAPP_FROM = Deno.env.get('TWILIO_WHATSAPP_FROM')!

serve(async (req) => {
  try {
    const { phone, project_id } = await req.json()

    if (!phone || !project_id) {
      return new Response(
        JSON.stringify({ error: 'Phone and project_id are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 创建 Supabase 客户端
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // 检查用户是否存在于该项目
    const { data: user, error: userError } = await supabaseAdmin
      .from('user')
      .select('id, name, phone')
      .eq('phone', phone)
      .eq('project_id', project_id)
      .eq('is_delete', false)
      .single()

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'User not found in this project' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 检查是否有未过期的 OTP（防止频繁发送）
    const { data: existingOtp } = await supabaseAdmin
      .from('otp_verification')
      .select('id, created_at')
      .eq('phone', phone)
      .eq('project_id', project_id)
      .eq('verified', false)
      .gt('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (existingOtp) {
      const createdAt = new Date(existingOtp.created_at)
      const now = new Date()
      const diffSeconds = (now.getTime() - createdAt.getTime()) / 1000

      if (diffSeconds < 60) {  // 60 秒内不能重复发送
        return new Response(
          JSON.stringify({
            error: 'Please wait before requesting another OTP',
            retry_after: Math.ceil(60 - diffSeconds)
          }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        )
      }
    }

    // 生成 6 位 OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000)  // 5 分钟后过期

    // 存入数据库
    const { error: insertError } = await supabaseAdmin
      .from('otp_verification')
      .insert({
        phone,
        project_id,
        otp_code: otp,
        expires_at: expiresAt.toISOString()
      })

    if (insertError) {
      return new Response(
        JSON.stringify({ error: 'Failed to create OTP' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 发送 WhatsApp 消息
    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`

    const response = await fetch(twilioUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: TWILIO_WHATSAPP_FROM,
        To: `whatsapp:${phone}`,
        Body: `Your verification code is: ${otp}. Valid for 5 minutes.`,
      }),
    })

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to send WhatsApp message' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'OTP sent successfully',
        expires_in: 300  // 5 分钟
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
```

### Edge Function: verify-otp

```typescript
// volumes/functions/verify-otp/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  try {
    const { phone, project_id, otp } = await req.json()

    if (!phone || !project_id || !otp) {
      return new Response(
        JSON.stringify({ error: 'Phone, project_id and otp are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // 查询 OTP 记录
    const { data: otpRecord, error: otpError } = await supabaseAdmin
      .from('otp_verification')
      .select('*')
      .eq('phone', phone)
      .eq('project_id', project_id)
      .eq('otp_code', otp)
      .eq('verified', false)
      .gt('expires_at', new Date().toISOString())
      .single()

    if (otpError || !otpRecord) {
      // 增加尝试次数（防止暴力破解）
      await supabaseAdmin
        .from('otp_verification')
        .update({ attempts: otpRecord?.attempts ? otpRecord.attempts + 1 : 1 })
        .eq('phone', phone)
        .eq('project_id', project_id)
        .eq('verified', false)

      return new Response(
        JSON.stringify({ error: 'Invalid or expired OTP' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 检查尝试次数
    if (otpRecord.attempts >= 5) {
      return new Response(
        JSON.stringify({ error: 'Too many failed attempts. Please request a new OTP.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 标记 OTP 为已验证
    await supabaseAdmin
      .from('otp_verification')
      .update({ verified: true })
      .eq('id', otpRecord.id)

    // 获取用户信息
    const { data: user, error: userError } = await supabaseAdmin
      .from('user')
      .select('*, role:role_id(name, level)')
      .eq('phone', phone)
      .eq('project_id', project_id)
      .eq('is_delete', false)
      .single()

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'User not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 检查或创建 auth.users 记录
    let authUser
    if (user.auth_id) {
      // 用户已有 auth 记录
      const { data } = await supabaseAdmin.auth.admin.getUserById(user.auth_id)
      authUser = data.user
    } else {
      // 创建新的 auth 用户（无密码，OTP 登录）
      const { data, error } = await supabaseAdmin.auth.admin.createUser({
        phone: phone,
        phone_confirm: true,
        app_metadata: {
          project_id: project_id,
          role: user.role.name
        }
      })

      if (error) {
        return new Response(
          JSON.stringify({ error: 'Failed to create auth user' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        )
      }

      authUser = data.user

      // 更新 public.user 的 auth_id
      await supabaseAdmin
        .from('user')
        .update({ auth_id: authUser.id })
        .eq('id', user.id)
    }

    // 生成 session token
    const { data: session, error: sessionError } = await supabaseAdmin.auth.admin
      .generateLink({
        type: 'magiclink',
        email: user.email || `${phone}@phone.local`,  // 需要 email，用手机号生成临时 email
      })

    // 返回自定义 token 或使用 Supabase 的 session
    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          phone: user.phone,
          email: user.email,
          role: user.role.name,
          project_id: user.project_id
        },
        // 注意：生产环境应该返回正确的 JWT
        message: 'Login successful'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
```

### 前端调用

```typescript
// 发送 OTP
const sendOtp = async (phone: string, projectId: string) => {
  const { data, error } = await supabase.functions.invoke('send-otp', {
    body: { phone, project_id: projectId }
  })

  if (error) {
    console.error('Failed to send OTP:', error)
    return { success: false, error: error.message }
  }

  return { success: true, expires_in: data.expires_in }
}

// 验证 OTP 并登录
const verifyOtp = async (phone: string, projectId: string, otp: string) => {
  const { data, error } = await supabase.functions.invoke('verify-otp', {
    body: { phone, project_id: projectId, otp }
  })

  if (error) {
    console.error('Failed to verify OTP:', error)
    return { success: false, error: error.message }
  }

  // 登录成功，保存用户信息
  return { success: true, user: data.user }
}

// 使用示例
const projectId = 'xxx-xxx-xxx'  // 从域名或配置获取
await sendOtp('+60167281563', projectId)
// 用户输入验证码后
await verifyOtp('+60167281563', projectId, '123456')
```

### Twilio 设置步骤

1. 注册 Twilio 账号：https://www.twilio.com/try-twilio
2. 进入 Console → Messaging → Try it out → Send a WhatsApp message
3. 用手机 WhatsApp 发送 join code 到 `+1 415 523 8886` 加入 Sandbox
4. 获取 Account SID 和 Auth Token（Account Dashboard → Account Info）
5. 配置环境变量并重启 functions 服务

### 生产环境注意事项

1. **申请 WhatsApp Business 号码** - 替换 Sandbox 测试号码
2. **限制发送频率** - 防止滥用（已在代码中实现 60 秒限制）
3. **限制尝试次数** - 防止暴力破解（已在代码中实现 5 次限制）
4. **定期清理过期 OTP** - 使用 pg_cron 或定时任务
5. **重新生成 Auth Token** - 如果已泄露

---

## 前端认证集成（Vue + Vben Admin）

### 架构设计

前端认证系统支持两种模式，通过环境变量 `VITE_NITRO_MOCK` 自动切换：

```
┌─────────────────────────────────────────────────────────────┐
│                    Pinia Store (auth.ts)                     │
│                                                              │
│   调用统一接口：loginApi, logoutApi, getUserInfoApi, etc.    │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   auth.ts (统一入口)                         │
│                                                              │
│   根据 VITE_NITRO_MOCK 环境变量自动切换：                    │
│   ┌─────────────────┐      ┌─────────────────┐              │
│   │ Mock 模式       │      │ Supabase 模式   │              │
│   │ VITE_NITRO_MOCK │      │ VITE_NITRO_MOCK │              │
│   │ = true          │      │ = false         │              │
│   │                 │      │                 │              │
│   │ requestClient   │      │ supabase-auth   │              │
│   │ /auth/login     │      │ Supabase Auth   │              │
│   └─────────────────┘      └─────────────────┘              │
└─────────────────────────────────────────────────────────────┘
```

### 启动命令

| 命令 | 模式 | 数据源 | 环境文件 |
|------|------|--------|----------|
| `pnpm dev` | Mock | 虚拟数据 (backend-mock) | `.env.development` |
| `pnpm dev:supabase` | Supabase | 线上数据库 | `.env.development.supabase` |

### 环境配置文件

**`.env.development`（Mock 模式）：**
```bash
VITE_NITRO_MOCK=true
VITE_GLOB_API_URL=/api
```

**`.env.development.supabase`（Supabase 模式）：**
```bash
VITE_NITRO_MOCK=false
VITE_GLOB_API_URL=https://api.zeta-groups.com
VITE_SUPABASE_URL=https://api.zeta-groups.com
VITE_SUPABASE_ANON_KEY=eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9...
VITE_SUPABASE_SCHEMA=test_school
```

> ⚠️ **安全要求**：即使是内网/开发环境，也必须使用 HTTPS。可通过 Nginx + Let's Encrypt 或 mkcert（本地开发证书）配置。

### 关键文件

| 文件 | 说明 |
|------|------|
| `apps/web-antd/src/api/core/auth.ts` | **统一认证 API 入口** - Store 只调用这个文件 |
| `apps/web-antd/src/api/core/supabase-auth.ts` | Supabase Auth 实现（内部使用） |
| `apps/web-antd/src/api/supabase.ts` | Supabase 客户端（支持双 schema） |
| `apps/web-antd/src/stores/auth.ts` | Auth Store - 只调用统一 API |

### Supabase 客户端设计

支持双 schema 访问：
- **public schema** - 用于 `user`、`role`、`project` 表和认证
- **业务 schema** (如 `test_school`) - 用于业务数据表

```typescript
// supabase.ts 自动根据表名选择 schema
const authTables = ['user', 'role', 'project'];
// 认证相关表使用 public schema
// 业务表使用 VITE_SUPABASE_SCHEMA 配置的 schema
```

### 确认数据库连接的方法

执行 `pnpm dev:supabase` 后，可以通过以下方式确认是否连接到数据库：

#### 1. 浏览器控制台检查

打开 http://localhost:5666，按 F12 打开开发者工具，在 Console 中查看：
- 如果没有 "Supabase not configured, falling back to mock mode" 警告，说明已连接
- 登录时查看 Network 请求，应该是发往 `https://api.zeta-groups.com/auth/v1/token`

#### 2. 登录测试

使用数据库中的测试用户登录：
- `admin@testschool.com` / `Admin123!`
- `teacher@testschool.com` / `Teacher123!`
- `student@testschool.com` / `Student123!`

如果登录成功并显示正确的用户名（张管理/李老师/王同学），说明已连接数据库。

#### 3. Network 请求确认

在浏览器 Network 面板中：
- **Mock 模式**：请求发往 `/api/auth/login`
- **Supabase 模式**：请求发往 `https://api.zeta-groups.com/auth/v1/token?grant_type=password`

#### 4. JWT Token 检查

登录成功后，在浏览器 Application → Local Storage 中查看 access token，解码后应包含：
- `project_id` - 项目 ID
- `role` - 用户角色 (admin/teacher/student)
- `role_level` - 角色等级

---

## 测试用户（test_school 项目）

### 已创建的测试用户

| 用户 | Email | 密码 | 角色 | 权限等级 |
|------|-------|------|------|---------|
| 张管理 | admin@testschool.com | Admin123! | admin | 20 |
| 李老师 | teacher@testschool.com | Teacher123! | teacher | 50 |
| 王同学 | student@testschool.com | Student123! | student | 60 |

### 数据库记录

**public.user 记录：**
- 所有用户已关联到 `test_school` 项目 (`faaa3fb0-0780-4645-aab7-ce3034fd09a3`)
- 每个用户都有对应的 `role_id` 关联

**auth.users 记录：**
- 已创建对应的认证用户
- 密码使用 bcrypt 加密
- `email_confirmed_at` 已设置（无需邮箱验证）
- `phone_confirmed_at` 已设置

**关联状态：**
- `public.user.auth_id` 已关联到 `auth.users.id`
- Auth Hook 会在登录时注入 `project_id`、`role`、`role_level` 到 JWT

### 创建用户的 SQL 参考

```sql
-- 1. 创建 public.user 记录
INSERT INTO public.user (project_id, role_id, name, email, phone, status) VALUES
  ('faaa3fb0-0780-4645-aab7-ce3034fd09a3',
   (SELECT id FROM public.role WHERE name = 'admin'),
   '张管理', 'admin@testschool.com', '+60123456789', 'active');

-- 2. 创建 auth.users 记录
INSERT INTO auth.users (
  instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
  phone, phone_confirmed_at, raw_app_meta_data, raw_user_meta_data,
  is_super_admin, created_at, updated_at, confirmation_token,
  email_change, email_change_token_new, recovery_token,
  email_change_confirm_status, is_sso_user, is_anonymous
) VALUES (
  '00000000-0000-0000-0000-000000000000', gen_random_uuid(), 'authenticated', 'authenticated',
  'admin@testschool.com', crypt('Admin123!', gen_salt('bf')), now(),
  '+60123456789', now(), '{"provider": "email", "providers": ["email"]}',
  '{"name": "张管理"}', false, now(), now(), '', '', '', '', 0, false, false
);

-- 3. 关联 auth_id
UPDATE public.user u
SET auth_id = a.id
FROM auth.users a
WHERE u.email = a.email AND u.auth_id IS NULL;
```

### Auth Hook 配置

在 `/opt/supabase/supabase/docker/.env` 中添加：

```bash
GOTRUE_HOOK_CUSTOM_ACCESS_TOKEN_ENABLED=true
GOTRUE_HOOK_CUSTOM_ACCESS_TOKEN_URI=pg-functions://postgres/public/custom_access_token_hook
```

重启 Docker 服务后生效。

---

## 参考文档

- [Supabase RLS 文档](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase Custom Claims & RBAC](https://supabase.com/docs/guides/database/postgres/custom-claims-and-role-based-access-control-rbac)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Hardening Data API](https://supabase.com/docs/guides/database/hardening-data-api)
- [PostgreSQL Roles](https://supabase.com/docs/guides/database/postgres/roles)
- [Supabase Vault](https://supabase.com/docs/guides/database/vault)
- [Twilio WhatsApp API](https://www.twilio.com/docs/whatsapp/api)
- [Twilio SMS Pricing Malaysia](https://www.twilio.com/en-us/sms/pricing/my)
