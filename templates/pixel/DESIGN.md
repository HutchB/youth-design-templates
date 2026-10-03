# Pixel 8-bit — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A game cartridge blowing dust out of the slot. Flat white screens, a handful
of cartridge colors at full saturation, thick near-black pixel borders, and
chunky uppercase type that looks stamped rather than rendered. Every edge is
a staircase, every shadow is a solid block, and every button begs to be
pressed with a D-pad. It is playful on purpose and precise underneath — the
grid is sacred, only the romance is 8-bit.

Fits games, game launchers, kids' products, retro collections, hackathon
tools and any surface that wants to feel like a console. It is a poor fit for
long-form reading, enterprise dashboards, or anything that must feel premium
and quiet.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is cartridge white. Screens are white or the faint `surface-raised`
  gray; a colored page background belongs only to a full-bleed "screen" moment,
  and even then the palette colors do the talking.
- `primary` is cartridge green: confirm buttons, positive stats, the HP bar,
  the selected state.
- `accent` is cartridge yellow: gold counters, MP, warnings, pickups. Yellow
  reads as treasure — never use it for a destructive or informational action.
- `danger` is cartridge red (`#e76e55`): damage, errors, delete, the boss.
- `blue` is the secondary hue for links, info buttons and water/ice stats.
- `muted` is cartridge gray for secondary text and disabled ink. It never
  fills surfaces and never draws borders.
- `border` is the near-black ink and it is the only border color in the world.
  Every outline, divider, shadow block and pixel glyph is drawn with it.
- `primary-foreground` is the same near-black: fills are all light enough that
  ink is the only label color. White text on a cartridge color is off-style.

## Typography
Chunky, bitmap-flavored, uppercase:
- The canonical face is a pixel/bitmap display face. When it cannot ship, use
  the bold monospace stack as the stand-in: small sizes, heavy weight,
  uppercase, slight positive tracking — the goal reads as "stamped", not
  "typeset".
- One family everywhere, headings included. Hierarchy comes from size steps
  and caps, not from a second face: title 20–28px bold, section labels 13–14px,
  body 14–15px, stat numbers 16–20px bold.
- Line height is tight (1.4); paragraphs are short — a dialog box holds two
  lines, three at most.
- Numbers matter: counters, HP digits and gold amounts are always bold and
  often sit in bordered blocks, like a HUD readout.

## Shape & depth
- Zero radius on every token. A rounded corner is a modern sprite in an 8-bit
  world — there are no curves on the grid.
- Borders are thick near-black: 3–4px on interactive elements and panels,
  2px on small chrome. A 1px hairline is too fine for the grid; use a 2px
  minimum or a stepped divider.
- Depth is the block shadow: a solid offset copy in `border` ink with zero
  blur, built from box-shadow steps (`shadow-sm/md/lg`). It reads as a second
  pixel layer under the element, not as light.
- Pressed is physical: the element translates down-right by the shadow offset
  and the shadow collapses (`shadow-pressed`), so pressing visibly flattens
  the sprite into the page.
- Stepped details — notch corners, staircase tails, jagged dividers — are
  drawn with stacked box-shadows of the ink color. That trick, not images,
  is how the pixel language extends to new components.

## Components
- **Buttons:** white or cartridge fill, 4px ink border, block shadow, bold
  uppercase mono label in ink. Primary is green; confirm/back pairs are green
  and white; danger is red. Hover swaps the fill one step (white → raised
  gray, or a brighter cartridge hue); press flattens via translate.
- **Panels:** white or `surface-raised` boxes with 4px borders. Game dialogs
  are panels with a staircase tail drawn in ink box-shadows, two lines of text
  and a blinking ▼ continue marker.
- **Item slots:** small square bordered cells on `surface-raised`; the
  selected slot fills `primary` with ink inset. Counts sit in the corner as
  bold ink digits.
- **HP/MP bars:** a bordered track split into equal segments — green segments
  for HP, yellow for MP; damage turns segments red or empties them. Segment
  boundaries stay hard; no tapered or rounded fills.
- **Badges:** small bordered squares or ribbons in cartridge colors with ink
  labels; a "NEW!" badge blinks (step animation, not a fade).
- **Menus:** a list where the selected row carries a ▶ cursor glyph and fills
  `primary`. Rows are full-width bordered strips, never floating cards.
- **HUD/status:** a top strip of bordered readouts — name, LV, HP, gold —
  each in its own cell, aligned to the same grid as everything else.

## Layout
- Everything sits on one visible grid: cells, slots and panels align to the
  same pixel rhythm, and gaps come in 8/12/16px steps.
- Screens are framed like a console: a HUD strip on top, a content grid
  middle, a dialog or command strip at the bottom. Z ordering reads as game
  layers (HUD above world above dialog), not as floating elevation.
- Content is chunky and centered: max-width ~960px, generous 4px borders,
  and internal padding in multiples of 4.
- Empty space is allowed but should look like a game screen's sky — flat,
  white and structured by a border or divider, not by soft spacing alone.

## Don'ts
- No rounded corners, no circles-as-frames, no pill buttons — the grid has no
  curves. (A drawn pixel heart or star made of box-shadow steps is fine; a
  CSS circle is not.)
- No gradients, no blur, no soft shadows, no opacity fades — everything is
  flat fill or ink.
- No thin 1px hairlines and no gray borders; structure is thick ink or nothing.
- No white text on cartridge fills; ink is the only label color.
- No smooth easing that matters: transitions are instant or stepped (blink),
  because sprites do not tween.
- No more than three cartridge colors per screen plus ink; all five at once
  reads as a palette test, not a game.
- No anti-aliasing tricks or texture photos — pixel effects are built from
  steps and blocks, never from images.
