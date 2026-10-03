# Framer — Vetta Edition

The companion `demo.html` stages one real screen — a visual site-builder session on a
near-black canvas, with a layer tree, a selected button mid-edit and its inspector —
from the rules below, then adds the phone breakpoint and deliberate off-style
counter-examples. Treat it as the reference for what on-style means here.

## Atmosphere
The page is a working artboard. Everything sits on a near-black canvas, the chrome
stays monochrome and quiet, and the type does the talking: white display sizes with
poster-tight tracking. Color is rationed — one blue signal for selection, focus and
links, violet held back for the gradient spotlights that showcase work. Dark is the single mode the brand ships; it never turns light.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` (#090909) is the canvas itself; `surface-raised` (#141414) lifts cards,
  panels and inputs one step, and a further lift is white at roughly 4% alpha laid
  over raised.
- `primary` is Framer Blue (#0099ff) and it is a signal, never a surface: selection
  frames and handles, focus rings, hyperlinks. It never fills a button or a panel.
- The signature CTA inverts the canvas: a white pill (surface-foreground as its fill)
  carrying the canvas color as its ink. `primary-foreground` is the ink that sits on
  blue.
- `accent` (#6a4cf5) leads the gradient family — magenta #d44df0, violet #6a4cf5,
  orange #ff7a3d, coral #ff5577. Gradients live only on spotlight tiles as inline
  values; they are decoration anchors, not chrome.
- Text is `surface-foreground`; secondary text is `muted` (#999999). Nothing lives
  between ink and muted — there is no mid-gray scale.
- `danger` (#ff5577) borrows the coral anchor, since the palette ships no dedicated
  error tone. Hairline `border` (#262626) does all separation; dim it for soft
  dividers inside cards.

## Typography
Two families, hierarchy carried by size and tracking — not weight:
- Display: GT Walsheim Medium (fallback: a geometric grotesk at 500–600). Tiers run
  110 / 85 / 62 / 32px with a fixed −5% tracking. When space runs out, step the size
  down — the tracking percentage itself never shrinks.
- Body: Inter at 15px / 1.3, with its OpenType character variants (cv01, cv05, cv09,
  cv11, ss03, ss07) and tabular numerals wherever data lines up.
- Builder chrome: 11–12px labels in `muted`; coordinates, sizes and values in mono.

## Shape & depth
- Radius scale 4 / 10 / 15 / 20 / 30: controls at 10, template cards at 15–20,
  gradient spotlight tiles at 30, CTAs always full pills.
- Depth is a surface lift, not a shadow stack: canvas → raised → white-alpha.
  `shadow-sm` is a barely-there drop; `shadow-md` adds a top light edge for floating
  cards; `shadow-lg` is for modals and popovers above everything.
- Selection is a ring, not a fill: a 1px ring of `primary` at 15% marks selected
  elements, with solid handles drawn on the canvas around the active one.

## Components
- Primary CTA: white pill, roughly 10px 15px padding; pressed feedback is a slight
  scale-down, never a darker fill. Secondary: charcoal pill. Over imagery:
  translucent pill with a blur.
- Icon buttons are 40px circles; the top nav is a 56px bar; the footer is a
  caption-grid of small links.
- Tabs and pricing toggles show selection with a surface lift — raised fill and a
  hairline edge — never with color.
- Inputs sit on `surface-raised` and take a blue-tinted focus ring in `primary`.
- Gradient spotlight tiles: one or two per viewport, doing the atmospheric work that
  gradients otherwise smear across whole sections.

## Layout
A 5px base unit: 5 / 10 / 15 / 20 / 30 / 40, with sections at 96px. Content tops out
around 1200px wide; the dark canvas itself is the whitespace. Sections separate by
surface mode — black band, raised card band, gradient tile — instead of divider
lines. At the 1199px and 810px breakpoints grids collapse, the nav folds into a
menu, comparison tables become per-tier accordions, and display type steps down
while keeping its tracking ratio.

## Don'ts
- No light mode, ever, and no mid-tone grays beyond `muted`.
- Blue never fills: no blue buttons, no blue panels — selection, focus and links
  only.
- CTAs never get squared corners; the pill is part of the voice.
- Gradients belong on tiles, not on section backgrounds.
- No second chromatic accent — violet is the only other hue, and only inside tiles.
- No poster scale inside tool chrome: builder panels stay at 11–13px.
