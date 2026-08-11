#!/usr/bin/env node
/**
 * 为每个设计体系生成 `templates/<slug>/demo.html`。
 *
 * 一份 demo 就是「同一个产品页在这套体系下长什么样」：页面结构 21 套完全一致，视觉
 * 差异全部来自各自的 `theme.css` token 加下面这张形态表。结构一致才能横向比较，也
 * 让以后改版一次改到全部。
 *
 * 产物必须能离线自足地渲染：客户端会把它塞进一个 **不给脚本执行权** 的 sandbox iframe
 * 作悬停预览，所以这里不写 `<script>`、不引外链、不用 @import——build-catalog 会校验。
 *
 *   node scripts/build-demos.mjs           写入 demo.html
 *   node scripts/build-demos.mjs --check   只校验，与磁盘不一致时退出码 1
 *
 * 已经手工写过 demo 的条目（见 SKIP）不覆盖。
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const TEMPLATES_DIR = join(ROOT, "templates");

/** 手写 demo 的条目：生成器不碰。 */
const SKIP = new Set(["geometric-bold"]);

const SANS = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
const SERIF = 'Georgia, Cambria, "Times New Roman", serif';

/**
 * 每套体系的形态参数：token 表达不了的那部分（字体、字重、大小写、按钮与卡片的特殊
 * 形态）。取值依据是各自 DESIGN.md 的 Components / Typography 小节。
 */
const PROFILES = {
	linear: { heading: 600, tracking: "-0.02em", radius: "md", border: "1px", shadow: "none", density: "tight" },
	"doodle-pop": {
		heading: 800,
		radius: "xl",
		border: "3px",
		shadow: "none",
		buttonExtra: "box-shadow: 4px 4px 0 0 var(--color-surface-foreground);",
		cardExtra: "box-shadow: 6px 6px 0 0 var(--color-surface-foreground);",
	},
	stripe: { heading: 700, tracking: "-0.02em", radius: "md", border: "1px", shadow: "md" },
	spotify: { heading: 800, tracking: "-0.03em", radius: "full", border: "0px", shadow: "none", buttonExtra: "padding-inline: 32px;" },
	notion: { heading: 700, tracking: "-0.01em", radius: "sm", border: "1px", shadow: "none", density: "tight" },
	vercel: { heading: 700, tracking: "-0.03em", radius: "md", border: "1px", shadow: "none", accentFont: MONO },
	headspace: { heading: 700, radius: "2xl", border: "0px", shadow: "lg", buttonExtra: "padding-inline: 30px;" },
	github: { heading: 600, radius: "md", border: "1px", shadow: "none", accentFont: MONO, density: "tight" },
	apple: { heading: 700, tracking: "-0.03em", radius: "full", border: "0px", shadow: "none", scale: "large" },
	discord: { heading: 800, radius: "lg", border: "0px", shadow: "none" },
	anthropic: { heading: 600, headingFont: SERIF, radius: "md", border: "1px", shadow: "none", bodyFont: SERIF },
	netflix: { heading: 800, tracking: "-0.02em", radius: "sm", border: "0px", shadow: "none" },
	airbnb: { heading: 700, tracking: "-0.02em", radius: "lg", border: "1px", shadow: "md" },
	duolingo: {
		heading: 800,
		transform: "uppercase",
		radius: "xl",
		border: "2px",
		shadow: "none",
		buttonExtra: "box-shadow: 0 4px 0 0 rgb(0 0 0 / 0.2); padding-block: 14px;",
	},
	figma: { heading: 700, tracking: "-0.02em", radius: "md", border: "1px", shadow: "sm", density: "tight" },
	openai: { heading: 600, tracking: "-0.02em", radius: "lg", border: "1px", shadow: "none", layout: "centered" },
	slack: { heading: 800, tracking: "-0.02em", radius: "md", border: "1px", shadow: "sm" },
	coinbase: { heading: 700, tracking: "-0.02em", radius: "full", border: "1px", shadow: "none", numeric: true },
	shopify: { heading: 600, radius: "lg", border: "1px", shadow: "sm" },
	medium: { heading: 700, headingFont: SERIF, bodyFont: SERIF, radius: "sm", border: "1px", shadow: "none", layout: "centered" },
	"retro-95": {
		heading: 700,
		radius: "none",
		border: "2px",
		shadow: "none",
		accentFont: MONO,
		buttonExtra: "border-style: outset; border-width: 3px;",
		cardExtra: "border-style: outset; border-width: 3px;",
	},
};

