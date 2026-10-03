# Wise — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Borderless money with its voice turned up. A pale sage canvas hosts soft white
cards and enormous black type; one lime-green button does all the convincing.
It reads like a Scandinavian magazine that happens to move currency, not like
a bank.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the sage canvas (#e8ebe6) — the page mood itself. White
  `surface-raised` cards sit on it, and surface contrast (sage vs white) does
  the job shadows usually do.
- `primary` (#9fe870) lime green is the single CTA color, always paired with
  near-black `primary-foreground` text. It never sits on a green background.
- `accent` (#ffeb69) flag yellow appears only in celebratory details —
  rate-alert stars, "fastest route" confetti, small illustration moments.
- Text is `surface-foreground` (#0e0f0c), support text `muted` (#454745);
  `danger` (#d03238) is reserved for errors and destructive actions.
- Structural outlines on inputs and the converter card use full-strength ink,
  not gray — the confident 1px black border is a signature.

## Typography
System sans pushed to its heaviest:
- Display runs at weight 900, 40–96px, tight leading — the loudest voice in the
  kit. Never render a hero at 700 or lighter.
- Sub-headings and UI labels sit at 600; body at 400, 14–16px.
- Money is the interface: amounts 28–56px, weight 700, `tabular-nums`, with
  currency codes in 600.
- Sentence case everywhere; no uppercase displays.

## Shape & depth
- Cards and buttons share the generous 24px radius (`radius-xl`); inputs take
  12px; small chips 8px. Sharp corners are off-brand.
- Elevation is surface contrast: white card on sage reads as raised without any
  shadow. `shadow-lg` is only for true overlays (modals, toasts).
- Status pills are full-radius: soft green tint for positive, dark maroon fill
  with white text for negative.

## Components
- Buttons: 48px, `radius-xl`, 600 labels — lime fill for primary, sage fill for
  secondary, white with a 1px ink border for tertiary.
- Converter card: white, 1px ink border, 24px radius; from/to amount rows with
  currency chips, a rate row pinned between them.
- Fee rows: quiet hairline dividers, label left in `muted`, value right in
  bold tabular figures.
- Progress steps: numbered circles with a lime track for completed states.
- Badges: full pills; positive uses the soft green tint family, negative the
  dark red fill.

## Layout
Content centers near 1200px; the transfer flow lives in one focused column
(360–480px) beside or above supporting cards. Bands breathe at 48px; card
interiors at 24px. Grids step 3-up → 2-up → 1-up with 16–24px gutters.

## Don'ts
- Never put the lime CTA on a green surface, and never tint page backgrounds
  with it — green is the button, the canvas stays sage or white.
- No second brand accent: yellow is confetti, not a system color; don't add
  purple, teal or blue accents.
- Don't render CTAs or cards with sharp corners, and don't shrink hero type
  below weight 900.
- Don't gray-out the ink borders on inputs — a pale border reads broken here.
- Don't reuse the lime green as a success indicator; semantic status uses its
  own positive/negative palette.
