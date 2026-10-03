# PostHog — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A friendly engineering sketchbook. Where most analytics tools reach for a dark
tech stage, this brand works on warm cream paper — flat white cards, thin olive
hairlines, room for a hand-drawn character in the margin. The data underneath
is dead serious; the room it lives in is not.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the cream canvas (#eeefe9) and runs edge to edge, section after
  section, with no shaded bands between them.
- `surface-raised` (#ffffff) floats cards and tiles on the cream; structure
  comes from a 1px `border`, never from shadows.
- `primary` (#f7a501) is the only loud color: one yellow-orange action per view.
- `accent` (#1d4ed8) deep blue covers links, focus rings and informational
  highlights; chart series may draw from it too. Keep it rare.
- Text is `surface-foreground` (#23251d) for headlines and `muted` (#6c6e63)
  for support; `danger` (#cd4239) is for warnings and drop-offs only.

## Typography
System sans, hierarchy built from weight more than size:
- Display 24–36px at weight 800 with slight negative tracking; headings 18–21px
  at 700.
- Body 15–16px at 400 with relaxed 1.5–1.7 leading; metadata 12–14px `muted`.
- Uppercase eyebrows (12–14px, 600–700, wide tracking) give pages their
  textbook-chapter feel — uppercase appears only in eyebrows and micro labels.
- Monospace for event names, ids, code and any captured value.

## Shape & depth
- Radius clusters at 4–8px (`radius-sm`–`radius-lg`); pills are reserved for
  filter chips and the sticky nav CTA.
- Flat by rule: cards sit on cream with hairline borders. `shadow-md`/`shadow-lg`
  exist only for genuinely floating chrome — popovers, menus, dialogs.
- Depth is drawn, not lit: illustration, pastel callouts and the inverted dark
  code block carry all visual depth.

## Components
- Buttons 40px tall at `radius-md`: primary fills `primary` with near-black
  label; secondary fills a soft gray; tertiary is ghost text with an arrow.
- Cards: `surface-raised`, 1px `border`, 20–24px padding; feature tiles add a
  small doodle in the corner.
- Tabs: the active tab turns into a white card on cream; filter pills invert to
  ink when selected.
- Callouts: soft tinted panels (blue/green/red tints) for tips and warnings —
  docs furniture, not marketing decoration.
- Tables: hairline dividers, uppercase micro headers, right-aligned numerals.
- Code: full-width `surface-foreground`-dark block with cream text, sitting
  inside a white card.

## Layout
80px between major sections, cream continuing uninterrupted behind them.
Content maxes near 1280px with 24px gutters; doc layouts add a 240px sticky
sidebar beside a ~720px article column. Grids step 4-up → 2-up → 1-up.

## Don'ts
- Never swap the cream canvas for pure white or a dark hero band.
- One yellow-orange action per fold; never add a second saturated CTA color.
- No drop shadows under resting cards — a bordered flat card is the look.
- No gradients, no glass, no atmospheric backgrounds.
- Pastel callout tints stay inside long-form docs; don't paint product cards
  with them.
