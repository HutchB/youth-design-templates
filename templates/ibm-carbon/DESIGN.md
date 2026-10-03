# IBM Carbon — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Enterprise precision. Everything sits on a strict gray scaffold with 2px corners,
1px lines and type that reads like an engineering document. The page is grayscale
until the product has something to say — which is exactly why the blue, the green
and the red land with force when they appear.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` (Gray 10, #f4f4f4) is the page; `surface-raised` (white) is every
  tile, table and panel that sits on it. The dark shell — side nav, dark themes,
  the overlay scrim — inverts to the ink value (#161616) with #353535 for its
  hover layer: layering by luminance, not by shadow.
- `primary` (Blue 60, #0f62fe) is spent on exactly one thing per view: the
  primary action, plus selection states. Secondary actions are outline or ghost
  — a border and text, never a second fill.
- `muted` (Gray 70, #525252) is helper text and table headers; `border`
  (Gray 20, #e0e0e0) draws every structural line on the page.
- `accent` (Green 40, #42be65) marks success and healthy state; `danger`
  (Red 60, #da1e28) marks failure and destructive intent. Neither one decorates.

## Typography
The official voice is IBM Plex Sans with IBM Plex Mono for data; the theme ships
a system stack in that spirit (`"IBM Plex Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif`)
and loads no webfont.
- Body is 14px at 1.45 — one size carries almost the entire product.
- Page titles 20–28px semibold; field and section labels 12px in `muted`.
- Numbers, IDs and statuses are tabular mono at 12–14px; numeric columns
  right-align. All-caps is reserved for short table headers, never sentences.

## Shape & depth
- Corners are 0–2px; nothing rounds above 4px. A pill is a tag shape, never a
  button.
- Depth is flat: page → raised tile → dark overlay scrim → modal. Tiles separate
  from the page with a 1px `border`, not a shadow.
- The three shadows exist only for genuinely floating layers — dropdown, popover,
  modal — and stay small and hard-edged.

## Components
- The data table is the protagonist: 32px compact rows (48px default), 12px
  `muted` headers, a leading checkbox column, and a 3px `primary` left edge on
  the selected row.
- Buttons are rectangles on the 2px radius: filled `primary`; secondary (icon +
  text on white with 1px border); ghost (text only); danger — at most one red
  action per view.
- Inline notifications: a 3px colored left edge, a tinted background (#defbe6
  success, #edf5ff info, #fff1f1 danger), a bold heading, body text and a close
  box.
- Tiles: white, 1px border, 16–24px padding — a metric, a label, and an optional
  footer link. Clickable tiles get an arrow, not a shadow.

## Layout
A strict grid with 8px units and 16px page gutters. A dark ~200px side nav and a
page header pin the working area; content packs densely inside it. Everything
aligns to column edges — nothing floats free of the grid, and whitespace is
evenly rationed rather than dramatic.

## Don'ts
- No rounded corners beyond 4px, no gradients, no drop shadows inside the page.
- No decorative blue — if it is not an action or a selection, it is grayscale.
- No one-off hues: success is Green 40, danger Red 60, warning the alert yellow
  (#f1c21b), and everything else stays on the gray scale.
- No 13px body text, no serif faces, no decorative illustration inside working
  screens.
- No colorful hover states — hover is a one-step gray (#e5e5e5), nothing more.
