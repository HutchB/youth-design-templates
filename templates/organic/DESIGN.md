# Organic — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Grounded and grown, not manufactured. A linen page in earth tones — moss,
terracotta, sand, oat — where every corner is rounded because nothing in a
hedgerow has a right angle, dividers arrive as gentle waves or leaf curves,
and products sit on white cards like goods on a farm-stall table. The energy
is a slow Saturday market: warm, tactile, honest, never cutesy and never
clinical. Type is humanist with rounded terminals; color comes from soil and
foliage; shadows are overcast-sky soft.

Headspace is this system's nearest neighbor and the contrast is exact:
Headspace is a wellness *app* voice — glowing sunrise orange, periwinkle,
inflatable roundness, a cheerful hand on the shoulder. Organic is a
*brand-and-commerce* voice — no glow anywhere, an earth palette where the
brightest thing is terracotta, and roundness that reads as grown (wood, clay,
stone) rather than inflated (plastic, balloon). If a color could not come out
of a garden, it does not go on the page.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is linen (`#f6f3ec`), warm and slightly textured in spirit; pure
  white is never the page, only the card.
- `surface-raised` is white — product cards, panels, the stall table.
- `surface-foreground` is deep moss ink (`#2f3a2f`), a green-tinted black that
  keeps text in the soil with everything else.
- `primary` is moss green (`#4f7a5a`): CTAs, links, active states, the color
  of "grown". Its text is linen, never pure white.
- `accent` is terracotta (`#c97b5a`): prices, highlights, stamps and small
  badges. It answers the moss — the two never compete at the same size.
- `sand` (`#ece5d8`) is the mid tone for hero washes, chip fills and soft
  bands; `border` is the oat hairline for quiet structure.
- `muted` is lichen gray-green for secondary text. `danger` is fired clay —
  a warm brick that signals without shrieking.
- No neon, no purple, no electric anything: if it glows under a blacklight,
  it is off-style.

## Typography
Humanist and rounded, like lettering on a wooden sign:
- Headings use the system humanist/rounded stack (SF Pro Rounded via
  `ui-rounded`, Arial Rounded, Segoe UI), weight 600–700, 32–64px, normal to
  slightly positive tracking — tight corporate tracking reads as manufactured.
- Body 16–17px, line-height 1.65, same family at 400–500; the rounded warmth
  continues into prose.
- Labels and eyebrows are 12–13px, weight 600, often sentence case — shouting
  uppercase is a supermarket habit, not a market-stall one.
- Stamps and badges may set short text on a circle (SVG textPath), always in
  weight 700 with wide tracking, usually terracotta.

## Shape & depth
- The radius scale starts at 10px and lives at 20–28px: cards are
  `radius-xl/2xl`, buttons and inputs are full pills, imagery uses large
  radii or leaf-shaped masks. A corner under 10px is off-style.
- Depth is soft and warm: `shadow-sm` resting, `shadow-md` hover, `shadow-lg`
  for one floating hero object per screen — always the moss-ink tint, never a
  neutral or blue-gray shadow.
- The structural devices are the organic dividers: an SVG wave or leaf-curve
  section break (2–3 gentle bumps, one color, no stroke), and pill-shaped
  chips and tags. Straight 1px rules are allowed only inside forms and lists.
- Leaf and blob ornaments exist as soft background shapes in `sand` or
  `primary` at low opacity — two per screen, never behind body text.

## Components
- Navigation: linen bar, leaf mark + lowercase wordmark, pill links, one moss
  pill CTA; the sticky bar gains `shadow-sm` and a slightly opaque linen.
- Hero: an earth gradient band (sand into pale moss), display heading, short
  body line, one pill button; a rotated stamp badge may sit at the corner;
  the band ends in a wave divider into linen.
- Product cards: white `surface-raised`, `radius-xl`, `shadow-sm` resting and
  `shadow-md` hover with a 4px lift; a large-radius gradient block stands in
  for the photo; name in 600, price in terracotta, a `sand` chip for origin.
- Chips and tags: pill, `sand` fill or terracotta outline, 13px weight 600.
- Buttons: pills, height 44–52px; primary moss with linen text; secondary
  white with oat border; tertiary is a moss text link that underlines in
  terracotta. Hover lifts 2px and deepens the shadow — nothing snaps.
- Inputs: white pill fields with an oat border, moss focus ring, generous
  44–48px height.
- Stamps: circular SVG text-on-a-path badge, terracotta, rotated −6 to
  −10deg, one per screen.

## Layout
Single column with breathing room: content max-width 1120px, cards in rows of
two or three with 20–24px gaps, section spacing 72–112px. The wave dividers —
not horizontal rules — mark section changes. Whitespace follows the product:
heroes are half empty, card grids are cozy. On small screens everything
collapses to one column and the wave dividers flatten slightly but never
become straight lines.

## Don'ts
- No sharp corners: anything under 10px radius is a violation, and 0 is
  unthinkable.
- No neon, no purple, no electric blue, no highlighter accents — earth tones
  only, and the brightest voice is terracotta.
- No glow, no neon shadows, no hard black shadows; shadows are warm and
  shallow or they are wrong.
- No uppercase shouting, no tight negative tracking, no condensed faces.
- No strict corporate grids of equal rectangles with 1px rules — structure
  comes from pills, cards and waves.
- No more than one stamp and two blob ornaments per screen; ornaments never
  sit behind body text.
- No pure white page background and no dark mode inversion — this material
  only works in daylight.