/** theme.css 的 `@theme { … }` 块原样转成 `:root`，demo 就能脱离构建直接打开。 */
function themeToRoot(css) {
	const match = /@theme\s*\{([\s\S]*?)\n\}/.exec(css);
	if (!match) throw new Error("theme.css 缺少 @theme 块");
	return `:root {${match[1]}\n}`;
}

function radiusVar(key) {
	if (key === "none") return "0";
	if (key === "full") return "9999px";
	return `var(--radius-${key}, 8px)`;
}

function shadowVar(key) {
	return key === "none" ? "none" : `var(--shadow-${key}, 0 1px 2px rgb(0 0 0 / 0.1))`;
}

function escapeHtml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const ROWS = [
	["Onboarding revamp", "Shipped", "Apr 12", "98.2%"],
	["Billing migration", "In review", "Apr 09", "94.7%"],
	["Search relevance", "In progress", "Apr 07", "91.4%"],
	["Mobile gestures", "Blocked", "Apr 02", "88.0%"],
	["Design tokens", "Shipped", "Mar 28", "99.1%"],
];

const FEATURES = [
	["Composable primitives", "Every surface is built from the same tokens, so a change to the palette lands everywhere at once."],
	["Readable density", "Type scale and spacing are tuned together — screens stay legible as they fill with real data."],
	["Predictable states", "Hover, focus, disabled and error each have one defined treatment. No improvisation at build time."],
];

function buildDemo(slug, name, blurb, themeCss) {
	const p = PROFILES[slug];
	if (!p) throw new Error(`${slug}: 缺少形态参数`);
	const headingFont = p.headingFont ?? SANS;
	const bodyFont = p.bodyFont ?? SANS;
	const accentFont = p.accentFont ?? MONO;
	const radius = radiusVar(p.radius);
	const shadow = shadowVar(p.shadow);
	const gap = p.density === "tight" ? "20px" : "28px";
	const pad = p.density === "tight" ? "20px" : "26px";
	const heroSize = p.scale === "large" ? "68px" : "50px";
	const maxWidth = p.layout === "centered" ? "760px" : "1100px";
	const transform = p.transform ?? "none";

	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(name)} — design system demo</title>
<style>
/* Generated by scripts/build-demos.mjs — edit the generator, not this file.
   Tokens below mirror theme.css so the page opens standalone in a browser. */
${themeToRoot(themeCss)}

*, *::before, *::after { box-sizing: border-box; }
body {
	margin: 0;
	background: var(--color-surface);
	color: var(--color-surface-foreground);
	font-family: ${bodyFont};
	-webkit-font-smoothing: antialiased;
	line-height: 1.55;
}
h1, h2, h3 {
	margin: 0;
	font-family: ${headingFont};
	font-weight: ${p.heading};
	letter-spacing: ${p.tracking ?? "normal"};
	text-transform: ${transform};
	line-height: 1.15;
}
p { margin: 0; }
.wrap { max-width: ${maxWidth}; margin: 0 auto; padding: 0 40px; }
.muted { color: var(--color-muted); }

.topbar {
	display: flex; align-items: center; gap: 28px;
	padding: 18px 40px;
	border-bottom: ${p.border} solid var(--color-border);
	background: var(--color-surface-raised, var(--color-surface));
}
.brand { font-family: ${headingFont}; font-weight: ${p.heading}; text-transform: ${transform}; letter-spacing: ${p.tracking ?? "normal"}; }
.navlinks { display: flex; gap: 22px; font-size: 14px; }
.spacer { flex: 1; }

.btn {
	display: inline-block;
	border-radius: ${radius};
	padding: 11px 20px;
	font-family: ${headingFont};
	font-weight: ${Math.min(p.heading, 700)};
	font-size: 14px;
	text-transform: ${transform};
	border: ${p.border} solid transparent;
	${p.buttonExtra ?? ""}
}
.btn-primary { background: var(--color-primary); color: var(--color-primary-foreground); }
.btn-ghost { background: transparent; color: var(--color-surface-foreground); border-color: var(--color-border); box-shadow: none; }

