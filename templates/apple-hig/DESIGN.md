# Apple HIG — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Native iOS calm. A light-gray canvas with white grouped cards, hairline separators
and exactly one tint doing the pointing. Nothing shouts: hierarchy comes from
background luminance and type weight, not from shadows or decoration. Controls
feel physical but quiet — switches, segmented controls and grouped lists straight
from the platform, never restyled.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames. The theme
pins the light variants; every iOS system color exists as a light/dark pair, and
both columns below are part of the contract:

| System color | Light | Dark |
| --- | --- | --- |
| systemBlue | #007AFF | #0A84FF |
| systemGreen | #34C759 | #30D158 |
| systemIndigo | #5856D6 | #5E5CE6 |
| systemMint | #00C7BE | #63E6E2 |
| systemTeal | #30B0C7 | #40C8E0 |
| systemCyan | #32ADE6 | #64D2FF |
| systemPurple | #AF52DE | #BF5AF2 |
| systemPink | #FF2D55 | #FF375F |
| systemBrown | #A2845E | #AC8E68 |
| systemRed | #FF3B30 | #FF453A |
| systemOrange | #FF9500 | #FF9F0A |
| systemYellow | #FFCC00 | #FFD60A |

Grays and semantic layers:

| Role | Light | Dark |
| --- | --- | --- |
| systemGray | #8E8E93 | #8E8E93 |
| systemGray2 | #AEAEB2 | #636366 |
| systemGray3 | #C7C7CC | #48484A |
| systemGray4 | #D1D1D6 | #3A3A3C |
| systemGray5 | #E5E5EA | #2C2C2E |
| systemGray6 / grouped background | #F2F2F7 | #1C1C1E |
| secondaryLabel (`--color-muted`) | rgba(60,60,67,0.6) | rgba(235,235,245,0.6) |
| separator | rgba(60,60,67,0.29) | rgba(84,84,88,0.6) |
| systemFill | rgba(120,120,128,0.2) | rgba(120,120,128,0.36) |

- `surface` (systemGroupedBackground) is the page; `surface-raised` (white) is
  every grouped card sitting on it.
- `primary` (systemBlue) is the tint: links, selected controls, the one filled
  action. It marks what is tappable — a blue pixel that does nothing is wrong.
- `accent` (systemIndigo) is a second tint for a genuinely second purpose; it is
  used as sparingly as `primary`.
- `muted` (secondaryLabel) carries secondary text; `border` (opaqueSeparator)
  only where a hairline must hold up over busy content.
- In dark mode hierarchy is carried by background luminance steps — #000000 →
  #1C1C1E → #2C2C2E — never by shadows.

## Typography
System font stack only; SF is the platform voice and is not redistributable, so
the stack starts at `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif`.
Sizes follow the Dynamic Type ramp:

Large Title 34 · Title1 28 · Title2 22 · Title3 20 · Headline 17 Semibold ·
Body 17 Regular · Callout 16 · Subhead 15 · Footnote 13 · Caption1 12 · Caption2 11

Emphasis is weight, not size: Headline is Body's same 17px in Semibold. Nothing
in a native surface goes below Caption2 (11) or above the Large Title.

## Shape & depth
- Radius scale: 8 for small controls, 12–16 for cards and menus, 20–28 for
  sheets and large containers.
- Cards sit flat on `surface`; rows inside a group are divided by hairlines,
  not gaps. A resting card normally carries no shadow at all.
- `shadow-sm`–`shadow-lg` are reserved for things that truly float above the
  page: sheets, popovers, alerts.
- Bars use the translucent material: `background: rgba(249,249,249,0.75)` with
  `backdrop-filter: blur(20px) saturate(180%)` (dark: rgba(30,30,30,0.75)).

## Components
- Grouped lists are the signature: inset white groups on gray, 44pt rows,
  hairline dividers starting after the leading icon, trailing value in `muted`,
  and a chevron whenever the row navigates.
- Controls keep their platform shapes: green-when-on switches, segmented
  controls (white raised segment on a gray track), sliders, steppers.
- Buttons: filled (`primary` background, white label) for the single main
  action; tinted (primary at ~15% fill, primary label) for secondary; plain
  blue text for tertiary.
- Bars: a large-title navigation that collapses to a centered title on scroll,
  and a translucent tab bar pinned to the bottom.

## Layout
One column. Groups run nearly edge to edge with ~16px outer insets and 8–10px
between groups; the gray background breathes through the gaps. Rows are 44pt
minimum, labels leading-aligned, values trailing. Content reads top-down —
no multi-column mosaics inside a phone surface.

## Don'ts
- No drop shadows to fake hierarchy inside a page — use background steps.
- No system-blue decoration; blue means "interactive".
- No custom or downloaded fonts — the system stack is the identity.
- No light-mode values on a dark canvas or vice versa; every color pair moves
  together.
- No rows under 44pt and no touch target under 44×44pt.
