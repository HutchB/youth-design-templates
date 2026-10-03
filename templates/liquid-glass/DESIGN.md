# Liquid Glass — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Apple's Liquid Glass language, from the 2026 generation of its platforms: a functional glass that is tinted rather than colourless, bends light at its edges, and only makes sense floating over a vivid, fluid background. The material is the interface — containers are glass, controls are glass, and the color comes from the light field behind them. Premium and luminous rather than dark and moody: where classic glassmorphism sits in a dim room, Liquid Glass sits in front of moving color.

Fits control surfaces, media players, system utilities, premium settings screens and widgets. A poor fit for dense documents, long-form reading, or any surface whose background is a flat solid color — glass needs something worth refracting.

Related entry, and the boundary: the collection's Glassmorphism style is the night-glass look — colourless white glass at 5–12% over an ink-dark scene, a 60px blur, tint explicitly forbidden, champagne accents. Liquid Glass makes the opposite call: the glass itself carries a dark tint, the specular edge is mandatory, the blur is tighter (24px), and the backdrop is vivid and multicolored. If the panels turn colourless and the scene turns monochrome ink, that is the other system.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is tinted translucent glass, rgba(16,18,26,0.55): a dark slate-blue film, never pure black and never clear. `surface-raised` is one step lighter and denser for the top-most panels.
- The color the user actually sees comes from the backdrop: `gradient-backdrop-a/b/c` (#2b1e66 violet, #0e7a8a teal, #c2186e magenta) staged as large soft radial light fields. The backdrop owns the color; the glass dims and saturates it.
- `primary` is systemBlue (#0a84ff) — active tiles and the primary control. `accent` is systemPink (#ff375f) — the rare second signal such as a recording or focus state. `cyan` (#64d2ff) is garnish for a third state, at most once per screen.
- `muted` is translucent white for secondary text on glass; `surface-foreground` is the near-white ink.
- `border` (rgba(255,255,255,0.16)) is the resting edge; `edge-highlight` (rgba(255,255,255,0.45)) is the specular stroke laid inside the top edge. Together they are one lighting story — the panel's rim catches the light field behind it.
- `danger` (#ff453a) is destructive actions only.

## Typography
System font stack only — SF is the intended voice and is not redistributable, so the stack starts at `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif`.
- iOS-flavored sizes: titles 17–22px semibold, body 15px, captions 11–12px. Type sits directly on glass, so keep it near-white and never below 11px.
- Numerals in sliders, timers and readouts read as instrument markings: medium weight, tabular.
- No glow on text. The light belongs to the material's edges, not to the letters.

## Shape & depth
- Radii are large and continuous: 12px small, 16–20px cards, 28–32px sheets, and controls go fully round (capsules, circles). Corners feel liquid — when a glass tile nests inside a glass card, its radius steps down so the curves stay concentric.
- Every glass surface is three layers, and all three are required:
  1. the tinted fill (`surface`) with `backdrop-filter: blur(24px) saturate(180%)` — the saturation boost is what makes the backdrop's color roll through the panel;
  2. the specular edge: a 1px inset top highlight at `edge-highlight` plus a faint bottom inset at `edge-ground` — this is what makes a panel look bent, not just blurry;
  3. the drop: `shadow-md` (8px/32px black at 35%) with the hairline `border` at rest, brightening on hover.
- Drop any one layer and the panel reads as flat translucency; drop the specular edge and it reads as the other glass system.
- One panel per composition may tilt a few degrees. Tilt is a depth garnish, never a layout system.

## Components
- **Buttons:** glass capsules. The quiet state is `surface` fill with the specular edge; the primary action adds a `primary`-tinted glass fill (blue at roughly 60–85%) with a white label and keeps its specular edge. Pressed scales to ~0.97.
- **Tiles:** rounded-square control tiles (~72px). Active tiles take the tinted `primary` glass; inactive tiles stay plain. Glyphs are white, labels 11px.
- **Toggles:** a glass track with a white thumb carrying a soft shadow; the on-state fills the track with `primary` glass.
- **Sliders:** a recessed glass track with a bright white fill and a white thumb — volume and brightness style, filling from the leading edge.
- **Media panel:** artwork block, title and artist, progress as a thin glass track with a white elapsed fill, circular glass transport controls.
- **Segmented control:** a glass capsule track with a raised glass thumb for the active segment.

## Layout
Glass floats; it never tiles edge-to-edge. Cards sit apart over the light field with 12–20px gaps, and the background must stay visible between them — roughly a third of the viewport shows bare backdrop. Keep large, smooth gradients behind text-bearing panels: busy edges behind glass turn to mush. Panels nest at most one level deep — a tile inside a card is the floor.

## Don'ts
- No colourless milk-white glass over a dark ink scene — that is the collection's Glassmorphism entry, a different system.
- No flat solid backgrounds behind glass: without a light field there is nothing to refract and the material dies.
- No glass fill above ~70% opacity; past that it is a solid panel wearing a blur as a costume.
- No skipping the specular edge — a bare 1px border is the fastest way out of this language.
- No small radii: nothing under 12px, and controls fully round.
- No glass over dense body text; reading surfaces take near-opaque fills or move off glass entirely.
- No nesting glass inside glass beyond one level — stacked blur turns to milk.
- No neon tube borders, scanlines or hard glow: this is lens light, not signage.
