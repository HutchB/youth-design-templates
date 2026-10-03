# Neo Brutalism — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Anti-polish on purpose. A warm off-white page where every element is a flat,
saturated block drawn with a thick black outline and a hard offset shadow —
the page looks assembled from cardboard stickers that refuse to apologize.
Type is loud and uppercase, color is at full saturation, and nothing blends:
no gradients, no blur, no fade, no glow. The charm is confidence, not cute —
it reads as a zine, a street poster, or an indie tool that knows it is cool.

Fits indie SaaS, portfolio sites, event pages, creative tools and anything
that wants to feel hand-made and opinionated. It is a poor fit for dense data
products, finance, or anything that needs to whisper.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the warm off-white page (`#fffdf5`). Sections may alternate with
  a full-bleed `primary` yellow band — flat, edge to edge, no gradient.
- `surface-raised` is pure white: cards, inputs, dialogs. It exists only to
  give the black outline maximum contrast.
- `primary` is bright yellow, the loudest block on the page: hero fills, the
  one primary button per view, selected states.
- `primary-foreground` is near-black ink. White text on color never happens in
  this system — every fill is light enough that ink is the only legible pair.
- `accent` is sticker pink; `cyan` and `lime` are the secondary stickers. Use
  them for badges, tags and small blocks — two or three per screen, never all.
- `danger` is a loud coral for destructive actions and error banners; it keeps
  the same 2px outline and hard shadow as everything else.
- `muted` is a cool gray for secondary text only. Never use it as a fill.
- `border` is the same near-black ink as text: one outline color everywhere.
  A tinted border is off-style.

## Typography
Loud, condensed, uppercase:
- Headings are 800–900 weight, uppercase, tightly tracked (-0.02em), scaled
  big: hero 44–72px, section titles 24–32px. Being shy is the only failure.
- Body 16px regular in near-black; 14px for card meta. Line height 1.5.
- Buttons, badges and labels are uppercase 13–14px bold — small but shouting.
- System sans only. No serif, no script, no monospace as a primary face; mono
  may appear for prices, counts and terminal-ish details as a garnish.

## Shape & depth
- Corners are nearly square: `radius-sm` (0) for buttons and badges, up to
  `radius-lg` (6px) for large cards. Nothing rounder — a 16px corner is
  off-style, and pill shapes belong only to round sticker badges
  (`radius-full` with a 2px outline).
- Every block carries a 2px `border` in ink. An unoutlined flat fill floats
  wrong; if it has color, it has a border.
- Depth is the hard shadow: zero blur, pure ink, offset down-right —
  `shadow-sm` (2px) for badges and small controls, `shadow-md` (4px) for
  buttons and cards, `shadow-lg` (8px) for the one hero element per screen.
- Hover pushes the shadow out (`shadow-hover`), active slams the element flat
  (`shadow-active` + translate down-right by the offset). The shadow is the
  press physics.

## Components
- **Buttons:** flat yellow (`primary`) with 2px ink border and `shadow-md`;
  uppercase bold label, ink text. Secondary is white; tertiary stickers use
  `accent`/`cyan`/`lime`. Hover grows the shadow, active flattens it. Never
  gradient, never ghost-without-border.
- **Cards:** white, 2px border, `shadow-md`, square-ish corners. Inside: a
  bold uppercase title, plain body, and often a colored header strip or an
  image block with its own border.
- **Badges/stickers:** small filled blocks or `radius-full` pills in the
  sticker colors, 2px border, `shadow-sm`, occasionally rotated 2–6deg. The
  rotation is a garnish — one per screen, not a salad.
- **Inputs:** white field, 2px ink border, square corners, no floating label
  tricks. Focus is a second outline (`outline: 2px` offset 2) in ink, never a
  soft ring.
- **Nav:** a white bar with a 2px bottom border, logo as a bordered block,
  links as uppercase labels, CTA as the yellow button.
- **Tables/lists:** rows divided by 2px ink lines; selected row fills `primary`.
- **Marquee/stripes:** full-bleed yellow or ink bands with uppercase repeating
  text are the signature divider between sections.

## Layout
Poster logic, not dashboard logic:
- Big flat sections stacked vertically; alternate `surface` and full-color
  bands for rhythm.
- Content max-width ~1100px with generous side padding, but elements inside a
  section may deliberately butt against each other — hard shadows overlapping
  a neighbor's edge is a feature, not a bug.
- Grid cards align to a strict grid with 20–24px gaps; gaps smaller than the
  shadow offset make the shadows collide — either overlap boldly or leave
  room, do not half-tangle.
- Asymmetric hero: one huge headline block, one loud color block, one CTA.
  Whitespace is allowed but should look intentional, not airy-soft.

## Don'ts
- No gradients, no blur, no soft shadows, no opacity fades. `blur(1px)` is
  already a violation of the material.
- No white text on saturated fills; ink is the only label color on color.
- No rounded-everything: the radius scale caps at 6px, and pills are for
  badges only.
- No thin 1px hairline borders as structure — outlines are 2px ink or they
  are not there.
- No pastel desaturation: colors stay at full saturation or leave.
- No quiet hover fades; state changes move the shadow or the fill instantly.
- No more than one `shadow-lg` hero element per screen — when everything
  shouts, nothing is loud.
