# Revolut — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Fintech after dark. A true-black canvas, luminous raised cards, precise white
numerals and one cobalt-violet stamp that never overstays its welcome. The
loudest thing on screen is a white pill; everything else whispers.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is true black (#000000) — never near-black, never washed. The
  canvas flip between black and white bands is the brand's rhythm, but dark
  surfaces own the product shell.
- `surface-raised` (#16181a) lifts cards one luminous step; that plus a 1px
  `border` is the entire elevation system. Shadows do not stack cards here.
- `primary` is the white CTA pill with black `primary-foreground` text — the
  brightest pixel on any screen. `accent` cobalt (#494fdf) is a stamp, not a
  theme: one featured card, one badge, the brand glyph per view.
- Text is white `surface-foreground`; everything supporting is `muted`
  (#9ca0ab). `danger` (#e23b4a) covers declined payments and destructive
  actions only.

## Typography
System sans in two registers:
- Display at weight 500 with line-height 1.0 and heavy negative tracking
  (-0.02em and up); hero scale 48–80px, section heads 24–40px.
- Body 14–16px at 400; UI labels at 600 with a hint of positive tracking —
  the mechanical precision cue.
- Money is white, weight 600–700, `tabular-nums`; supporting amounts are
  `muted`.

## Shape & depth
- Buttons and badges are full pills; cards take `radius-lg` (20px); device-like
  mockups go to `radius-xl` (28px).
- Depth = luminance steps: black canvas → `surface-raised` card → cobalt
  featured surface. No drop shadows on resting cards; `shadow-lg` only under
  floating overlays and the card mockup.
- Hairlines are white at ~12% (`border`), never pure gray.

## Components
- Buttons: 48px pills — primary white-on-black, outlined pill for secondary
  (1px `border`), soft raised fill for tertiary.
- Balance header: huge white figure, muted caption, delta chips in mint or
  `danger`.
- Transactions: 56–64px rows — icon circle, name, category in `muted`, signed
  amount right-aligned; credits read in a restrained mint, never neon.
- Quick actions: a grid of raised pill tiles with simple glyphs.
- Category donut: a conic-gradient ring drawn from the narrow illustration
  palette (teal, pink, orange, cobalt) with a raised hole.
- Featured card: one cobalt surface per view (a plan upsell, a "most popular"
  badge) — the single saturated block the eye lands on.

## Layout
Content maxes near 1200px; the app shell pairs a 220px rail with a fluid main
column and an optional 320px analytics column. Band rhythm 80–120px in
marketing, 24–32px inside the product. Grids collapse 3-up → 2-up → 1-up.

## Don'ts
- Never soften the canvas to near-black or stack a second dark step beyond
  `surface-raised` — the ladder is exactly two rungs plus cobalt.
- Never use accent colors as button fills; they live inside illustrations,
  charts and category icons.
- Don't pair cobalt text with white backgrounds inside body content, and don't
  paint more than one cobalt element per viewport.
- No drop shadows on resting cards; luminance does that work.
- Body text never sits in weight 500 — 400 or 600 only.
