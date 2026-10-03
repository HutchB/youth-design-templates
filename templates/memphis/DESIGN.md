# Memphis — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
An eighties gallery floor after the opening party: flat color blocks that
deliberately clash, hard-edged geometry scattered like confetti — zigzags,
polka dots, squiggles, triangles, semicircles — all drawn sharp on a clean
white stage. Nothing is shaded, nothing blurs, nothing blends; the energy
comes from angle, pattern and pure saturated hue. It reads as a music
festival, a creative conference, a design shop that refuses to be beige.

Two neighbors, two clean distinctions. Doodle Pop is *hand-drawn*: wobbly
crayon lines, sticker outlines on everything, a loud lime stage. Memphis is
*ruled geometry*: every shape is crisp and constructed, most blocks carry no
outline at all, and the stage is white, not lime. Neo Brutalism is
*outline-and-shadow everywhere*: a 2px ink border and a hard offset on every
element, structure by enclosures. In Memphis the structure is color blocks
and pattern; outlines and hard shadows are garnish on interactive pieces, not
the building.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is clean white, chosen over cream on purpose: clashing primaries
  need a neutral white stage, and cream would muddy the teal. `surface-raised`
  (warm cream) is for panels that must sit back — long text areas, muted lists.
- `surface-foreground` is near-black ink; it is also the pattern color for
  strokes and dots.
- `primary` is coral red — the loudest block: hero fills, the featured chip,
  one primary button. Its label is `primary-foreground` white, always large
  and bold (small white-on-coral text fails contrast; at 700 weight and
  18px+ it is a display voice, not a body voice).
- `accent` is teal — coral's clash partner: the second headline block, links,
  selected chips, one pattern color.
- `mustard` and `violet-pop` complete the four-way clash. Any two may meet;
  never use all four at equal size in one view — one hue must dominate.
- `muted` is for secondary text only, never a fill. `danger` stays loud for
  destructive actions, keeping a hard edge and no softness.
- `border` is ink: 2px outlines on buttons, inputs and interactive cards, and
  the stroke of drawn patterns. A tinted or gray border is off-style.

## Typography
Chunky, geometric, confident:
- Headings in the heaviest system sans (800–900), 28–72px, mixed case or
  uppercase, normal tracking. Headlines may sit *on* color blocks — each line
  its own block, one block rotated 2–4deg. Never set headlines on gradients.
- Body 15–16px weight 500, line-height 1.6, ink on white or cream.
- Labels and chips 12–14px, weight 700, uppercase optional; they sit in small
  color blocks with 0 radius (`radius-sm`).
- No serifs, no scripts, no thin weights — a hairline font on Memphis reads
  as a photocopy left in the rain.

## Shape & depth
- Radii are mixed on purpose: blocks and chips stay hard (`radius-sm` 0),
  cards and inputs get 6–16px — blocky geometry with a few soft corners. The
  full pill is reserved for round stickers and dots.
- Depth is the hard flat ink offset (3/5/8px, zero blur) — but only on
  interactive and tilted pieces: buttons, ticket cards, thrown shapes.
  Static color blocks stay completely flat; the floor of this style is flat.
- Hover translates the piece 2px toward its shadow and shrinks the shadow one
  step; active flattens it entirely. The press is physical, like a sticker
  being pushed onto glass.
- Rotation is seasoning: one or two tilted shapes or chips per view, 2–8deg.
  A page where everything is tilted is a page that has spilled.

## Signature geometry: the confetti set
Drawn as inline SVG, never as photos or emoji:
- **Zigzag** — the signature line; section dividers and hero accents.
- **Polka dots** — a repeating radial-gradient fill (3px ink or white dots,
  16–20px tile) for bands and panel backs; texture, not wallpaper.
- **Squiggle** — the loose wave stroke; use where a rule would be boring.
- **Triangle, semicircle, plus/cross** — the scatter set, 12–48px, thrown
  around heroes and empty corners.
- Budget: 4–8 confetti elements per screen, one polka band at most. Pattern
  never sits behind body text.

## Components
- Headline blocks: flat color rectangles (`radius-sm`) holding one display
  line each; a white or ink word may break out of the block.
- Buttons: flat fills (teal, mustard or coral) with a 2px ink outline and
  `shadow-sm`, radius `sm`–`md`, bold uppercase labels in ink (or white on
  coral). Hover pulls the shadow, active flattens.
- Ticket/feature cards: white or cream, `radius-xl`, 2px ink outline,
  `shadow-md`, price and title chunky; corners of the card may carry one
  confetti shape clipped by `overflow: hidden`.
- Chips/tags: small hard blocks (`radius-sm`–`md`) in the clash palette.
- Inputs: white field, 2px ink outline, `radius-md`, no floating tricks;
  focus keeps the ink outline and adds an offset `shadow-sm`.
- Day/list blocks: big flat color rectangles (coral/teal/mustard, one each)
  with white or ink text — the list form for lineups, menus and schedules.
- Zigzag divider: a full-width SVG polyline in ink or a clash hue between
  major sections.

## Layout
Poster logic with a wink: asymmetric heroes with a huge block headline and
scattered geometry; sections of big flat blocks separated by zigzags or polka
bands; content max-width ~1120px. Grids are allowed and can be rigid — the
fun lives in the blocks, not the alignment — but gutters stay even and
nothing half-overlaps: shapes either clearly overlap or keep their distance.

## Don'ts
- No gradients, no soft shadows, no blur, no glow, no glass — flatness is
  the whole material.
- No hand-drawn wobble: every line is crisp and constructed; a rough edge
  belongs to Doodle Pop, not here.
- No all-over outlines with shadows on every element — that encyclopedic
  enclosure is Neo Brutalism; here structure is color and pattern.
- No small white text on coral or teal; small labels on those fills are ink.
- No all-four-hue balance, no pastel desaturation, no muddy tertiary mixes.
- No pattern behind body text, no more than one polka band per screen.
- No everything-tilted layouts; rotation is one or two garnish pieces.
- No pills everywhere — the radius scale stops at 16 and round stickers are
  the only circles in the system.
