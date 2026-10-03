# Zapier — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Automation that feels approachable. Warm cream instead of cool white, coffee
ink instead of black, and a single confident orange that carries every
conversion. The middle-radius, middle-weight voice says friendly competence —
a tool that connects apps without intimidating the person wiring them.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is warm cream (#fffefb), never pure white; `surface-raised`
  (#f8f4f0) deepens it for cards and inset wells. Temperature is identity.
- `primary` (#ff4f00) is the one saturated orange: primary CTAs and the
  zap-live toggle, with warm-white `primary-foreground` text.
- `accent` is not a second hue — it is the coffee ink (#201515) itself, doing
  double duty as the fill of secondary buttons, featured cards and dark bands.
  There is deliberately no purple, blue or yellow accent in this system.
- Text: `surface-foreground` coffee ink; secondary `muted` (#605d52).
- `danger` (#d0342c) marks failed runs and destructive actions only.

## Typography
System sans, two registers:
- Display 32–56px at weight 500 with calm leading; card titles 20–24px at 600.
- Body 16–18px at 400; buttons 16–18px at 600.
- Uppercase eyebrows at 14px with +1px tracking introduce sections — the only
  sanctioned uppercase.
- Sentence case everywhere, even hero headlines.

## Shape & depth
- 12px is the canonical radius for buttons and cards (`radius-md`); inputs and
  chips take 6px; badges are the only full pills. Nothing goes fully square or
  fully round except badges.
- Elevation is surface contrast first: cream cards on cream page, or ink
  borders on the important containers. Full-strength ink 1px borders mark
  editable, structural things — pricing cards, editor steps, inputs.
- `shadow-md`/`shadow-lg` are warm-tinted and rare: floating menus and modals
  only.

## Components
- Buttons: 44–48px at `radius-md` — orange fill, ink fill, or cream with an ink
  outline. The label sits at 600.
- Zap step cards: white with a 1px ink border and 12px radius; app icon tile,
  event line, account line; connected by vertical dashed ink lines with a
  circular + affordance between steps.
- Status toggle: 44px pill switch; orange when the zap is live, gray when off.
- Template cards: `surface-raised` cream, no border, an icon pair joined by a
  short connector, title at 600, meta line in `muted`.
- Run log rows: mono timestamps, status dot, step count — quiet and scannable.

## Layout
Content centers near 1280px with generous gutters. The editor is a two-column
canvas (steps + history); marketing bands breathe at 64px, cards pad at 24px.
Grids run 3–4-up → 2-up → 1-up at 16–24px gutters.

## Don'ts
- Never swap the cream canvas for pure white or the coffee ink for pure black —
  warmth is the brand's temperature signal.
- Don't render buttons as pills or as sharp rectangles; 12px is the signature.
- Don't add a second chromatic accent — orange, cream and coffee are the whole
  palette; app icons are the only place other colors appear.
- Don't spend orange on decoration, links or backgrounds; it converts or it
  signals "live", nothing else.
- No cool-gray neutrals anywhere; every gray carries coffee warmth.
