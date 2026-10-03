# Nintendo 2001 — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A game publisher's home page that behaves like the faceplate of a console. Every
region is a discrete metal panel in brushed periwinkle, edge-lit on top and
shadow-lined beneath, bolted tight against its neighbors. Carbon-navy slabs carry
the system controls, and the only saturated warmth on the page is rationed for
one job: telling you where to go next.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` (#dedede platinum) is the standard content surface for rows and inset
  panels; `surface-raised` (white) lifts cards, form fields and the logo pill.
- The machine body is `chrome` (#7a8aba periwinkle) with `border` (#3d4f97
  chrome indigo) drawing every bevel line and panel edge.
- `primary` (Nintendo red #e60012) is the brand mark and the alert color — logo
  pill and validation only, never a surface fill.
- `accent` (signal orange #f68d1f) means "forward": submit buttons, arrow discs
  and chevron chips. Warm color is always action; cool chrome never carries it.
- `carbon` (#21242e) is the command layer — nav bar, rail buttons, footer — and
  doubles as the ink on light panels. Secondary chrome text uses `muted`
  (#60619c indigo).

## Typography
All Arial/Helvetica, no webfonts — character comes from treatment:
- Display: Arial Black 900 at 40–44px for hero wordmarks, always white with a
  heavy outline and a hard offset shadow, like box-art logotype.
- Chrome voice: 11px bold uppercase with 0.5px tracking for nav words, panel
  headers, buttons and labels — silkscreened legends on plastic.
- Body: 12px regular, quiet, never competing with the labels.
- Links: 12px bold in `muted` indigo; micro print at 10px in the footer.

## Shape & depth
- Default corners are sharp; the largest panels get 45° chamfers (cut corners),
  not curves.
- Rounding is spent only where a shape means a physical control: the logo pill,
  radio dots and round arrow discs get full pill radii; small panels take 4–6px.
- Depth is bevel simulation: a lighter top edge, an indigo shadow line beneath,
  and hard 2–3px offset shadows on chips. No blurred drop shadows exist.
- `carbon` slabs carry a faint halftone dot texture, like a speaker grille.

## Components
- Nav bar: ~28px carbon slab with halftone texture — red logo pill at left, five
  gold (#e48600) uppercase section words, amber utility chips at right.
- Sub-nav strip: pale periwinkle (#9fbee7) row of small utility links beneath.
- Hero panel: chamfered rectangle filled with a page-tinted field (lavender,
  circuit teal, racetrack red), an outlined display wordmark and a round orange
  arrow disc.
- Section label bar: `chrome` strip with a grid glyph and an uppercase title,
  capping every content module.
- News row: platinum row with a bold indigo headline and an 18px orange chevron
  chip at its right end.
- Right-rail buttons: carbon slabs with white uppercase labels and a leading
  glyph (Login, Subscribe, Newsletter, Help).
- Info box: white card with an amber header tab, explaining a tool.
- Poll panel: raised periwinkle (#8ba1d4) card with white radio dots and an
  orange SUBMIT.
- Badges: amber squares — rating stamps and the ESRB mark pinned in the footer.
- Footer: chamfered carbon slab with 10px fine print.

## Layout
A fixed ~800px canvas, centered, packed like a control panel. Masthead (logo +
speech bubble + search) sits above dual nav bars; then a full-width hero; then a
two-thirds column of stacked panels beside a one-thirds action rail. Modules butt
together with thin indigo seams and a few pixels of chrome — whitespace is a
joint, not a luxury. Gaps run 8–16px; panel padding 12px.

## Don'ts
- Don't soften every corner into a rounded-card system; the machined faceplate
  is the identity, and roundness belongs to the logo, radios and arrows.
- Don't introduce blurred elevation — bevels and hard offsets only.
- Don't let signal orange or amber become decoration; warm color must always
  mean "act here".
- Don't add hues beyond the periwinkle chrome, carbon and the rationed warms —
  page-tint hero fields are the only other color.
- Don't flatten the dual-nav hierarchy (gold words over pale strip) into one bar.
- Don't render display wordmarks as flat text; without the outline plus hard
  shadow they lose the box-art reference.
- Don't widen the layout into an airy modern page; the packed fixed canvas is
  the brand.
