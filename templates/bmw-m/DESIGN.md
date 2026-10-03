# BMW M — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Motorsport engineering on a near-pure black canvas. White uppercase headlines
carry the confidence, full-bleed automotive imagery carries the energy, and the
chrome in between stays thin, sharp and quiet. The M tri-color stripe is the one
piece of ornament the system allows — a signature, never a paint job.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the black page floor on every marketing band; `surface-raised`
  (#1a1a1a) lifts cards, inputs and icon buttons one step. Spec cells sit on
  #0d0d0d (demo-level, barely off black).
- `primary` is white: headline type, outline-button borders and labels. The
  primary CTA is drawn as a transparent rectangle with a 1px white border — the
  outline is the button.
- The M tricolor is identity only: `m-blue` (#0066b1) → `m-blue-dark`
  (#1c69d4) → `m-red` (#e22718, also `accent`) on the 4px stripe, wordmarks and
  badges. It never fills a button or a surface.
- Text runs white → `body` (#bbbbbb) → `muted` (#7e7e7e); `border` (#3c3c3c)
  is the 1px hairline that divides everything.

## Typography
One family in two cuts — heavy stamped, light engineered:
- Display: 700 uppercase, 80/56/40/32px, zero letter-spacing. Sentence-case
  display reads off-brand.
- Labels and buttons: 700 uppercase at 14px with 1.5px tracking — the machined
  feel is the tracking, never drop it.
- Body: 300 (Light) at 14–16px, sentence case. Body never bolds up.
- Photo captions: 12px, 0.5px tracking, in `muted`.

## Shape & depth
- Radius is zero almost everywhere — buttons, cards, inputs, photo containers.
  The only circles are 48px icon buttons and carousel arrows.
- No drop shadows, no gradients on chrome. Depth comes from photography and the
  step between black canvas and #1a1a1a surfaces.
- The 4px M-stripe divider is the single decorative element; keep it 4px at
  every breakpoint.

## Components
- Top nav: 64px black bar — roundel + M mark left, sentence-case menu items,
  language / search / account icons right.
- Hero band: full-bleed image (or a geometric stand-in) with an 80px uppercase
  headline left-aligned over it, plus a light-weight sub-line.
- Buttons: primary = transparent with 1px white border, uppercase 14px/700/1.5px,
  48px tall, 32px side padding; circular icon buttons are the only round shape.
- Text link: uppercase letterspaced label with a trailing → glyph.
- Spec cell: #0d0d0d block, 24px padding — a 32px/700 value over an uppercase
  label. Four-up at desktop, collapsing to two then one.
- Model card: 16:10 image on black, 40px/700 model name, light specs line, one
  text link. No card surface — the photo sits on the canvas.
- Category tabs: text-only uppercase labels; active turns white with a 2px
  underline.
- Footer: black, four link columns in `body` gray, corporate disclaimer in
  `caption` gray. It never inverts.

## Layout
Max content width ~1440px with photo bands bleeding past it. Major bands
separate at a 96px rhythm; hero bands pad 64px vertically; cards and spec cells
use 24px padding with 24px gutters in 3-up grids. Whitespace is uniform black
canvas — no washes, no backdrops.

## Don'ts
- Don't add hues beyond the M tricolor and the heritage blue it contains.
- Don't bold body copy; Light (300) is what keeps it European-engineered instead
  of bombastic.
- Don't round buttons — the rectangular silhouette is the brand, and rounded
  corners read as consumer-tech.
- Don't put gradients or backdrops behind hero type; the photography (or a
  geometric stand-in) is the depth.
- Don't use the stripe as a fill; it is a divider, an accent and a badge — never
  an action surface.
- Don't run two text-only bands in a row; alternate photo bands with data or
  copy bands.
- Don't let uppercase tracking fall below 1.5px on buttons and labels.
