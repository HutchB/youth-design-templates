# GOV.UK — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Public-service plainness. Black text on white paper, one dependable blue for
anything interactive, a yellow that exists for focus and warnings, and not one
pixel spent on decoration. The design gets out of the way because here the
content is the service — forms, statuses, deadlines.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is plain white and `surface-foreground` is near-black ink; body copy
  is set in that ink at full contrast, never gray for comfort.
- `primary` (#1d70b8) is the link and primary-action blue. Underlines are part
  of the link — color alone never carries meaning.
- `accent` (#ffdd00) is the focus yellow; it also backs warning text. It is the
  loudest thing in the system and it only appears when the system needs the
  user's eyes immediately.
- `surface-raised` (#f3f2f1) is the light grey of phase banners, secondary
  panels and hover states; `border` (#b1b4b6) draws form field edges and
  separators.
- `muted` (#505a5f) is secondary text — used for supporting copy, never for
  content the user must act on.
- Success lives in the green (#00703c) of completion panels and "Completed"
  tags; `danger` (#d4351c) marks errors — as text, a 4px rule and a border on
  the offending field.

## Typography
The official voice is GDS Transport, which is not redistributable; the theme
ships a system stack in that spirit (`"GDS Transport", Arial, "Segoe UI", system-ui, sans-serif`)
and loads no webfont.
- Sizes sit on a 16/19/24/36/48 ramp — body text is 16px mobile, 19px desktop,
  1.5 line height.
- Headings are bold, not decorated: 36–48px page titles, 24px section headers.
- Bold (700) marks emphasis inside copy; italic is avoided. Long measure is
  capped around 66 characters.

## Shape & depth
- Every corner is 0px. There is no radius scale to reach for — a rounded control
  is instantly off-style.
- There are no drop shadows and no elevation ladder. Depth is drawn with 1px
  borders, the grey fill, and left-edge rules (a 10px black inset bar marks
  guidance, a 4px red rule marks errors).
- Focus is the depth system's replacement: a 3px yellow highlight with a black
  outline, applied to links, inputs and buttons alike.

## Components
- Buttons are 44px-tall rectangles with a 2px darker bottom edge instead of a
  shadow; blue #1d70b8 with #0f3d63 beneath, green #00703c with #002d18 for
  "Start now" moments. Disabled is grey on the grey fill.
- Links are blue with a persistent underline that thickens on hover; visited
  links deepen to #4c2c92.
- Form labels sit above fields at 19px bold, hints are `muted`, errors add a
  4px red rule above the question, red border on the input and red error text.
- The task list: rows of blue links with square status tags on the right —
  "Completed" in white on #00703c, "Not started" white on #6f777b.
- Panels: the green completion panel is white 32px bold text on #00703c with
  generous padding; the warning is bold text on #ffdd00 with a black exclamation
  mark leading it; inset guidance is a 10px black left bar.

## Layout
A single content column, max ~660px for reading, inside a full-width header and
footer. Vertical rhythm comes from 5px-multiple spacing (10/15/20/30/40);
sections separate with generous space instead of boxes. Header and phase banner
run full-bleed; everything else stays in the column.

## Don'ts
- No rounded corners, no shadows, no gradients — ornament is a trust cost here,
  not a bonus.
- No color without a job: blue is interactive, green is success, red is error,
  yellow is focus and warning. Nothing else arrives in color.
- No gray body copy — secondary text may be #505a5f, but content stays ink.
- No icons or imagery inside forms where a plain label does the work.
- No underline-free links and no color-only status: every state has a word or a
  shape as well as a hue.