.hero { padding: 76px 0 56px; }
.eyebrow {
	font-family: ${accentFont};
	font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
	color: var(--color-accent);
}
.hero h1 { font-size: ${heroSize}; margin: 18px 0 0; max-width: 15ch; }
.hero p.lede { margin-top: 20px; max-width: 54ch; font-size: 18px; color: var(--color-muted); }
.hero .actions { display: flex; gap: 12px; margin-top: 32px; }

.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: ${gap}; padding: 40px 0; border-top: ${p.border} solid var(--color-border); border-bottom: ${p.border} solid var(--color-border); }
.stat .value { font-family: ${headingFont}; font-weight: ${p.heading}; font-size: 34px; letter-spacing: ${p.tracking ?? "normal"}; ${p.numeric ? "font-variant-numeric: tabular-nums;" : ""} }
.stat .label { font-size: 13px; color: var(--color-muted); margin-top: 4px; }

section { padding: 64px 0; }
.section-head { display: flex; align-items: baseline; gap: 16px; margin-bottom: 28px; }
.section-head h2 { font-size: 28px; }

.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: ${gap}; }
.card {
	background: var(--color-surface-raised, var(--color-surface));
	border: ${p.border} solid var(--color-border);
	border-radius: ${radius};
	padding: ${pad};
	box-shadow: ${shadow};
	${p.cardExtra ?? ""}
}
.card h3 { font-size: 18px; }
.card p { margin-top: 10px; font-size: 14px; color: var(--color-muted); }
.chip {
	display: inline-block; margin-bottom: 14px;
	border-radius: ${radius};
	border: ${p.border} solid var(--color-border);
	padding: 3px 10px; font-size: 11px; font-family: ${accentFont};
	color: var(--color-accent);
}

table { width: 100%; border-collapse: collapse; font-size: 14px; }
th, td { text-align: left; padding: 14px 12px; border-bottom: ${p.border} solid var(--color-border); }
th { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-muted); font-weight: 600; }
td.num { text-align: right; ${p.numeric ? "font-variant-numeric: tabular-nums;" : ""} font-family: ${accentFont}; }
.badge { display: inline-block; border-radius: ${radius}; padding: 2px 9px; font-size: 12px; background: var(--color-accent); color: var(--color-primary-foreground); }
.badge.warn { background: var(--color-danger); }
.badge.mute { background: var(--color-border); color: var(--color-muted); }

.formrow { display: flex; gap: 12px; align-items: center; margin-top: 18px; flex-wrap: wrap; }
.field {
	flex: 1; min-width: 240px;
	border: ${p.border} solid var(--color-border);
	border-radius: ${radius};
	padding: 12px 14px;
	background: var(--color-surface);
	color: var(--color-muted);
	font-size: 14px;
}
.swatches { display: flex; gap: 10px; margin-top: 26px; flex-wrap: wrap; }
.swatch { width: 76px; }
.swatch .chipcolor { height: 44px; border-radius: ${radius}; border: ${p.border} solid var(--color-border); }
.swatch .name { font-size: 11px; color: var(--color-muted); margin-top: 6px; font-family: ${accentFont}; }

footer { border-top: ${p.border} solid var(--color-border); padding: 32px 0 56px; font-size: 13px; color: var(--color-muted); }
</style>
</head>
<body>
<div class="topbar">
	<span class="brand">${escapeHtml(name)}</span>
	<nav class="navlinks muted"><span>Product</span><span>Docs</span><span>Pricing</span><span>Changelog</span></nav>
	<span class="spacer"></span>
	<span class="btn btn-primary">Get started</span>
</div>

<div class="wrap">
	<div class="hero">
		<div class="eyebrow">Design system</div>
		<h1>${escapeHtml(name)} in a working interface</h1>
		<p class="lede">${escapeHtml(blurb)}</p>
		<div class="actions">
			<span class="btn btn-primary">Primary action</span>
			<span class="btn btn-ghost">Secondary</span>
		</div>
	</div>

	<div class="stats">
		<div class="stat"><div class="value">${p.numeric ? "48,210" : "48.2k"}</div><div class="label">Monthly active</div></div>
		<div class="stat"><div class="value">99.98%</div><div class="label">Uptime</div></div>
		<div class="stat"><div class="value">1.4s</div><div class="label">Median load</div></div>
		<div class="stat"><div class="value">312</div><div class="label">Components</div></div>
	</div>

	<section>
		<div class="section-head"><h2>Building blocks</h2><span class="muted">Same tokens, every surface</span></div>
		<div class="cards">
