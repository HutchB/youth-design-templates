# 设计资源编写手册

本仓库是 Vetta「设计」工作台的资源源。桌面端插件 `vetta-ui-design` 会拉取本仓库的
`.vetta/design-templates.json`，校验后展示；用户挑选后，条目内容会落到他的设计项目里
供 Agent 参考。

这份手册面向在本仓库中添加/修改条目的人与 AI。**所有规则都对应
`scripts/build-catalog.mjs` 里的硬校验**，CI 上不通过就合不进来。

## 最重要的三条

1. **条目目录是唯一事实源，`.vetta/design-templates.json` 是生成物。**
   加一个条目 = 建一个目录，不要手改顶层清单。改完跑 `node scripts/build-catalog.mjs`。
   （这一点刻意不同于 `vetta-official-marketplace` 的手写清单：那边 slug/version 要三处
   一致，是常见的同步失败源；这里少一个事实源，也让多个自动 PR 不会在同一个 JSON 上冲突。）

2. **这里的内容会进入 Agent 的上下文。** 它是待处理的参考数据，不是给 Agent 的指令。
   任何试图指挥 Agent 的句子（"忽略上面的"、"你必须先执行"、"请打开并读取…"）都不允许
   出现在 `DESIGN.md` 里，评审时按注入处理。

3. **不要放别人的原始素材。** 入库的是提炼后的规范文字和自己生成的示意图。
   原始网页截图、抓取到的 HTML 原文、品牌资源文件都不进仓库；来源记在 `meta.json` 的
   `origin` 里。

## 目录结构

```text
.vetta/design-templates.json     ← 生成物，不要手编
templates/<slug>/
  meta.json                      ← 条目事实源（唯一不算资源的文件）
  DESIGN.md                      ← 给 Agent 的规范正文
  theme.css                      ← 设计体系的 token（design-system 必需）
  reference.html                 ← 可选，任意参考素材
  screenshots/home.webp          ← 可选，子目录会被保留
  ...                            ← 目录下**任何**文件都会自动进 resources
scripts/build-catalog.mjs
```

条目目录里除 `meta.json` 外的所有文件都是这套风格的资源，会被原样复制到用户项目的
`design-resources/<slug>/` 供 Agent 参考——不需要在 `meta.json` 里逐个声明。`assets`
只用来标注**角色**（哪个是规范、哪个是主题），让客户端认路。

文本（`.md` `.css` `.html` `.txt` `.json` `.svg` `.ts(x)` `.js(x)`，单个 ≤256KB）直接
内联进清单，客户端一次请求拿到全部内容；其余按二进制处理，只在清单里留地址，等用户真的
选中这套风格再下载。所以截图放心加，但别放几十 MB 的东西。

## 添加一个条目

1. 建目录 `templates/<slug>/`，slug 符合 `^[a-z0-9][a-z0-9-]{0,63}$` 且与 `meta.slug` 一致。
2. 放内容文件（见下方各 kind 的必需资产）。
3. 写 `meta.json`。
4. 跑 `node scripts/build-catalog.mjs`，把生成的清单一起提交。
5. 开 PR。CI 会跑 `--check`。

## `meta.json` 字段

| 字段 | 约束 |
| --- | --- |
| `schemaVersion` | 固定 `1` |
| `kind` | `design-system` / `reference` / `remixable` |
| `slug` | 与目录名一致 |
| `name` | 展示名，品牌名不翻译 |
| `version` | `^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$`，内容变了就 bump |
| `order` | 非负整数，**展示顺序**。见下方「顺序是有意义的」 |
| `category` | 如 `dev` / `fintech` / `playful` / `editorial` |
| `vibe` | `light` 或 `dark` |
| `tags` | 字符串数组 |
| `blurb` | 一句英文风格摘要，**给模型做推荐依据用**，不展示 |
| `tagline` | `{ en, zh }`，**给用户看的一句话**，两种语言都必填 |
| `license` | 必填 |
| `origin` | `{ type, upstream?, sourceUrl?, note? }`，`type` 为 `curated` 或 `collected` |
| `collectedAt` | `YYYY-MM-DD` |
| `assets` | **角色**声明，键只能是 `spec` / `theme` / `preview` / `package`；值是本目录内的相对路径。其余文件不必声明 |

