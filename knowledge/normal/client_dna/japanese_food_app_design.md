---
name: japanese-food-app-design
description: "Japanese Food App UI/UX Design Mastery"
triggers: ["japanese food app design", "japanese_food_app_design", "japanese food design"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: japanese_food_app_design
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# Japanese Food App UI/UX Design Mastery

## 核心设计理念 (Core Design Philosophy)

日本的餐饮应用（如点餐、外卖服务）在全球范围内以其对细节的极致追求、用户体感的极高重视以及将“枯燥的工具”转化为“有趣的体验”而闻名。核心理念可以用三个词概括：高信息密度但有序、视觉驱动食欲、游戏化提升留存（Gamification）。

## 3个典型日本点餐App/Web分析

### 1. Menu (本地新兴外卖平台)

设计理念： 现代化、年轻化与游戏化（Gamification）。
构造排列：

- 全屏视觉冲击： 摒弃传统的文字列表，采用大尺寸、高清晰度的无背景美食图片作为主视觉。
- 卡片式抽屉布局： 底部抽屉式交互（Bottom Sheets）顺滑，单手操作体验极佳。
  用户体验与有用启发：
- Gacha（扭蛋）机制： 这是Menu最成功的UX之一。用户下单或留下带图好评可以获得扭蛋代币，抽取限定周边或优惠券。将“点外卖”变成了“玩游戏”，极大地提高了留存率。
- 微交互（Micro-interactions）： 添加购物车时的飞入动画、加载时的趣味UI，缓解了用户等待的焦虑感。
- 应用到后续生成： 在生成应用时，可考虑加入类似的“进度条”、“成就勋章”或“盲盒/抽奖”等游戏化UI组件来提高用户获取感。

### 2. 出前馆 (Demae-can - 日本国民级外卖平台)

设计理念： 信任感、高效转化与本土化布局。
构造排列：

- 高密度分类网格（Grid Navigation）： 首页上方密集的Icon分类（寿司、拉面、便当等），契合日本用户习惯的高信息密度阅读。
- 优惠前置（Coupon First）： 头图轮播或浮动横幅永远是当前最优惠的活动。
  用户体验与有用启发：
- 确定性与透明度： 每一个店铺列表极其显眼地标注了“配送时间（如15-20分）”和“配送费”，并用不同颜色高亮。
- 本地化色彩心理学： 大量使用能够引发食欲的暖色调（主色调为红色），按钮状态极其清晰（Active/Disabled）。
- 应用到后续生成： 在设计UI时，必须保证价格、时间、优惠信息的层级最高且最易读；利用色彩心理学（红/黄）刺激购买欲。

### 3. 藏寿司 (Kura Sushi / くら寿司 官方App)

设计理念： 全渠道融合（Omnichannel）与家庭化、趣味化交互。
构造排列：

- 清晰的操作区块（Chunky UI）： 考虑到多年龄层用户，按钮设计巨大，色彩对比强烈，多使用带有圆角的直观扁平化设计。
- 堂食与外带的无缝切换： 首页最显眼的两个入口清晰划分“预约堂食”和“外带下单”，路径极短。
  用户体验与有用启发：
- Bikkura Pon (扭蛋系统) 数字化： 原本店里吃5盘寿司抽一次扭蛋的经典玩法被移植到App中，线上点餐也能积攒“盘数”参与抽奖。
- 传送带般的选餐： 选购视觉像在真实的传送带上拿取一样直观。
- 应用到后续生成： 强调UI的“亲和力（Affinity）”，多使用圆角（`Border-radius: 12px ~ 16px`），使用柔和而明亮的色彩以及柔和的极淡阴影。

---

## 💡 AI Agent 下次生成应用的落地指南 (Actionable Guidelines for Next Generation)

当我随后的时间为您生成 Web 或 App 时，我将自动回想并应用此知识库中的以下规则：

1. 色彩与质感 (Color & Texture)
   - 使用暖色调(红、橙、亮黄)作为核心CTA(Call to Action)按钮，刺激点击。
   - 保留充足留白（Whitespace），大背景多使用低饱和微灰色（如 `#f9fafb` 或 `#f5f7fa`），以凸显前方高亮亮的食物图片。

2. 排版与组件 (Typography & Components)
   - 大图卡片优先： 菜品展示必须以大比例的高清图片为主，利用图片暗角叠加渐变阴影保证浮动文字可读性。
   - 圆角与软阴影 (Soft UI)： 大量使用 `border-radius: 16px` 以及柔和的 `box-shadow: 0 10px 30px rgba(0,0,0,0.06)`，营造日式精细、温和的视觉体感。
   - 高亮状态标签 (Status Badges)： 菜品图片左上角必须带有醒目的标签（如“人气No.1”、“限定”、“剩余2份”），利用清晰的信息密度促单。

3. 微交互与游戏化 (Micro-interactions & Gamification)
   - 提供良好的操作反馈（如悬停时的平滑缩放 `transform: scale(1.02)`，以及平滑过渡 `transition: all 0.3s ease`）。
   - 适时在用户主流程中嵌入诸如“连续下单挑战进度”、“积分/优惠券兑换区”等能够带来惊喜感的UI板块，打破传统工具类APP的枯燥感。
