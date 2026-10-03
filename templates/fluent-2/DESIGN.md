# Fluent 2 — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Windows 11 productivity: layered, calm, built for long sessions of real work. The window is a stack of near-identical grays separated by hairlines — mica base, content layer, white cards — with depth carried by the quietest possible stroke and the shallowest possible shadow. Acrylic appears only where something truly floats. One calm blue does the pointing; everything else is ink on gray.

Fits productivity software, file managers, admin consoles, enterprise dashboards and developer tools. A poor fit for expressive marketing pages or playful consumer surfaces.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` (#f5f5f5) is mica, the window base: a soft light gray that everything inside the window sits on.
- `surface-raised` (#fbfbfb) is the content layer above mica; `card` (#ffffff) is the card layer above that. This three-gray ladder plus hairline strokes does the work that shadows do in other systems.
- `primary` (#0f6cbd) is the Fluent 2 brand blue: the accent fill on the one primary command, focus strokes, selection states. It is a calm, slightly desaturated blue — closer to "link" than "logo".
- `accent` (#038387) is the second voice. Fluent 2's palette offers several secondaries; this spec pins teal, which keeps clear distance from the brand blue and reads as "data/communication" rather than a second brand. The lighter brand variant #2899f5 was rejected because it reads as the same voice one step brighter and adds no second meaning. Teal appears in small, deliberate moments — a chart series, an info chip, a secondary highlight.
- `muted` (#616161) is secondary text and disabled glyphs; `border` (#e5e5e5) is the hairline separating every layer.
- `danger` (#c50f1f) is Fluent's error red — deep and serious, never decorative.

## Typography
Segoe UI Variable is the official voice; the theme ships a system stack in that spirit (`"Segoe UI Variable Text", "Segoe UI", system-ui, -apple-system, sans-serif`) and loads no webfont.
- Body and controls run 14px — the Windows default. Captions and auxiliary text 12px; title-bar text 12px.
- Page titles 28px semibold, section titles 20px semibold. Fluent uses weight 600 where other platforms use bold; nothing shouts.
- Truncation with an ellipsis beats shrinking type.

## Shape & depth
- 8px is the control corner (WinUI's standard): buttons, inputs, cards, flyouts. Small controls — checkbox, radio — take 4px. Nothing above 12px inside the window chrome.
- Layering: mica base → content layer (`surface-raised`) → card, each step separated by a `border` hairline. A card needs no shadow to read as raised; the stroke and one gray step do it.
- Acrylic is the float material, for flyouts and menus only: rgba(249,249,249,0.85) fill + `backdrop-filter: blur(20px)`. It always carries `shadow-md` and a hairline, and it always overlaps content — acrylic over empty space is wasted.
- Shadows stay shallow: `shadow-sm` on hovered rows and focused inputs, `shadow-md` on flyouts, `shadow-lg` reserved for dialogs. Windows layers with strokes first and shadows second.
- Reveal highlight in one sentence: a faint pointer-following light that skims across borders and card surfaces, reminding you the chrome is a physical layer — subtle enough to notice only in motion.

## Components
- **Window chrome:** a title bar — app glyph, title left, caption buttons (minimize, maximize, close) right; close hovers red.
- **Command bar:** 40px icon buttons with a subtle fill on hover, a separator, and one accent "New" split button with a chevron compartment.
- **Navigation pane:** 36–40px rows with 16px glyphs; the selected row gets a soft gray fill and a 3×16px rounded accent bar on the left edge. Section labels are 12px `muted`.
- **Toggle:** a pill track with a square-ish thumb; off is a hairline-outlined gray track with a dark thumb, on is `primary` fill with a white thumb.
- **Inputs:** 4px radius, 1px hairline, `card` fill; focus draws a 2px `primary` underline at the bottom edge.
- **Flyouts:** acrylic panels at 8px radius with 14px rows; the selected item carries a 16px check in `primary`.
- **Content:** breadcrumb address bars, folder cards with hairline strokes, data tables with hairline row dividers and 12px column headers.

## Layout
Window content breathes on an 8px grid: 12px between related controls, 16px between groups, 24px around page sections. The nav pane runs 260–320px; content maxes around 1000px. Command bar, address bar and content share one left edge — that vertical hairline is the window's spine.

## Don'ts
- No colored window chrome: the frame stays gray; color belongs to content and selection.
- No corners above 8px on controls and no pill buttons — a fully-round button reads as a different platform.
- No card shadows as the primary cue; the hairline and the gray ladder do that work. Shadows are for things that actually float.
- No acrylic on cards, panes or the page — acrylic is for transient surfaces only.
- No traffic lights on the left; window controls live on the right and stay monochrome glyphs.
- No more than one accent-filled command per view; secondary actions are subtle buttons with hairline and hover fill.
- No loud gradients or glass everywhere: the calm is the product.