${FEATURES.map(
	([title, body]) => `			<div class="card">
				<span class="chip">Token driven</span>
				<h3>${escapeHtml(title)}</h3>
				<p>${escapeHtml(body)}</p>
			</div>`,
).join("\n")}
		</div>
		<div class="swatches">
			<div class="swatch"><div class="chipcolor" style="background: var(--color-primary)"></div><div class="name">primary</div></div>
			<div class="swatch"><div class="chipcolor" style="background: var(--color-accent)"></div><div class="name">accent</div></div>
			<div class="swatch"><div class="chipcolor" style="background: var(--color-surface-raised, var(--color-surface))"></div><div class="name">raised</div></div>
			<div class="swatch"><div class="chipcolor" style="background: var(--color-muted)"></div><div class="name">muted</div></div>
			<div class="swatch"><div class="chipcolor" style="background: var(--color-danger)"></div><div class="name">danger</div></div>
		</div>
	</section>

	<section>
		<div class="section-head"><h2>Recent work</h2><span class="muted">Table density and numerals</span></div>
		<table>
			<thead><tr><th>Project</th><th>Status</th><th>Updated</th><th style="text-align:right">Score</th></tr></thead>
			<tbody>
${ROWS.map(([project, status, updated, score]) => {
	const cls = status === "Blocked" ? "badge warn" : status === "Shipped" ? "badge" : "badge mute";
	return `				<tr><td>${escapeHtml(project)}</td><td><span class="${cls}">${escapeHtml(status)}</span></td><td class="muted">${escapeHtml(updated)}</td><td class="num">${escapeHtml(score)}</td></tr>`;
}).join("\n")}
			</tbody>
		</table>
	</section>

	<section>
		<div class="section-head"><h2>Stay in the loop</h2><span class="muted">Inputs and actions</span></div>
		<div class="formrow">
			<div class="field">you@company.com</div>
			<span class="btn btn-primary">Subscribe</span>
			<span class="btn btn-ghost">Read the docs</span>
		</div>
		<p class="muted" style="margin-top:14px; font-size:13px">No spam. One changelog digest per month.</p>
	</section>
</div>

<footer>
	<div class="wrap">${escapeHtml(name)} design system — generated demo for Vetta UI Design.</div>
</footer>
</body>
</html>
`;
}

function main() {
	const checkOnly = process.argv.includes("--check");
	const slugs = readdirSync(TEMPLATES_DIR, { withFileTypes: true })
		.filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
		.map((entry) => entry.name)
		.filter((slug) => !SKIP.has(slug))
		.sort();

	const stale = [];
	let written = 0;
	for (const slug of slugs) {
		const metaPath = join(TEMPLATES_DIR, slug, "meta.json");
		if (!existsSync(metaPath)) continue;
		const meta = JSON.parse(readFileSync(metaPath, "utf8"));
		const themeCss = readFileSync(join(TEMPLATES_DIR, slug, "theme.css"), "utf8");
		const html = buildDemo(slug, meta.name, meta.blurb, themeCss);
		const target = join(TEMPLATES_DIR, slug, "demo.html");
		const current = existsSync(target) ? readFileSync(target, "utf8") : "";
		if (current === html) continue;
		if (checkOnly) {
			stale.push(slug);
			continue;
		}
		writeFileSync(target, html);
		written++;
	}

	if (checkOnly) {
		if (stale.length > 0) {
			console.error(`demo.html 与生成器不同步：${stale.join("、")}\n运行 node scripts/build-demos.mjs 后提交。`);
			process.exit(1);
		}
		console.log(`demo 校验通过：${slugs.length} 个条目`);
		return;
	}
	console.log(`已生成 ${written} 份 demo.html（跳过手写：${[...SKIP].join("、")}）`);
}

main();
