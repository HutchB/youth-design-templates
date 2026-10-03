# Aurora — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Northern lights over deep water: vast dark navy, two or three great soft light fields drifting slowly — violet, aurora green, a breath of pink — and glass-leaning cards catching the glow. The temperament is quiet and natural: light as weather, not signage. Space does most of the work; the page is mostly night.

Fits SaaS landing pages, premium developer tools, ambient dashboards and portfolios. A poor fit for dense data tables, print-like documents, or anything that needs to feel urgent.

Related entry, and the boundary: the collection's Cyberpunk style is the neon city — hard zero-offset glow in the element's own hue, scanline texture, square tube-glass borders, blinking signs, electric tension. Aurora is the opposite temperament: large low-alpha light fields blurred into weather, rounded everything, no scanlines, no neon tubes, no blinking, nothing hard-edged. If a glow has a hot core, or the dark carries scanlines, that is the other system.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` (#050510) is the night: near-black navy, never pure black. `surface-raised` (#0d0d1f) is the card step; panels can also sit as translucent fills between the two.
- `primary` is violet (#7c3aed) — the brand voice: primary buttons, links, the deepest of the light fields.
- `accent` is aurora green (#00dc82) — the counter-voice: live states, success, one highlight per screen.
- Pink (#f472b6) lives almost entirely inside the backdrop as the third aurora hue; in the UI layer it appears only as a rare badge or a gradient endpoint.
- `muted` (#8b93c7) is periwinkle — secondary text that stays cool rather than going gray.
- `border` is violet at 25% alpha; structure is faint until an element is active, then border and glow brighten together.
- `danger` (#ff5470) is a soft hot red for destructive moments.

## Typography
System stack (`-apple-system, "Segoe UI", Roboto, Inter, sans-serif`); the voice is light and wide.
- Display headlines run 32–56px at regular-to-medium weight with slightly tight leading — calm confidence, not loud caps. One word or phrase per hero may take the violet→green gradient as a text fill.
- Body is 15–16px in `surface-foreground`; secondary text 13–14px in `muted` with relaxed leading.
- Kickers and labels are 11–12px uppercase with wide tracking, in `muted` or `accent`.
- No glow on body text — glow belongs to light fields, borders and one CTA at a time.

## Shape & depth
- Radii run 12–20px across controls and cards; hero panels may reach 24–28px. Nothing square.
- The aurora field is the depth system: `gradient-aurora-1/2/3` are large radial light fields (violet, green, pink) rendered at low alpha and softened with `blur-aurora` (80px). They anchor to corners and edges, asymmetrically, and drift slowly — never centered, never sharp-edged shapes.
- Glow is ambient, not hard: `shadow-sm/md/lg` are wide, low-alpha violet halos with no hot core; `shadow-glow-green` and `shadow-glow-pink` exist for the rare element that carries its own hue.
- Cards are glass-leaning: translucent `surface-raised` fill, a hairline `border`, and a resting `shadow-sm`; hover brightens the border and lifts the halo one step, never the border width.

## Components
- **Navigation:** a quiet bar or glass pill — a wordmark dot filled with the primary gradient, links in `muted`, one filled CTA.
- **Hero:** kicker, a 40–56px headline with one gradient phrase, 16px sub-copy in `muted`, and two buttons: filled `primary` with `shadow-md`, and a ghost with a hairline border.
- **Buttons:** filled violet (white label, violet halo), ghost (hairline, brightens on hover), quiet text links in `accent`.
- **Cards:** the translucent raised panel with hairline border; a small glyph chip colored by its hue; hover lifts the glow, never the border width.
- **Stats:** large tabular numerals with `muted` labels; a single stat may take the accent green.
- **Badges:** hairline pills with a colored status dot — green means live, and it never blinks.

## Layout
Content maxes around 1120px with sections 96–128px apart; the night needs room. The field is composed once per screen: one violet field behind the hero, one green or pink field answering lower on the page, both bleeding off the edges. At most three light fields per viewport, and body text never sits directly on a bright field without a panel between.

## Don'ts
- No neon-city furniture: no scanlines, no tube borders, no hard glow cores, no blinking elements, no 0–2px corners.
- No saturated gradient fills across the whole page — the field is low-alpha light on navy, not a wallpaper.
- No pure #000 and no flat gray: the dark is navy, and it always carries at least one faint field.
- No glow on paragraphs or small text; it vibrates and kills the calm.
- No more than three light fields per viewport, and never two hot fields in the same corner.
- No square cards and no solid-white panels — surfaces are translucent steps of the night, or they break the atmosphere.
- No more than one gradient-text phrase per page.
