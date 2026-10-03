# Dark Academia — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
An old library reading room that happens to render. Parchment paper, oxblood
leather, antique gold tooling; serif scholarship in warm, candle-lit tones.
The page behaves like a well-kept college catalogue — hairline rules, catalog
numbers, small caps, marginalia — not like an app. Quiet, learned, faintly
ceremonial, and always warm rather than bright.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the parchment page; `surface-raised` is a fresher sheet laid on
  top, for cards, panels and the reading pane.
- `surface-foreground` is deep brown ink; never pure black.
- `primary` (oxblood) is rationed to real actions — Enrol, Reserve, Submit —
  plus filled stamps and the selected state, always carrying
  `primary-foreground` parchment text.
- `accent` (antique gold) is ornament, not interaction: fine rules, seals,
  drop caps, keylines. Never a hero background, never a large fill, never a
  button. `gold-line` is its pale wash for wide decorative rules.
- `muted` serves catalog numbers, tutors, dates and captions; `border` draws
  every hairline; `danger` (brick) marks errors, overdue fines, withdrawn
  volumes.

## Typography
Serif carries the whole identity; there is no second voice to trade with.
- Titles in serif bold 28–44px with tight leading; course and chapter titles
  18–22px semibold.
- Body prose 17–19px at line-height 1.65; reading passages open with a drop
  cap set in ink or oxblood.
- Small caps (uppercase 12–13px, letter-spacing 0.12em) mark departments,
  tutors, term metadata and buttons; catalog numbers stay in `muted`.
- Quotations are serif italic against a gold rule. A plain sans face may appear
  only inside dense tabular data, if at all — never for prose, never for
  headings.

## Shape & depth
- Radii stay bookish and small: 2–8px across `radius-sm`…`radius-xl`; nothing
  ever becomes a pill or a squircle.
- Depth is paper, not physics. Hairlines in `border` and `gold-line` organize
  everything; shadows are extremely faint and warm (a 1–2px blur of brown ink
  at 8%), reserved for raised sheets, cards and menus.
- Double rules — a 2px gold line above a 1px `border` line — frame mastheads
  and open sections the way engraved plates do.
- Cards may carry an inner gold keyline (a second border inset a few pixels),
  echoing tooled leather bindings.

## Components
- Course/chapter row: small-caps department, serif title, muted tutor and
  time, separated by hairlines. The selected row gains an oxblood left bar and
  an oxblood title.
- Catalog card: `surface-raised` sheet at `radius-md`, hairline `border` with
  a `gold-line` inner keyline, catalog number in `muted`, serif title, shelf
  mark, and exactly one oxblood action. Rare volumes get a circular gold seal.
- Pull quote: serif italic 22–26px with a 2px `accent` left rule.
- Buttons: small-radius rectangles 36–40px tall; primary filled oxblood with
  parchment small-caps label, secondary transparent with an ink hairline.
  Quiet actions are small-caps text links in `muted` that darken on hover.
- Inputs: parchment fields with a 1px `border` and ink caret, or underline
  style. Focus is a 2px oxblood underline or outline — never a glow.
- Seals and stamps: small circled gold or oxblood marks for Rare, New, and
  term badges; rotated slightly like wax impressions.

## Layout
A centered reading column of 640–720px with generous margins; catalogue pages
may widen to 1040px as main + 300px marginalia split by a hairline. Vertical
rhythm runs 40–64px between sections; each section opens with a small-caps
heading over a double gold rule. Whitespace is part of the hush — content is
never crammed to the edges.

## Don'ts
- No neon, no cold gray, no glass blur, no glossy gradients — light stays
  candle-warm and matte.
- Gold is a fine line or a small ornament; it is never a large fill, a hero
  background, or text color on parchment.
- Never set prose in sans, and never introduce a modern geometric typeface.
- No pure #000/#fff and no large flat color panels; parchment and ink are
  always slightly warmed.
- Radii above 8px, pills, soft modern shadows and floating gradient cards all
  break the period voice immediately.
