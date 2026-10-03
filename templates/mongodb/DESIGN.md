# MongoDB — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Enterprise calm with a leaf-green pulse. Stark white surfaces carry dense
database work in near-teal ink; the bright green pill is the single moment of
conviction on every screen. Pragmatic, data-forward, never playful.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is plain white — page and cards share it; structure comes from 1px
  `border`, and `surface-raised` (#f4f7f6) marks wells and inset sections.
- `primary` (#00ed64) is the bright leaf green and belongs to pill buttons and
  small highlight badges — with dark teal `primary-foreground` text on it,
  never white.
- `accent` (#00684a) is the deep green for inline links, active underline tabs
  and focus borders; it reads as "same conviction, indoor voice".
- Text: `surface-foreground` (#001e2b) ink; secondary text `muted` (#5c6c7a).
- `danger` (#cf4a35) covers destructive actions and failing states only.

## Typography
System sans with a geometric, even-tempered voice:
- Display 40–56px at weight 500 with tight (-0.5 to -1.5px) tracking and 1.1
  leading; section heads 22–28px.
- Body 14–16px at 400 with 1.5 leading; labels and buttons 14px at 600.
- Uppercase micro tags at 11–12px with +1px tracking encode categories.
- Monospace for collection names, connection strings and metrics values.

## Shape & depth
- Cards sit at `radius-lg` (12px); inputs and code blocks at `radius-md` (8px);
  every button and status badge is a full pill — the pill is a signature, never
  square it.
- Elevation is quiet and teal-tinted: flat hairline cards by default,
  `shadow-md` on hover-elevated tiles, `shadow-lg` for floating code mockups.
- The one inverted surface is the near-teal code block (`surface-foreground`
  used as a dark fill) with white text.

## Components
- Buttons: pill, 40–44px, 600 labels. Primary green fill; secondary is an
  outlined pill with 1px strong border; tertiary ghost.
- Cards: white, 1px `border`, `radius-lg`, 20–32px padding; feature wells use
  `surface-raised` with no border.
- Tables: `radius-md` frame, hairline rows, 14px cells; numbers right-aligned
  and tabular.
- Badges: two shapes — soft mint pill for status, tiny `radius-sm` tags for
  categories (a narrow set of saturated tag colors, nothing else).
- Underline tabs: inactive `muted`, active `accent` with a 2px bottom rule.
- Inputs: 44px, 1px `border`, 8px radius; focus swaps to a 2px `accent` border.

## Layout
1280px max with 32px gutters. Marketing bands breathe at 64–96px; product
screens tighten to 24–32px. Card grids run 3-up → 2-up → 1-up. White space is
generous between sections, frugal inside tables.

## Don'ts
- The bright green is never body text, a background wash or a border — it is
  pills and badges, full strength or nothing.
- Don't square the pill buttons; don't round the category tags into pills.
- No shadows on plain documentation tables; elevation is reserved for mockups.
- Don't add saturated color beyond green and the small category-tag set.
- Monospace never carries prose.
