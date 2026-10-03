# Cursor — Vetta Edition

The companion `demo.html` assembles one real screen — an AI editor session — from the rules below, then adds its mobile layout and deliberate off-style counter-examples. Treat it as the reference for what on-style means here.

## Atmosphere
A graphite workspace for writing code with an AI sitting next to you. Warm
gray surfaces, dense quiet chrome, and a single orange voltage that appears
so rarely it always means something. Cursor's marketing face is a warm cream
editorial world; inside the editor everything turns graphite and stays there.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` (#1e1f22) is the editor floor; `surface-raised` (#26282c) lifts
  sidebars, chat panel and inputs exactly one step.
- `primary` is Cursor Orange (#f54e00): the wordmark plus at most one filled
  action per view. Never a wash, never a border, never a glow.
- `accent` (lavender #c0a8dd) is the AI's color: agent stages, inline
  suggestions, timeline pills. If the model did it, it may wear lavender.
- Text is `surface-foreground`; secondary text and icons are `muted`.
- `danger` (#f87171) marks errors and deletions; hairline `border` does all
  pane separation.

## Typography
System sans for chrome, real mono for anything that runs:
- UI 13–14px at weight 400–500; headings 15–20px semibold with tight
  tracking. Nothing oversized, anywhere.
- Code, paths, commands and inline symbols are always mono at 13px / 1.5.
- Timeline pills run 11px uppercase with +0.08em tracking.

## Shape & depth
- Radii cluster at 6–8px; roomy cards may reach 12px. Pills are reserved for
  AI stage chips.
- Panes are flat: 1px `border`, no inner shadows, no gradients.
- `shadow-lg` exists for floating layers only — AI panel popover, command
  bar, dialogs.

## Components
- Buttons 28–32px tall, radius-md; one filled orange primary, everything
  else ghost with `surface-raised` hover.
- Inputs use raised fill and a 1px border; focus brightens the border — no
  colored ring.
- Editor chrome has fixed heights: 32px tabs, 24px file-tree rows, 22px mono
  status bar.
- AI chat: user prompts sit in raised blocks, assistant answers run plain;
  stage pills (Thinking / Reading / Editing / Done) use the pastel set —
  peach, blue, lavender, gold — as status, never as decoration.
- Diffs tint at low opacity: mint for additions, rose for deletions.

## Layout
Three working columns: activity rail plus file tree (~220px), flexible
editor, AI panel (300–340px, collapsible). Spacing rhythm 4/8/12/16; bars
stay under 32px tall. Density is the identity — whitespace is for the diff,
not the frame.

## Don'ts
- Orange is a scalpel: no orange panels, no orange text, one orange button
  per screen.
- Pastels never leave the AI timeline; they are not a decoration palette.
- No pure black canvas and no pure white text — the graphite and
  tinted-white pair is what makes it read as this editor.
- No marketing hero inside the product: no gradient banners, no 48px
  headings.
