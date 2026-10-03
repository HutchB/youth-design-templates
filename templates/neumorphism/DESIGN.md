# Neumorphism — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Everything on screen is the same sheet of soft clay-gray, and every control is
gently pressed out of it — or pressed back into it. There are no borders, no
color fills, no distinct card colors: a form is extruded purely by a pair of
soft shadows, a dark one (#b9bfca) down-right and a white one up-left, as if
a top-left lamp hung over a slab of clay. The result is calm, tactile and
monochrome — media players, smart-home panels, volume decks and other
"appliance" interfaces where a handful of oversized controls float in space.

Claymorphism is the neighbor to tell apart, and the difference is total:
clay is *colored* pastel pieces with thick white sheens and a hard offset
drop — candy extruded *on* a warm cream page. Neumorphism is *same-color*
pressed forms with no sheen and no offset drop — one gray sheet, shapes
extruded *from* it. Clay is loud and sweet; neumorphism is hushed and cool.
If the surface behind a control differs from the control's fill, one of the
two styles has already been broken.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the clay gray (`#e0e5ec`) — the page, the cards and the
  controls all share this exact fill. The uniformity *is* the material.
- `surface-raised` is the same value by design: "raised" is expressed by the
  dual shadow, never by a lighter or darker fill. Changing it breaks the
  single-slab illusion and turns the UI into ordinary flat cards.
- `surface-foreground` is slate ink (`#3d4452`) — the only text color allowed
  on the clay. `muted` (`#8a94a6`) is for large secondary labels only; it
  already sits near the legibility floor on this background.
- `primary` is periwinkle blue, the one saturated voice: the play button, the
  active segment, the focused control. `primary-foreground` is white.
- `accent` is teal for on/ok states (toggles, confirmations); `danger` is a
  soft coral for destructive and error states.
- `border` equals the surface: strokes do not exist in this system. Depth is
  the shadow pair's entire job — a visible border instantly flattens the
  extrusion.
- No gradients, no photos, no patterned backgrounds behind controls: the
  clay reads correctly only against a uniform fill.

## Typography
Soft, unhurried, and big enough to stay legible on gray:
- One system sans throughout. Weights 400–700; nothing thinner than 400.
- Headings 600–700 at 22–36px in `surface-foreground`. Titles sit directly on
  the clay — panels add padding, not backgrounds.
- Body 15–16px weight 500 in `surface-foreground`. Body text in `muted` is
  forbidden: on this surface it fails contrast, and failing contrast is
  neumorphism's classic way to die.
- Numerals (time, temperature, percentages) are 600–700 and large — 20–34px
  — because appliance-style UIs speak in numbers. Secondary numerals may use
  `muted` at 18px+.
- Labels on controls are short, 12–13px, weight 600, in `surface-foreground`.

## Shape & depth
- Radii are soft and generous: 8–24px, with buttons, toggles, sliders and
  icon buttons living at pill and circle radii. Sharp corners break the
  extrusion's physics.
- The dual shadow is the whole depth system: `shadow-sm` (2/5) for small
  controls, `shadow-md` (5/12) for buttons and inputs, `shadow-lg` (9/20)
  for the one hero panel per view. Dark half always points down-right,
  white half up-left — the lamp never moves.
- `shadow-inset` is the pressed/groove state: input wells, slider tracks,
  toggle channels, and the active (held) form of any raised control. A
  pressed button is the same shape with the shadows inverted — the form has
  been pushed back into the sheet.
- State is carried by the shadow *and* a second cue (color, icon, position):
  shadow alone is too quiet for accessibility and disappears on some
  displays.
- Generous sizing is part of the depth: the soft offsets need room, so
  controls are 48–64px and panels keep 20–28px padding.

## Components
- Icon buttons: circles of `surface` with `shadow-sm`; icons in
  `surface-foreground`. Active/selected circles use `shadow-inset` plus a
  `primary` or `accent` icon — pressed means engaged.
- Play/hero button: 64–80px circle, `primary` fill, white icon, `shadow-md`.
  The one colored element on the first screen.
- Toggles: a pill channel in `shadow-inset`; the knob is a raised circle of
  `surface` (or `accent`/`primary` when on). Never a colored track with a
  white knob — the channel is a groove in the same clay.
- Sliders and progress: a `shadow-inset` groove; the thumb is a raised
  circle, the fill a raised bar of the same `surface` color or `primary`
  at low saturation. Time readouts flank it in large numerals.
- Inputs: wells — `surface` fill with `shadow-inset`, pill radius, text in
  `surface-foreground`. Focus adds a soft `primary` outer glow, never an
  outline.
- Segmented controls: an `shadow-inset` track holding raised segment pills;
  the active segment is raised and tinted `primary` at low saturation.
- Cards/panels: `surface` fill, `radius-2xl`, `shadow-md` (or `shadow-lg`
  for one hero per view), 24px padding, no border, no color change.
- Media art (album, scenes): a raised tile whose inner image area is an
  inset well — raised outside, pressed inside.

## Layout
Calm appliance spacing: one centered panel or a short row of panels,
max-width 420–520px for players, ~1000px for dashboards; 20–32px gaps;
32–48px section spacing. Elements never touch — the shadows need clearance
or two extrusions read as one blob. The background stays uniformly `surface`
top to bottom; navigation is icon buttons on the clay, not bars.

## Don'ts
- **Contrast is the system's classic flaw — police it first.** Text on the
  clay must be `surface-foreground`; `muted` only for 18px+ secondary
  labels; never lighter grays, never small text in `muted`, never white text
  on the clay. Interactive elements must be large (48px+) with clearly
  visible shadow offsets, and state must never be carried by the shadow
  alone — pair it with color, icon or position.
- No borders, ever — a 1px stroke flattens the material instantly.
- No different-fill "raised" surfaces; raised and surface are the same color
  by definition.
- No dark mode: the dual-shadow illusion depends on a light clay and a white
  top-left light. On dark ground it collapses into gray blobs.
- No gradients, photos or patterns behind controls — the clay must stay
  uniform for the extrusion to read.
- No hard shadows, no long soft shadows, no colored glows except the focus
  ring and the primary button.
- No sharp corners and no pill-round *everything*: the radius scale is
  8–24px, and circles are for buttons and knobs only.
- No dense layouts: elements that nearly touch merge their shadows into mud.
- Not for text-heavy products, long documents, or dense data — the material
  belongs to appliance-style, control-rich surfaces.
