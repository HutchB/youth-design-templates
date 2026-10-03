# Supabase — Vetta Edition

The companion `demo.html` builds the table editor — sidebar, toolbar, data grid and an inverted SQL block — plus a mobile layout and deliberate off-style counter-examples. It is the reference for on-style here.

## Atmosphere
A quietly technical console. White paper, near-black ink, hairline grids, and
one emerald that says open-source Postgres. It reads like well-set
documentation that happens to be an interface — honest, dense,
unsentimental.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is white; `surface-raised` (#fafafa) is the single shy step down
  for sidebars, table headers and code fills.
- `primary` is emerald (#3ecf8e) and it carries deep green (#003a1d) text:
  brand CTAs, active states, the logo. Never a large wash.
- `muted` gray for secondary text; `border` (#e5e7eb) does all structural
  work — panels are border-defined and shadow-free by default.
- `accent` (violet #7c66a1) and other chart hues stay inside charts and
  illustrations, never chrome.
- `danger` (#e5484d) for destructive actions and failed rows.

## Typography
- One sans, weight 400 for almost everything; 500 only for nav, buttons and
  table headers. Hierarchy comes from size, not boldness.
- Body 14px; metadata 12–13px muted; headings 20–28px, tight.
- Monospace is a first-class voice: row ids, values, inline code and all SQL
  run 12–13px mono.

## Shape & depth
- Radius 4–8px; pills reserved for status badges and the primary CTA.
- Depth is border contrast, not shadow. `shadow-md` appears only under
  popovers and menus.

## Components
- Primary button: emerald pill with deep-green label; secondary is bordered
  white; ghost buttons live in toolbars.
- Table: 32–36px rows, hairline dividers, mono ids, status as a small dot
  plus a soft badge.
- Code blocks invert: near-black fill, light text, emerald keywords — the
  one place the light console goes dark.
- Tabs: text with an active emerald underline; segmented filters get
  borders.

## Layout
- Console: left nav 220–240px, bordered panels in the main column, toolbars
  40–44px tall.
- Marketing and docs: centered ~1200px, generous 96–128px section gaps with
  dense clusters inside each section.

## Don'ts
- Emerald is a signal, not a paint: no green backgrounds, no green headings,
  a handful of green elements per screen at most.
- No heavy shadows, no card radius above 12px, no walls of bold text.
- Chart hues never leak into buttons, links or body text.
- Don't center everything — the console is left-aligned and grid-strict.
