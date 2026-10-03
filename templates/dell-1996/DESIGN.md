# Dell 1996 — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A 1996 consumer catalog that happens to live on the web. The browser window is
treated as a printed page: a literal black frame wraps everything, flat fills in
washed catalog tints carry the color, Times Roman sets the paragraphs and chunky
stenciled caps shout the section names. The charm is density and honesty —
nothing here pretends to be newer than 8-bit GIF tooling.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the white page inside the frame; `surface-raised` (#ebebeb)
  covers table headers and inset panels.
- `primary` (Dell red #e91d2a) has exactly two jobs: the sales CTA panel and the
  top-right phone number. At most one red panel per page.
- `accent` (sticker yellow #fcc20f) belongs to the sticker layer — BUY tabs and
  NEW! bursts pinned on top of the layout, never a surface fill.
- `border` (pure black) does all the outlining: the thick page frame, 1px card
  hairlines, table rules and button edges share one ink.
- `link` (#0000ee) is the classic underlined anchor blue, reserved for body copy
  and the footer's legal links.
- The ribbon tint family (sage, salmon, peach, lime, sky, steel, periwinkle,
  olive) is page-level vocabulary: one tint per product line, always picked as
  a set. Keep the values in the demo, out of the base tokens.

## Typography
Three period system faces, no webfonts:
- Display: Arial Black 900 — 36px stencil caps on tinted eyebrow blocks, 24px
  for sub-page heroes. The extreme weight is the voice; never soften it.
- Chrome: Helvetica bold 12–16px for banners, card title bars, buttons and nav
  labels, almost always uppercase at the default kern.
- Body: Times New Roman 14px, dropping to 12/11px for small print. The serif
  body is the era's signature — swapping in a sans erases it.
- Links stay Times 14, underlined, in the classic blue.

## Shape & depth
- Radius is zero everywhere; the only round objects are award seals.
- No soft shadows exist. Depth is drawn with hard edges: 1px black hairlines,
  the thick black frame, and hand-style bevels (a 1px white highlight against a
  1px dark shade) on stickers and product shots.
- Product images sit on a hard 2px offset shadow (2px 2px 0 black) — crisp, never
  blurred.

## Components
- Page frame: 8px solid black border wrapping the whole page. Shrink to 4px on
  tablet and 2px on phones; removing it removes the brand.
- Top banner: black strip with the white Helvetica caps headline, the yellow BUY
  sticker pinned right and the red phone callout. It appears on every page.
- Ribbon card (signature): white title bar in Helvetica bold caps with a 1px
  black underline, over a tinted body (Times 14, 12×16 padding) with the product
  photo notched into the right edge.
- CTA panel: red fill, white Times 14 copy, 1px black border, 16px padding.
- Stickers: yellow BUY tab and slightly rotated NEW! bursts overlap the cards
  beneath them, as if pinned through the page.
- Buttons: black filled or white outlined rectangles, 1px black border, Helvetica
  bold caps 12px, zero radius.
- Inputs: white field, 1px black border, Times 14 inside.
- Footer: icon-label nav (small beveled icon squares over uppercase Helvetica
  labels), a thin green rule, then blue underlined links and Times small print.

## Layout
A fixed ~760px table-era canvas centered in the window. The body splits into a
~28% left rail (icon link grid, red CTA panel, award seal) beside a ~72% product
ribbon stack. Spacing is table-driven and tight: a 4px base, 12/16px inside
cards, roughly 40px between ribbon sections. Density wins over air; the breathing
room lives inside each card, not between them.

## Don'ts
- No rounded corners, gradients, opacity or blurred shadows anywhere.
- The palette is closed: tints + red + yellow + link blue. No new hues.
- Never replace the Times Roman body with a sans face, and never set display
  weight below 900.
- Red is not decoration — only the CTA panel and the phone callout may wear it,
  and never two red panels on one page.
- Never soften product photos with radius or clip-path; the hard rectangle plus
  its 2px hard shadow is the framing.
