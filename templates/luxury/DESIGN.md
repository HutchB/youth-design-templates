# Luxury Serif — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Quiet opulence. A cream page that never hurries, charcoal serif display set
large and airy, and antique gold spent the way a jeweler spends it: one
hairline, one serif of lettering, never a block of it. Whitespace is the most
expensive material on the page and is used accordingly — most sections are
more empty than full. Photography (or its gradient stand-in) is brightened and
framed in gold hairlines like objects in a vitrine. The overall voice is a
letterpressed invitation from a house founded some time last century.

This is not Editorial Print with a different accent. Editorial is ink-on-paper
journalism: dense ruled columns, drop caps, pull quotes, a seal-red stamp, a
grid that proves itself. Luxury Serif is a vitrine: almost no rules at all,
no columns, no drop caps — the gold `--color-gold-line` replaces the black
hairline, whitespace replaces the grid, and the restraint is the luxury.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is cream (`#faf8f3`), never pure white; the warmth is the point.
  Dark or cool page backgrounds end the style.
- `surface-raised` is brightened white, reserved for imagery panels and
  featured objects — the vitrine glass, not a card system.
- `surface-foreground` is charcoal (`#1a1a18`), a soft black. Text, the wordmark
  and the primary button share it.
- `primary` is that same charcoal: the filled action is a black button with
  cream text (`primary-foreground` is cream, never #ffffff).
- `accent` is antique gold (`#bfa05a`) for small serif marks, initials and
  rare emphasized words. It never fills areas, never colors body text, never
  appears on buttons larger than a link.
- `gold-line` (`#d9c9a3`) is the workhorse: 1px hairline dividers, frames
  around imagery, underline accents. Two golds on a page — a hairline and a
  word — is a normal density; more begins to gild.
- `border` is a warm cream-toned line for the quietest structure (list
  separators, table rows). Anything that must be noticed is `gold-line`.
- `muted` is warm greige for captions and secondary text. `danger` is oxblood,
  reserved for destructive and error states; it never shouts.

## Typography
Serif display, patient sizes:
- Display is the high-contrast Didone stack (Didot/Bodoni/Times) 44–110px,
  weight 400–500 — luxury display is rarely bold; its authority comes from
  size, contrast and air. Leading 1.05–1.2 (looser than a magazine), tracking
  normal to slightly wide. Occasional italic for one emphasized word.
- Eyebrows and labels are 10–12px, uppercase, letter-spaced 0.2–0.35em, in
  `muted` or gold. The wide tracking does the work bold would do elsewhere.
- Body is a workhorse serif 16–18px, line-height 1.7, measure 55–65
  characters, set in a single unhurried column — no multi-column prose.
- Numerals (calibres, references, prices) use the Didone's oldstyle figures;
  prices never sit in a bold chip — they are small, gold, and understated.
- No sans beyond functional UI chrome (form fields, tiny buttons); if a sans
  appears it is 10–12px uppercase tracked, never a headline.

## Shape & depth
- Radius caps at 4px (`radius-xl/2xl`); most elements are square or carry a
  2px courtesy trim. Pills and rounded cards are off-style.
- Depth is nearly forbidden: `shadow-sm` is a whisper for floating chrome
  (sticky nav, dialogs) and `shadow-lg` the loudest permitted moment, used
  once per page if at all. Cards do not float — panels are distinguished by
  `surface-raised` and gold hairlines instead.
- The structural device is the gold hairline: `--color-gold-line` 1px rules
  under the nav, around image frames, between spec rows, above footers.
  Hairlines may be full-bleed edge to edge — the frame is the composition.
- Imagery sits in a gold hairline frame with generous inner padding, like a
  matted print; the frame gap is part of the design.

## Components
- Navigation: tiny tracked uppercase links, a centered serif wordmark, one
  gold hairline beneath. No buttons in the nav bar — at most one text link.
- Hero: gold eyebrow ("MAISON LUNEL — EST. 1892"), Didone display 72–110px,
  one short serif paragraph in `muted`, and a single charcoal button with
  tracked uppercase label. Below, the framed image panel.
- Buttons: charcoal fill, cream text, square corners, uppercase tracked
  11–12px labels, height 44–52px. Secondary is a gold hairline outline with
  charcoal text. Tertiary is a gold underlined serif word. Hover deepens the
  fill slowly (300ms) — motion is unhurried or absent.
- Spec lists: label left (tracked caps, `muted`), value right (Didone
  numerals), separated by `border` hairlines; the section is framed by
  `gold-line` rules above and below.
- Imagery panels: `surface-raised` or a gradient plate, gold hairline frame,
  caption below in tracked caps with a reference number ("REF. 018").
- Forms: underline fields on cream, gold on focus, serif placeholder text.
- Quotes/testimonials: Didone italic 24–30px with a single gold hairline
  above, attribution in tracked caps.

## Layout
Single-column and centered, with vast margins: content measure 640–760px,
section spacing 96–160px vertical, page padding 32–48px. Full-bleed gold
hairlines and full-bleed image panels mark the rhythm; everything else floats
in cream. Asymmetry is allowed only as a 7/5 split around a framed image —
never a busy grid. The page should feel like it took its time; if two sections
touch, the layout is wrong.

## Don'ts
- No pure white page background, no dark mode inversion, no cool grays.
- No large gold fills, gold gradients or gold text blocks — gold is a
  hairline, a word, or an initial.
- No bold display type, no condensed faces, no all-caps headlines (caps are
  for 10–12px labels only).
- No pills, no radius above 4px, no drop-shadow card systems, no hover lifts.
- No urgency: no countdown timers, no starbursts, no sale badges, no more
  than one CTA per view.
- No dense grids, no multi-column body prose, no crowded sections — if
  whitespace can be added, it must be.
- No sans-serif headlines, no icon-heavy chrome, no decorative borders
  thicker than 1px.
