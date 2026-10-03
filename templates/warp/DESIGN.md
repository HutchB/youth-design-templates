# Warp — Vetta Edition

The companion `demo.html` builds the terminal itself — command blocks, a completion popover, an AI suggestion bar and an agent pane — plus a mobile layout and deliberate off-style counter-examples. It is the reference for on-style here.

## Atmosphere
A warm charcoal stage for a terminal that grew a real UI. The brown-warmth is
the identity: never pure black, never cool gray, never a neon grid. Blocks
replace the raw text grid — every command, output and suggestion is a card
with visible edges.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` (#2b2622) is the only page tone; `surface-raised` (#383330)
  lifts blocks, inputs and panes.
- `primary` is warm off-white (#f7f5f0): body text and the single filled
  button share one voice. Warm dark ink (#2b2622) sits on it.
- `muted` (#aea69c) for secondary output; every gray is warm-tinted.
- `accent` (amber #e0a458) is scoped to the terminal proper: AI
  suggestions, running states, warning output. Never chrome.
- `danger` (rose #fb7185) for failed commands; `border` (#3f3a36) hairlines
  every block.

## Typography
- Inter-class sans for UI, weight 400; labels 500. Display stays weight 400
  with −0.02em tracking — quiet confidence, never shouty.
- All terminal text is mono at 13px with 1.4 line height.
- An italic serif flourish is allowed once per page — one phrase, nothing
  more.

## Shape & depth
- The tightest radii of any dev system here: 3–4px buttons, 4–6px blocks.
  Pills only for status dots and icon circles.
- Depth is raised fill plus a hairline; `shadow-lg` belongs to true overlays
  only — the completion popover and dialogs.

## Components
- Blocks: a command and its output form one raised card, 4px radius, 1px
  border; the active input block gets a brighter border.
- Input block: mono prompt, off-white text, keycap hints trailing right.
- Completion and AI panel: raised popover, suggestion rows; AI rows carry
  an amber tick.
- Buttons: 3px radius, off-white fill with warm-dark label; ghost
  otherwise.

## Layout
- Terminal: full-bleed panes split by hairlines; the block column caps
  around 900px for readable line lengths.
- Marketing: 96px bands, a two-column hero with two terminal mockups, and
  3-up download tiles.

## Don'ts
- No chromatic brand accent — amber never touches buttons, nav or headings.
- No cool grays and no pure black; the warmth is structural, not
  decorative.
- No pill CTAs and no radius above 8px on controls.
- Terminal output colors (green, red, blue) stay inside blocks; they never
  climb into chrome.
