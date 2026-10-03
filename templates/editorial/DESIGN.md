# Editorial Print — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A printed magazine caught on screen. Paper white, ink black, and a single
seal-red used the way a printer uses red: a stamp, a folio, a pull-quote
mark. Oversized serif headlines, strict hairline grids, captions in the
margin. The page should look typeset by hand, not rendered by a framework —
every rule justified, every column counted.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is uncoated paper white; `surface-raised` is the coated plate
  sheet reserved for image panels and pulled blocks.
- `surface-foreground` is ink black — text, rules and the drop cap all share
  it.
- `accent` is ink black too, on purpose: in this system the accent *is* the
  ink itself — the hairline grid, pull-quote borders and display headlines
  carry it. Giving the accent a second hue would break the ink-on-paper
  premise and dilute the red; the one-color accent keeps "black type" and
  "red stamp" legible as exactly two voices.
- `primary` (seal red) is the only color on the page: the folio mark, issue
  stamps, section kickers, byline rules and the few real actions. Never a
  large fill, never body text.
- `muted` for captions, folios and standfirsts; `border` for every hairline;
  `danger` for corrections and error states (a printer's correction pen).

## Typography
Two serif voices plus a caption sans, from the system stacks only.
- Display headlines in the high-contrast serif (Didot/Bodoni/Times stack)
  44–96px, leading 0.95–1.05, tracking tight; the bigger the headline, the
  tighter the leading.
- Body prose in the workhorse serif 17–19px, line-height 1.6, set in columns;
  long-form opens with a drop cap in ink.
- Kickers, folios, captions and bylines in the caption sans 11–13px, mostly
  uppercase with 0.12em tracking; captions never in serif, headlines never in
  sans.
- Pull quotes are display serif italic 24–30px ruled above and below in ink,
  or floated as a red-marked break in the column.

## Shape & depth
- The page has no light source, so it casts no shadows: `shadow-sm/md/lg` are
  `none`. Separation is done with hairlines, whitespace and plate sheets —
  elevation is a screen idiom, not a print one.
- Radii are 0–2px: images, plates and buttons are square or a 2px courtesy
  trim. A rounded corner is the loudest way to break this system.
- The structural device is the hairline: `border` 1px rules top and bottom of
  sections, between columns, above bylines and below mastheads. Double rules
  (1px + 3px ink) frame the masthead only.

## Components
- Masthead: oversized display wordmark, folio line (issue no · date · price)
  in caption sans, red issue stamp, double rule beneath.
- Section header: red kicker small caps + ink hairline; the red recurs on
  folio numbers and stamps so sections are findable by color at a glance.
- Article header: kicker, display headline, serif standfirst in `muted`,
  byline over a 2px red rule, dateline.
- Pull quote: ruled or red-marked, always breaks the column; never decorated
  with icons or background fills.
- Image plate: `surface-raised` panel, square corners, ink or `muted` keyline
  optional, caption below in caption sans with a "Plate n." prefix.
- Buttons: ink rectangles (2px radius) with caption-sans uppercase labels;
  primary is seal red with `primary-foreground` text; secondary is ink
  hairline outline. Inputs are underlines on paper, never boxed.

## Layout
A 12-column hairline grid; text lives in 2–3 columns of 60–75 characters
(column-rule: 1px `border`), with a full-width display band for the feature.
Baselines are even and spacing lands on a 4px rhythm; captions hang outside
or under plates, never beside both. Margins are generous and symmetrical —
the grid is the identity, so a dropped column beats a stretched one.

## Don'ts
- No shadows, no gradients, no glass, no glow — flatness is the medium.
- No radius above 2px; pills and rounded cards read as SaaS immediately.
- Red never fills areas, never underlines body text, and never appears twice
  in one component except kicker + folio by design.
- No centered body text, no justified ragged nonsense, no more than one
  display face per page.
- Never set headlines in sans or captions in serif; never replace a hairline
  with a borderless box.
