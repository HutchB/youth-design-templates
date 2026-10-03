# Sentry — Vetta Edition

The companion `demo.html` builds the issue stream — severity chips, event sparklines and a stack-trace panel — plus a mobile layout and deliberate off-style counter-examples. It is the reference for on-style here.

## Atmosphere
Violet-tinted vigilance. Deep purple-black surfaces that never collapse into
pure black, white type with lavender-gray support, and severity expressed in
a small strict palette. It reads like a mission console at 3am: legible
first, characterful second.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` (#1f1633) is the sea; `surface-raised` (#2a1e42) floats cards,
  rows and panels on it.
- `primary` is Sentry purple (#6a5fc1): links, focus, active nav and the
  filled button, with white text on it.
- `accent` is lime (#c2ef4e) — exactly one pop per section: a highlighted
  metric, a resolved state, a special link.
- `muted` (#b1a5c9) is lavender-gray metadata; `danger` (#ff5c5c) is
  reserved for fatal and error severity.
- `border` (#362d59) is purple-tinted — neutral gray borders are off-brand.

## Typography
- One sans, four jobs: 400 body, 500 nav and emphasis, 600 titles, 700 CTA.
- Uppercase micro-labels with +0.02em tracking mark severity chips and
  section markers.
- Mono (16px in code contexts) for stack traces, frames and event ids.

## Shape & depth
- Radius runs 6–13px; primary buttons may hit 13px — chunkier than most dev
  tools, part of the tactile voice.
- Shadows are purple-tinted, never neutral: a soft ambient under cards, an
  inset press on filled buttons.

## Components
- Issue row: title, mono culprit, severity chip, event and user counts, and
  a small sparkline; the selected row lifts to `surface-raised` with a
  purple edge.
- Severity chips: 10–11px uppercase on low-alpha tinted fills — red fatal,
  orange error, yellow warning, blue info.
- Stack trace: raised panel, mono, muted line numbers; the failing frame
  carries a purple left edge and a low-alpha purple fill.
- Buttons: filled purple with an inset shadow and uppercase label; a solid
  white button is the loudest CTA; glass panels for overlays.

## Layout
- Console: top bar, one filter row, then a single-column issue stream; a
  380–420px detail pane joins on wide screens.
- Marketing: 64–80px bands with content islands floating in the purple sea.

## Don'ts
- Pure black (#000) is banned — the purple-black IS the brand.
- Neutral gray text or borders break the warm violet cast; everything
  tints.
- Lime appears once per screen and never shares a component with coral or
  pink.
- Nothing interactive below 6px radius — sharp corners are off-brand.
