# Terminal — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A CRT console that never turned off. Near-black glass, one phosphor green
burning at full brightness, everything monospace, every corner square, and a
faint bloom around anything bright. The screen hums; scanlines run over the
whole page. There is no illustration, no rounding, no gray — the interface is
text, and text is the interface.

Fits developer tools, log viewers, status pages, CLI-adjacent dashboards and
personal sites that want terminal cred. It is a poor fit for image-heavy
marketing, consumer onboarding, or anything that needs warmth.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the glass (`#0c1210`): the page, the console body, every well.
- `surface-foreground` is the same phosphor green as `primary` — there is no
  separate text color. Text, chrome and action share one burning hue.
- `surface-raised` is a half-step lighter green-black for panels, code blocks
  and modal wells; it differs from the glass by just enough to read as depth.
- `muted` is dimmed phosphor for prompts, paths, timestamps and line numbers.
  Body copy is never muted — if it matters, it burns at full brightness.
- `accent` is amber phosphor: warnings, the second voice, highlighted keys.
- `danger` is red phosphor for `[FAIL]`, errors and destructive keys; it gets
  its own bloom (`shadow-glow-red`), never a different shape.
- `border` is dark green, drawn 1px. Hairlines separate zones; they never
  fill.
- If a color is needed that the CRT could not show, the design is wrong — the
  palette is four phosphors and their dimmed states, nothing else.

## Typography
One family, one voice — monospace everywhere, including headings:
- Stack: `ui-monospace, Menlo, Consolas, "Liberation Mono", monospace` (see
  the mono stack in terminal.css conventions). No sans, no serif, no display
  face anywhere.
- Base 15px / line-height 1.4. Headings are the same mono in bold, usually
  uppercase; a "display size" is just 18–20px bold. Hierarchy comes from
  brightness, casing and spacing, never from a second typeface.
- Text renders like a terminal: commands and code plain green, strings amber,
  errors red, comments dimmed. Treat every interface string as console output.
- Width discipline: measure stays ~72–80 characters, matching a console line.
  Line numbers, table columns and prompts are aligned by character grid, not
  by eyeball.

## Shape & depth
- Radius is zero everywhere — every token is `0px`. A rounded corner breaks
  the fiction faster than a wrong color.
- Structure is 1px `border` hairlines and ASCII-style dividers
  (`──`, `══`, box-drawing characters) rather than fills.
- Depth is bloom, not cast shadow: the shadow tokens are zero-offset green
  halos (`shadow-sm/md/lg`), used sparingly on focused panels, the active
  prompt and key readouts. Amber and red elements bloom in their own phosphor.
- The `shadow-cursor` inset is the block caret; the blinking cursor is the
  only animation the system needs.
- Scanlines (`gradient-scanlines`) overlay the entire page once, at low
  opacity, as a fixed layer — texture, not decoration.

## Components
- **Prompt line:** the atomic unit — `muted` host/path, a bright green `$` or
  `>`, the input, and a blinking block cursor. Empty inputs still show the
  cursor block.
- **Buttons:** mono text inside a 1px green border, transparent fill, zero
  radius; hover fills `primary` with `primary-foreground` ink. The primary
  action may be pre-filled green. `:active` dims instead of moving — keys do
  not travel.
- **Inputs:** transparent field, 1px green border, green text, block cursor;
  focus brightens the border and adds `shadow-sm` bloom.
- **Status badges:** literal bracket tokens — `[OK]` green, `[WARN]` amber,
  `[FAIL]` red — plain mono, no fill, no radius.
- **Tables:** output-styled, 1px hairline rules, right-aligned numbers,
  `muted` headers in uppercase; a selected row inverts to green fill with
  dark ink.
- **Progress:** a bracketed bar `[████████░░░░] 54%` using block characters
  over a `surface-raised` track; percent in amber.
- **Panels:** `surface-raised` with a 1px border and a mono uppercase title
  line, often boxed by rule characters. Modals look like a terminal dialog:
  a bordered box, a centered question, `[Y/n]` keys.
- **Links:** green, underlined, amber on hover; visited stays green — the CRT
  has no history.

## Layout
- Full-bleed single column like a console viewport; max measure ~80 chars of
  mono, centered. Sidebars, if any, are bordered panes of the same glass.
- Sections are separated by rule lines or blank lines, not by background
  changes. Padding is compact (12–16px); vertical rhythm follows the line
  grid — spacing moves in line-height multiples.
- Everything aligns to the character grid: two-column "label: value" rows
  use fixed-width labels, tables use padded columns, never proportional type.

## Don'ts
- No rounded corners anywhere — radius tokens are all 0 and stay 0.
- No non-monospace type, not for hero text, not for numbers, not for quotes.
- No gray: dimming is `muted` green, borders are dark green; a neutral gray
  breaks the phosphor fiction.
- No cast shadows or offsets; depth is bloom only.
- No gradients besides the scanline overlay, no images-as-chrome, no
  illustrations — the CRT draws characters, not pictures.
- No pastel or desaturated fills; the palette is saturated phosphor on glass.
- No soft focus rings — focus is a brighter border plus bloom, in phosphor.
- Don't dim body copy: hierarchy lives in brightness and casing, and muting
  the main text turns the screen into mud.