各 kind 的必需资产：

- `design-system`：`spec` + `theme`
- `reference`：`spec`
- `remixable`：`package`

## demo.html 是生成物

每个条目的 `demo.html` 是「同一个产品页在这套体系下长什么样」，由
`scripts/build-demos.mjs` 生成：**页面结构 22 套完全一致**，视觉差异全部来自各自的
`theme.css` token 加生成器里那张形态表（字体、字重、大小写、圆角档位、边框宽度、
按钮与卡片的特殊形态）。结构一致才能横向比较，也让改版一次改到全部。

- 要调某套风格的 demo，改 `build-demos.mjs` 里 `PROFILES[slug]`，**不要手改 demo.html**。
- 想完全手写某套的 demo，把 slug 加进生成器的 `SKIP`，生成器就不再覆盖它。
- demo 会被客户端塞进**不给脚本执行权**的 sandbox iframe 作悬停预览，所以：
  **不许 `<script>`、不许外链样式表/图片、不许 `@import`**，样式和图片一律内联。
  build-catalog 会硬校验这几条。

## 顺序是有意义的

`order` 决定用户看到的排列，**按风格差异交错排**（亮/暗、冷/暖、克制/张扬），
让人横滑前几张就能碰到完全不同的方向。不要按字母序、也不要按收录时间追加到末尾。

现有条目用 10 的间隔（10、20、30…），插新条目时取中间值即可，不必重排别人的。

## `DESIGN.md` 约定

- **不要写 YAML frontmatter。** 客户端落盘时会自己拼上 `system` / `name` / `source` /
  `license`，条目里再带一份会写出两段 frontmatter。校验会拦。
- 正文用固定小节：`Atmosphere` / `Color roles` / `Typography` / `Spacing & layout` /
  `Components` / `Motion` / `Don't`。
- 颜色一律引用 token 名，不写死 hex —— 真值只在 `theme.css` 里。

## `theme.css` 的 token 契约

必须包含这 7 个基础 color token，**只换值、不改名、不删除**：

```text
--color-primary            --color-primary-foreground
--color-surface            --color-surface-foreground
--color-muted              --color-accent
--color-danger
```

统一追加 `--color-surface-raised`、`--color-border`，以及 radius / shadow 刻度。
体系特有的 token 可以增，但不能减少上面这些 —— 客户端和已有画框都按这套名字取色。

## 更新多久到用户手上

客户端首选 `raw.githubusercontent.com`（`max-age=300`），本地 TTL 5 分钟且带 ETag 条件
请求。**合进 `main` 之后几分钟内、用户下次打开「设计」页就会看到**，不需要任何人工操作。

jsDelivr 只是兜底。它对 `@main` 会缓存「分支→commit」的解析结果（12 小时），而且
purge 单个文件刷不掉——实测调用 purge 返回 `finished`，内容依然是半天前的。所以
**不要把它当首选源，也不要指望 purge 能救**。

想立刻确认：在设计页点一下「刷新」会强制跳过本地 TTL。

## 提交前检查清单

- [ ] `node scripts/build-catalog.mjs` 跑过，清单一起提交了
- [ ] `node scripts/build-catalog.mjs --check` 通过
- [ ] `DESIGN.md` 没有 frontmatter、没有指挥 Agent 的句子
- [ ] `theme.css` 7 个基础 token 齐全
- [ ] `order` 没和别人撞，且插的位置符合"风格交错"
- [ ] `origin` 如实填写，没有夹带别人的原始素材
- [ ] `tagline` 中英都写了
