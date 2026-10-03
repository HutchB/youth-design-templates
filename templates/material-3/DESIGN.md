# Material 3 — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Soft, tonal, a little playful. The baseline palette is a violet-tinted neutral
where every level of the interface has its own container color — surfaces don't
sit on shadows, they sit on slightly deeper tints of the same hue. Shapes are
large and friendly, motion is springy, and one purple does the pointing.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames. M3 is a
tonal system: every color is a container with a matching "on" color for its text.
- `surface` (#fef7ff) is the page — white with a breath of violet. The in-between
  steps (surface-container #f3edf7, surface-container-high #ece6f0) are where
  bars, sheets and quiet fills live.
- `surface-raised` (#e8def8, secondary-container) is the workhorse card fill, and
  its text is #1d192b — never gray on purple.
- `primary` (#6750a4) fills the single most important action; its text is white.
  On-container text elsewhere stays `surface-foreground`.
- `accent` (#7d5260, tertiary) is a third hue for contrast moments — a badge, a
  selected chip family, a secondary highlight — and appears in small areas only.
- `muted` (#49454f) is secondary text, icons and unfilled control parts; `border`
  (#cac4d0, outline-variant) is the quiet hairline for inputs and dividers.
- `danger` (#b3261e) is error containers and text; it never decorates.

## Typography
The official voice is Roboto; the theme ships a system stack in that spirit
(`Roboto, "Segoe UI", system-ui, sans-serif`) and loads no webfont.
- Display and headline sizes are large and regular-weight (48/36 for display,
  28/24 for headline) — M3 does emphasis with scale, then calms it with weight.
- Body large is 16px, body medium 14px, label large 14px with 0.1px tracking and
  500 weight — labels on buttons, chips and tabs all use it.
- Line height is generous (1.4–1.5) and headlines keep 0.25px negative tracking.

## Shape & depth
- Shape is a first-class token: 8px for small controls, 12px for cards, 16px for
  FABs, 28px for sheets and large containers, full-round for pills, chips and
  the bottom-nav active indicator.
- Depth prefers tone over shadow: a card is "raised" by its container color, not
  by elevation. The three shadows are the low M3 elevations and appear only on
  truly floating parts (FAB, menus, dialogs).
- State layers replace hover color changes: an 8% wash of the on-color over any
  interactive container, 12% when pressed.

## Components
- Buttons in four roles: filled (primary fill, white label), tonal (secondary-
  container fill, on-container label), outlined (1px outline, primary label),
  text (primary label). Full-round, 40px tall.
- FAB: 56px, 16px radius, primary-container fill (#eaddff) with #21005d icon,
  `shadow-md`, one per screen, bottom-right above the nav bar.
- Chips: 32px pills — assist, filter (checkmark when selected, tonal fill),
  input. Selected chips earn the secondary-container fill.
- Bottom navigation: a 64×32px pill indicator behind the active icon, muted
  labels, 80px total height including its surface-container background.
- Switches: 52×32 track, thumb grows from 16 to 24 when on, on-track takes
  `primary`, off-track takes `surface-container-highest` with a 2px outline.

## Layout
Single column with 16px gutters and 8px between related items, 24px between
groups. Lists of cards run full-width; grids of them use 12px gaps with equal
radii. Bottom bars and sheets pin to the window edge at full width — content
never slides beneath an opaque bar without its matching container color.

## Don'ts
- No gray text on tonal containers — every container gets its matching on-color.
- No shadows to separate cards; that is the container color's job.
- No corners under 8px on cards or controls; a rectangle reads as off-style.
- No third and fourth hue sprinkled around — `accent` is one deliberate moment
  per screen.
- No hard 45° gradients or glossy surfaces; depth is flat tone and gentle
  elevation.
