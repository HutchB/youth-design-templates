# PlayStation — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A console launch trailer told as a web page. Full-bleed bands of black, white
and PlayStation Blue cut from one section to the next; the surface change itself
is the divider. Chrome stays out of the way — airy light-weight headlines, big
key art, and a single blue pill that means "do the thing".

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the black canvas behind nav, heroes and footer; `surface-raised`
  (#181818) fills game tiles and dark cards; `ink-elevated` (#121314) is for
  inset panels like the subscription banner.
- `primary` (PlayStation Blue #0070d1) is the universal CTA — pills, the active
  filter chip, badge fills, and the footer surface. At most one full-bleed blue
  band per page.
- `accent` (#53b1ff) is the brightened blue for inline links and small moments
  of legibility on dark canvas; never a second CTA color.
- `commerce` (#d53b00) is the only warm color, reserved for store actions:
  buy, pre-order, add to cart. Never on marketing chrome.
- Text is white on dark; `muted` (#cccccc) carries secondary copy; hairlines
  use `border` (white at 20%).
- The subscription tier keeps a gold gradient accent bar — that banner only.

## Typography
One proprietary sans stand-in (Inter / Helvetica class), used in two voices:
- Display at weight 300 — 54/44/35px heroes with near-zero tracking. The light
  weight against black is the brand's editorial signature; never bold it.
- Buttons and nav at weight 700, 14–18px with +0.3–0.45px tracking.
- Body 16–18px at 1.5 line-height; captions 12–14px in `muted`.

## Shape & depth
- Two radii do everything: pills (9999px) for every CTA, filter chip and paddle;
  8px for game tiles and cards; inputs sit at 4px.
- Full-bleed bands and the nav stay at 0px — the structure is square, the
  controls are round.
- Cards rest flat. No shadow until press (0 4px 12px black at 16%); depth comes
  from surface steps between bands, not elevation.

## Components
- Primary nav: 48px black bar — logo glyph left, centered link row, search and
  account icons right.
- Hero band: full-bleed dark (optionally deepening from #121314 to black) with a
  weight-300 headline, one blue pill, and key art owning 60–90% of the band.
- Commerce pill: orange, same geometry as the blue pill, store verbs only.
- Filter pills: translucent by default; the active chip turns opaque white.
- Game tile: 16:9 art at 8px radius with title and platform tag overlaid
  bottom-left, plus small blue badges ("New", "Pre-order").
- Progress row: thin track with a blue fill for download/install state.
- Subscription banner: #121314 panel, 8px radius, gold gradient bar across the
  top, headline plus a single blue pill.
- Footer: a full-bleed PlayStation Blue band with white captions — the page's
  "return to brand" close.

## Layout
Sections stack at a 96px rhythm, each band owning the page edge-to-edge; only a
~1280px content column sits inside. Game rails run 4-up at desktop (16px–24px
gutters), collapsing 3-up / 2-down at smaller widths. Copy columns stay narrow
(~520px) so the imagery can breathe. Hero padding is 96px vertical, 48px
horizontal.

## Don'ts
- Don't rest a shadow on a card; flat until pressed.
- Don't substitute another blue, and don't put blue on marketing surfaces —
  pills, chips, badges and the footer band are its whole territory.
- Don't use commerce orange anywhere except store actions.
- Don't bold display headlines; the light weight is the voice.
- Don't put gradients on chrome — the gold tier bar and the hero's slow darken
  are the only two, both tied to specific bands.
- Don't round band edges or square the pills; the 0px-structure / round-control
  split is the entire shape system.
- Don't spend more than one full-bleed blue band per page.
