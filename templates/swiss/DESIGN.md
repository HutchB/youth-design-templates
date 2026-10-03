# Swiss Grid — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
An International Typographic Style poster doing an honest day's work as an
interface. White ground, ink text, one Swiss red used like a stamp; a strict,
often visible grid; flush-left, ragged-right type in a single sans; and
mathematical whitespace that is measured, never poured. Nothing is decorated —
every mark on the page either carries information or is the structure itself.
The impression is a exhibition catalogue printed in Basel: orderly, confident,
a little severe.

This system and Editorial Print are siblings with opposite temperaments:
editorial is a magazine — serif display, drop caps, pull quotes, hairline
newsprint rules, a mood piece. Swiss Grid is the catalogue and the poster —
sans only, no drop caps, no pull quotes, no justified prose, and the grid is
allowed to show itself as drawn lines. Where editorial wants to be read in an
armchair, this wants to be read standing up, in one glance, at a distance.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the white ground. Most of the page is nothing but white.
- `surface-raised` is the single tonal step (`#f7f7f7`), reserved for image
  plates and pull-out blocks so they register as objects without shadows.
- `surface-foreground` is ink (`#111111`): type, rules, and grid share it.
- `accent` is ink black by design. The structure — grid lines, rules, display
  type — *is* the accent; giving it a second hue would leave two competing
  colors and blur the one voice red is allowed to have.
- `primary` is Swiss red (`#e32636`), the only color on the page: index
  numbers, section markers, the single filled action, one emphasis block per
  screen. It never fills large areas and never colors body text.
- `muted` is a neutral gray for captions, folios and secondary data. It never
  draws rules — rules are ink.
- `border` is ink black: every structural hairline is black 1px. A tinted or
  gray rule is off-style; if a line matters, it is ink.
- `danger` is a brick red reserved for errors, kept clearly darker than the
  primary red so the two are never confused.

## Typography
One sans-serif voice, many weights:
- The grotesque stack (Helvetica Neue/Arial/system sans) is the only family.
  No serif anywhere, no mono, no script — a serif letterform breaks the system
  faster than any color could.
- Display type is 800–900 weight, uppercase or tightly set title case,
  48–120px, tracking slightly negative, leading 0.92–1.0. Headlines align to
  the grid's left edge; centered display type is off-style.
- Text weights 400–500 for body, 16–18px, line-height 1.5, flush-left
  ragged-right, measure 55–70 characters.
- Meta layers (indices, folios, captions, labels) are 11–13px, uppercase,
  0.08–0.14em tracking, often prefixed with a red number ("01 —").
- Numerals are the decoration: big red indices, dates, scales. When a number
  can say something, no icon is drawn instead.

## Shape & depth
- Radius is 0 everywhere. Buttons, plates, images and swatches are
  rectangles; a rounded corner is the loudest possible violation.
- Shadows are none. The page is lit by nothing and casts nothing; separation
  is achieved by whitespace, hairlines and the single `surface-raised` step.
- The structural device is the 1px ink rule: above and below sections,
  between columns, under headers. Rules meet at right angles and align to the
  grid's edges.
- The grid may be drawn: a faint skeleton of 6 or 12 columns (ink at low
  alpha) can sit behind content, and red column numbers may mark it. Making
  the grid visible is this system's signature honesty — structure is content.

## Components
- Section header: red index ("01 —"), uppercase sans label, 1px ink rule
  above; the red recurs on folios so sections are findable by color.
- Hero: a 900-weight display block flush-left, one line of which may sit on a
  solid red block in `primary-foreground` white; a right-hand meta column of
  hairline-separated rows (who, when, where) balances the asymmetry.
- Index/contents rows: full-width, baseline-aligned, hairline underneath,
  red number left, meta right — the Swiss table of contents is the workhorse
  list pattern.
- Buttons: sharp rectangles with uppercase sans labels. Primary is red fill
  with `primary-foreground` text; secondary is white with a 1px ink outline;
  tertiary is a text link with an ink underline that turns red on hover.
  Hover swaps fill and text color instantly — no fades, no lifts.
- Inputs: a single underline on white, never a box; focus thickens the rule
  or turns it red.
- Image plates: `surface-raised` rectangles, square corners, optional 1px
  ink keyline, captioned below in the meta style ("Fig. 01 —").

## Layout
A 6- or 12-column grid with hard vertical alignment; every element snaps to a
column edge or to the gutter between them. Layouts are asymmetric on purpose —
a 8/4 split with a heavy left is more Swiss than a centered 6/6 — but always
exact: two elements that look related must share an edge. Whitespace is
planned in multiples of the baseline (8/16/24/32/64); margins are wide and
the rag is controlled. Content max-width 1080–1200px. When a layout feels
weak, the fix is never ornament — it is a stronger grid.

## Don'ts
- No serif, no script, no mono as a primary face; no display face other than
  the grotesque.
- No rounded corners at any radius, no pills, no circles as containers.
- No shadows, gradients, glass, blur or glow — flatness is the medium.
- No centered display type, no justified body text, no decorative asymmetry
  that does not align to the grid.
- Red never colors body text, never fills a large area, and never appears as
  a gradient or a tint — it is a full-saturation stamp or nothing.
- No icons where a numeral or a rule will do; no illustration in the chrome.
- No soft gray rules: structure lines are ink or they do not exist.
- No more than one red action per view — when everything is marked, nothing
  is marked.
