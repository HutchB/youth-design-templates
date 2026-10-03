# Raycast — Vetta Edition

The companion `demo.html` builds the command bar itself — search, grouped results, a preview pane and the keycap footer — plus a mobile layout and deliberate off-style counter-examples. It is the reference for on-style here.

## Atmosphere
One continuous near-black. Page, palette, store and settings share the same
ink; they separate by surface steps and hairlines, never by light. The result
feels like a physical console: matte, dense, and built for the keyboard
first.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- Depth is a ladder, not a shadow: `surface` (#0d0d0d) holds the page,
  `surface-raised` (#121212) lifts active rows, inputs and keycaps one step.
- `primary` is WHITE. The solid white pill is the only primary action, with
  black text on it. There is no colored CTA anywhere in this system.
- `accent` (red #ff6161) is the brand voltage: the logo mark and one hero
  moment per page. Never buttons, never body text.
- `muted` (#9c9c9d) for metadata; `danger` (#ff453a) for destructive rows;
  `border` (#242728) carries every card edge.

## Typography
- Inter-class sans everywhere: body 13–16px, line height 1.6, a hair of
  positive tracking (0.1–0.2px).
- Headings sit at weight 500–600 with tight line height; hero display runs
  48–64px.
- Keycaps are their own micro-genre: 11–12px mono chips with a faint top-lit
  gradient and a 1px border.

## Shape & depth
- Radius ladder: 4px keycaps and badges, 8px buttons and inputs, 10px cards,
  16px large mockup containers. Pills only for filter chips.
- Zero drop shadows. A floating palette reads as floating because its
  surface is lighter and its border is visible — nothing else.
- Rows run 32–36px; cards keep tight 16–24px padding.

## Components
- Primary pill: white fill, black label, 36px tall; pressed dims a single
  notch.
- Ghost buttons are transparent with white text; secondary buttons take a
  raised fill.
- List rows: icon tile, label, trailing keycap. The selected row lifts one
  surface step — never a colored highlight.
- Filter chips: transparent pills that fill raised when active.
- Search inputs: raised fill, hairline border; focus brightens the border,
  no glow.

## Layout
- The command palette is one centered column (min(680px, 92vw)): search on
  top, grouped results in the middle, a keycap footer at the bottom.
- Marketing and store surfaces ride one uninterrupted dark canvas with ~96px
  section rhythm; content caps around 1240px.

## Don'ts
- No drop shadows, no light mode — the ladder is the entire depth system.
- Never tint the primary CTA; white IS the action color.
- Red stays rare — one mark per view. Category colors (yellow, green, blue)
  live inside illustrations, not chrome.
- Nothing rounder than 16px on containers, nothing looser than 24px card
  padding; the system runs tight.
