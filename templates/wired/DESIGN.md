# Wired — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A printed technology magazine that refuses to dress as a SaaS site. White paper,
one black wordmark, enormous high-contrast serif headlines and story rows split
by hairlines. There is no decorative chrome, no gradient, no accent block — the
type is the entire show, and black-on-white is the brand's only "color scheme".

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the white page; `surface-raised` (#f5f5f5) is a rare tint for
  comment areas and quiet bands.
- `primary` is pure black — wordmark, every CTA fill, the heavy 2px campaign
  border, and the footer surface. It is never softened toward gray.
- `muted` (#757575) carries bylines, timestamps and supporting metadata.
- `accent` (#057dbc) exists for exactly one job: inline links inside long-form
  body copy. It never touches navigation, buttons or headlines.
- `border` (#e0e0e0) is the 1px hairline — the brand's only line and its only
  elevation cue.

## Typography
Three faces, three roles — the pairing is the identity:
- Display serif (high-contrast, tall and narrow): 64/48/32px at weight 400.
  Elegance comes from the typeface design; never promote the weight.
- Serif body (humanist): 16–19px at ~1.45 line-height for long-form reading,
  plus serif 700 bylines with generous 2.2 line-height.
- Sans (humanist grotesque): nav, category eyebrows, buttons and metadata at
  14–17px, weights 400/700. Serifs never set UI; sans never sets prose.

## Shape & depth
- Every interactive shape is square: 0px on buttons, inputs and cards. The only
  circles are small icon containers and avatars.
- No drop shadows anywhere. Flat white on white, separated by hairlines; the
  loudest move available is a 2px solid black border.

## Components
- Masthead: thin top band with the black wordmark centered, section nav flanking,
  Subscribe at the right.
- Category eyebrow: 14px sans 700 uppercase above every headline.
- Cover story: 64px serif display over a full-bleed 16:9 duotone image, with a
  serif-bold byline row beneath.
- Story card: photo on top (4:3), 20px sans-bold headline, gray sans lead.
- Story row: bold sans headline with gray meta, divided by 1px hairlines; the
  rows stay single-column at every width.
- Buttons: black filled square and black-outlined square, 16px/700 labels;
  circular outline buttons only for share icons.
- Inputs: white field with a 1px black border, square.
- Footer: near-black band — wordmark plus dense sans link columns and fine print.

## Layout
A wide editorial container (~1400px) with a magazine grid: one cover story,
two-up secondary cards, then the hairline-divided story stack at 16px vertical
padding. Section padding runs 48px top and bottom. Whitespace is set by the
hairline grid, not by card boxes.

## Don'ts
- Don't introduce a second chromatic accent; the link blue belongs inside
  article prose and nowhere else.
- Don't round any button, input or card corner — square is non-negotiable.
- Don't hang shadows on cards; hairlines and surface contrast do all elevation.
- Don't set display in a sans face or push display weight past 400.
- Don't set prose in the sans, or nav and buttons in a serif.
- Don't replace the story-row hairlines with boxed cards.
