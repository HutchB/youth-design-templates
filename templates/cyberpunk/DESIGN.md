# Cyberpunk — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A synthwave night city seen through a rainy windshield. Violet-black glass,
signs of neon pink and cyan burning against it, chrome type catching the last
of a holographic sunset, scanlines ticking over everything. Depth is light:
nothing casts a shadow, things glow. It is 1984's imagination of 2026 —
electric, nostalgic, and a little dangerous.

Fits music and nightlife, gaming, streaming, fashion drops, crypto-adjacent
tools and any brand that wants to feel like the future as imagined by the
past. It is a poor fit for healthcare, finance dashboards, long-form reading,
or anything that needs to feel calm and trustworthy.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the violet-black night (`#12081f`): the page, the sky, every
  pane of glass. Never pure black, never gray — the dark is violet-tinted.
- `surface-raised` is one violet step up, for cards, panels and inputs; it
  reads as a sign lit against the sky, not as elevation.
- `primary` is neon pink, the loudest sign on the street: active states, the
  primary action, headline glow.
- `accent` is neon cyan, the counter-voice: links, secondary data, selected
  borders. Pink and cyan never fill the same element.
- `danger` is hot magenta-red (`#ff2a6d`) — alarming even among neons; it
  blooms in its own hue (`shadow-glow-red`).
- `neon-yellow` and `sunset-orange` are garnish: price tags, badges, the
  bottom band of the sunset gradient. One garnish color per screen.
- `muted` is hazy violet for secondary text — distant neon, not gray. Body
  copy stays `surface-foreground`; muted is for meta, labels and timestamps.
- `border` is dim violet tube-glass: structure is barely-there until an
  element is active and the tube lights up.
- `primary-foreground` is the violet-black glass itself. White text on neon
  blooms out; dark ink on neon is the only legible fill pair.

## Typography
Retro-future display over clean gothic text:
- Display faces the future: wide, uppercase, extended sans for wordmarks and
  headings — ideally a chrome or gradient fill (`gradient-chrome`) clipped to
  the glyphs, with a 1px neon glow behind. Hero sizes 40–72px; section titles
  20–28px; all-caps for display, never for paragraphs.
- Body is a plain modern sans (system stack is fine), 15–16px, sentence case,
  `surface-foreground`; meta and labels at 12–13px in `muted`, often
  uppercase with wide tracking, like a signage label.
- Monospace appears for coordinates, prices, timestamps and IDs — machine
  readouts in the margins of the city.
- Line height 1.6 for body; headings tight (1.1) so type stacks like signage.

## Shape & depth
- Corners barely exist: `radius-sm` (0) for tags and inputs, `radius-md/lg`
  (2–4px) for buttons and cards, nothing above 8px. A 16px+ corner is a
  pastel intruder.
- Borders are 1px violet; the tube metaphor means a border can light up:
  active and hover states swap `border` for the element's neon and add its
  glow (`shadow-sm` for pink, `shadow-glow-cyan` for cyan).
- Depth is bloom, never cast shadow: every shadow token is a zero-offset
  halo in the element's own hue. Two glowing elements may overlap their
  light, but they never drop a shadow on each other.
- `gradient-sunset` is the sky: one hero band per screen (top or behind the
  fold), sun-to-grid, never as a button fill or body background.
- `gradient-grid` is the floor: a faint perspective grid behind hero content
  at low opacity; it backs signage, never body text.
- Scanline texture (1px repeating lines at ~4–8% black) may overlay an entire
  page or a single hero, once — it is atmosphere, not pattern.

## Components
- **Buttons:** transparent fill with a 1px neon border and neon label; hover
  fills with the neon and flips the label to `primary-foreground` ink. The
  primary action may sit pre-filled pink. Danger is magenta-red. Glow
  intensifies on hover — buttons are tubes, not slabs.
- **Cards:** `surface-raised`, 1px violet border, 2–4px radius; a card is
  "lit" by giving its border and title one neon hue plus `shadow-sm`. Only
  one card per row view is fully lit; the rest stay dim until hover.
- **Tags/chips:** small bordered rectangles, 0 radius, uppercase 11px with
  wide tracking; each chip carries exactly one neon hue for its border and
  text.
- **Inputs:** violet-black field, 1px violet border, `surface-foreground`
  text; focus lights the border cyan with `shadow-glow-cyan`. Labels are
  uppercase muted with tracking, like sign captions.
- **Tabs/nav:** uppercase items divided by hairlines; the active tab is pink
  with a glowing underline (2px, `shadow-sm`), inactive tabs are muted.
- **Dividers:** 1px violet, or a short neon "laser" segment (48–80px wide,
  2px tall, glowing) at the start of a section — a laser rule, not a
  full-width line.
- **Badges:** bordered rectangles with one neon hue; a "LIVE" badge is red
  with a step-blink, the only blinking element allowed.
- **Modals:** `surface-raised` panel, 1px neon border of the action's hue,
  glowing against a dark blurred scrim; corners stay square-ish.

## Layout
- Full-bleed dark sections stacked like city blocks; content max-width
  ~1120px, hero imagery and the sunset band may run edge to edge.
- Strong horizontal lines: nav, hero band, card rows and footers all align
  to a shared baseline so the page reads like a skyline.
- Space is generous but electric: 24–32px card padding, 48–96px between
  sections. Glow needs dark air around it — never let two glows crowd the
  same corner.
- One light source per screen: pink OR cyan leads; the other answers once.
  The sunset gradient and the grid floor appear together only in the hero.

## Don'ts
- No pastel fills, cream pages, or gray neutrals — the night is violet or it
  is broken.
- No cast shadows with offset or blur-to-dark: depth is bloom in the
  element's own hue, nothing else.
- No rounded-everything: corners cap at 8px, tags and inputs at 0–2px.
- No white text on neon fills (it blooms out) and no neon text smaller than
  11px (it vibrates).
- No rainbow: one leading neon per screen plus at most one garnish color.
- No glow on body text or paragraphs — glow belongs to display type, borders
  and controls; long reading happens in plain `surface-foreground`.
- No sunset gradient on buttons, chips or small elements; the sky is a hero
  surface, once per screen.
- No smooth fade-in glows everywhere at once: at most one blinking element
  (a LIVE badge) and glow changes are instant or 120ms, never dreamy.
