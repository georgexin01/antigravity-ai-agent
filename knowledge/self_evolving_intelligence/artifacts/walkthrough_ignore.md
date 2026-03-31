# Extreme Performance Optimization Walkthrough

I have upgraded your project's **[.claudeignore](file:///c:/Users/user/Desktop/admin-panel-quizLaa/.claudeignore)** to the absolute maximum optimization level available for a Vben 5 monorepo.

## Major Performance Gains

### 🧵 Framework Pruning
I have ignored the following directories which contain full implementations of the dashboard for frameworks you are **not** using for this project:
- `apps/web-ele/` (Element Plus)
- `apps/web-naive/` (Naive UI)
- `apps/web-tdesign/` (TDesign)
- `playground/` (Feature testing)

### 🧹 Monorepo Hygiene
- **Metadata Suppression**: Ignored `.github/`, `.changeset/`, and various lint/build configs (`turbo.json`, `lefthook.yml`) that don't impact UI/Logic.
- **Documentation Pruning**: Ignored the root `docs/` folder and large README/CHANGELOG files.
- **Selective Assets**: All binary media and SVGs are now ignored **except** for those located specifically in `apps/web-antd/src/assets` and `packages/icons/src/svg`.

### ⚡ Context Snappiness
By removing these thousands of files from my "active memory," I can now:
- **Search faster** across your actual `web-antd` code.
- **Avoid confusion** between similar components in different framework apps.
- **Load more relevant code** into my limited context window.

> [!NOTE]
> If you ever need to reference logic from Element Plus or Naive UI, you will need to temporarily comment out the corresponding lines in `.claudeignore`.
