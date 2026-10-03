# Apple macOS — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
The Mac desktop, not the phone. This is the desktop sibling of the collection's Apple HIG entry: that one renders iPhone app screens — grouped lists on a gray canvas, 44pt rows, no window chrome. Apple macOS renders the Mac itself: windows floating above a wallpaper on big soft shadows, a translucent menu bar, vibrant sidebars, traffic-light controls and a Dock. Where the iPhone surface is one sheet of content, a Mac screen is chrome around content — title bar, sidebar, toolbar, status items — and the calm comes from quiet gray chrome and generous diffuse shadows rather than from background-luminance steps.

Fits desktop productivity surfaces, admin consoles, file managers, settings screens and IDE-adjacent tools — anything that should feel like it belongs on a Mac. A poor fit for marketing pages or touch-first mobile layouts.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames. The values are community-sampled: Apple publishes no fixed hex for its accent color because the accent follows the user's system setting, and the gray ramp is platform chrome rather than a brand palette.
- `surface` (#ffffff) is the window content area. `surface-raised` (#f0f0f2) is the chrome — sidebars, toolbars, title bars: one calm gray, never a second hue.
- `primary` (#0a7cff) is the accent, sampled at the default blue. It marks selection and the single filled control; it is never decoration. If users can change their accent, every tinted control follows — that behavior is part of the platform contract, so treat the blue as a default, not a law.
- `accent` (#28cd41) is macOS systemGreen. It is deliberately not the iOS value (#34C759): the Mac ships a slightly different green, and switches, "On" values and success states use it. This seam between Mac and iPhone is one of the tell-tale details.
- `muted` (#6e6e73) is secondary text; `border` (#d5d5d7) is the hairline that holds chrome edges and row dividers.
- `danger` (#ff453a) is destructive actions only. `traffic-close` / `traffic-min` / `traffic-max` (#ff5f57 / #febc2e / #28c840) exist solely for window controls.
- `menubar` (rgba(246,246,248,0.72)) and `sidebar` (rgba(240,240,244,0.8)) are the vibrancy fills — translucent grays that pick up whatever sits behind them.

## Typography
System font stack only — SF is the platform voice and is not redistributable, so the stack starts at `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif`. Mac type runs smaller and denser than iOS:
- Body and controls sit at 13px — the Mac default. Secondary text 11px, captions 10px.
- Window and toolbar titles are 13px semibold, centered in the title bar; in-window page titles run 15–17px bold; sidebar section labels 11px.
- Emphasis is weight and color, never a size jump: a row's label is 13px ink, its value 13px in `muted`.

## Shape & depth
- Radii: 6px on push buttons and inputs, 8px on rows and small cards, 12px on windows and large cards; nothing above 20px inside a window.
- Depth is a shadow ladder, and this is the clearest split from the iOS entry: iOS builds hierarchy with background-luminance steps and almost never casts a shadow; macOS floats real surfaces — `shadow-sm` for hovered controls, `shadow-md` for popovers and the Dock, `shadow-lg` for the window itself. The window shadow is large, soft and diffuse (24px/64px), and the page breathes around it.
- Vibrancy is the signature material: chrome panels are translucent gray plus a backdrop blur — `sidebar` fill with `backdrop-filter: blur(24px)` over the content or wallpaper behind. The menu bar uses the same recipe at `menubar`.
- Traffic lights live only in window chrome: close/min/max in the title bar, left-aligned, ~12px circles. They never appear inside content or on cards.

## Components
- **Window chrome:** title bar with a centered 13px semibold title, traffic lights left, search or toolbar actions right; the sidebar rises to meet the title bar height.
- **Sidebars:** vibrant translucent gray, icon + label rows at ~28px, the selected row filled with `primary` and white text, small colored glyphs for items.
- **Rows and tables:** hairline dividers, 13px labels with `muted` trailing values, chevrons for navigation. Settings cards are white on white, separated by `border` and `shadow-sm`.
- **Controls:** push buttons at 6px — filled `primary` for the main action, white with a hairline for the rest; popups with paired chevrons; checkboxes tinted `primary`; the switch is smaller than iOS (roughly 38×22) and takes the accent when on.
- **Menu bar:** a translucent strip at the very top of the screen — the app menu bold, item menus regular, status items and the clock right-aligned.
- **Dock:** a translucent shelf of rounded-square icons with a running-indicator dot, a hairline separator and the trash at the end.

## Layout
The desktop is the canvas: content floats in windows with real margins, never edge-to-edge. Inside a window, a ~200–240px sidebar joins a fluid content column with 16–20px padding; settings groups are full-width cards with ~12px gaps. When the desktop metaphor drops on small screens, the window becomes the page and the chrome collapses — the mobile section of `demo.html` shows the transitions.

## Don'ts
- No iOS grouped lists transplanted into a Mac window: no gray canvas with inset white groups, no 17px rows, no 44pt minimums where a 28px row is native.
- No traffic lights on content cards, buttons or rows — they are window controls and nothing else.
- No hard or tight shadows: macOS shadows are big, soft and diffuse; a 2px black drop shadow reads wrong on a Mac.
- No colored chrome: sidebars and toolbars stay gray; color belongs to content and selection.
- No custom fonts, and no iOS sizes — the system stack is the identity at Mac sizes (13px body).
- No flat windows: a window without its large soft shadow is just a rectangle pasted onto the page.
