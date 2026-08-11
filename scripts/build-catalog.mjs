#!/usr/bin/env node
/**
 * 由 templates/<slug>/meta.json 聚合出 .vetta/design-templates.json。
 *
 * 目录是唯一事实源，顶层清单是生成物——加一个条目只建一个目录，不改公共文件，
 * 这样多个 PR（尤其是自动开的）不会在同一个 JSON 上打架。
 *
 *   node scripts/build-catalog.mjs          写入清单
 *   node scripts/build-catalog.mjs --check  只校验，与磁盘不一致时退出码 1
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const TEMPLATES_DIR = join(ROOT, "templates");
const CATALOG_PATH = join(ROOT, ".vetta", "design-templates.json");

const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,63}$/;
const VERSION_RE = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const KINDS = new Set(["design-system", "reference", "remixable"]);
const VIBES = new Set(["light", "dark"]);

/** theme.css 必须提供的基础 color token：只换值，不改名，不删除。 */
const REQUIRED_TOKENS = [
	"--color-primary",
	"--color-primary-foreground",
	"--color-surface",
	"--color-surface-foreground",
	"--color-muted",
	"--color-accent",
	"--color-danger",
];

/** 条目里可以出现的资产键 → 是否必须存在（按 kind 判定见 validateEntry）。 */
const ASSET_KEYS = ["spec", "theme", "preview", "markup", "package"];

const errors = [];
const fail = (slug, message) => errors.push(`${slug}: ${message}`);

function isPlainObject(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}

function readMeta(slug) {
	const metaPath = join(TEMPLATES_DIR, slug, "meta.json");
	if (!existsSync(metaPath)) {
		fail(slug, "缺少 meta.json");
		return null;
	}
	try {
		const parsed = JSON.parse(readFileSync(metaPath, "utf8"));
		if (!isPlainObject(parsed)) {
			fail(slug, "meta.json 顶层必须是对象");
			return null;
		}
		return parsed;
	} catch (error) {
		fail(slug, `meta.json 不是合法 JSON：${error.message}`);
		return null;
	}
}

function validateAssets(slug, meta) {
	const assets = meta.assets;
	if (!isPlainObject(assets)) {
		fail(slug, "assets 必须是对象");
		return null;
	}
	const resolved = {};
	for (const [key, value] of Object.entries(assets)) {
		if (!ASSET_KEYS.includes(key)) {
			fail(slug, `assets 出现未知键 "${key}"（允许：${ASSET_KEYS.join(" / ")}）`);
			continue;
		}
		if (value === null) continue;
		if (typeof value !== "string" || value.length === 0) {
			fail(slug, `assets.${key} 必须是非空字符串或 null`);
			continue;
		}
		if (value.startsWith("/") || value.includes("..") || value.includes("\\")) {
			fail(slug, `assets.${key} 必须是目录内的相对路径`);
			continue;
		}
		const filePath = join(TEMPLATES_DIR, slug, value);
		if (!existsSync(filePath) || !statSync(filePath).isFile()) {
			fail(slug, `assets.${key} 指向的文件不存在：${value}`);
			continue;
		}
		resolved[key] = `templates/${slug}/${value}`;
	}
	return resolved;
}

/**
 * 文本资产直接内联进清单：全部条目加起来才几十 KB，客户端一次请求就能拿到完整内容，
 * 省掉「先拉索引再逐条拉正文」的第二轮请求和一半的来源校验。
 * 二进制资产（package/preview）永远只给路径。
 */
const INLINE_ASSET_KEYS = ["spec", "theme", "markup"];

function inlineContent(slug, meta) {
	const content = {};
	for (const key of INLINE_ASSET_KEYS) {
		const rel = meta.assets?.[key];
		if (typeof rel !== "string") continue;
		const filePath = join(TEMPLATES_DIR, slug, rel);
		if (!existsSync(filePath)) continue;
		content[key] = readFileSync(filePath, "utf8");
	}
	return content;
}

function validateSpec(slug, meta) {
	if (typeof meta.assets?.spec !== "string") return;
	const specPath = join(TEMPLATES_DIR, slug, meta.assets.spec);
	if (!existsSync(specPath)) return;
	const text = readFileSync(specPath, "utf8");
	if (text.trim().length === 0) {
		fail(slug, "spec 文件为空");
		return;
	}
	// frontmatter 由客户端落盘时拼接（system/name/source/license），条目里再带一份会写出两段。
	if (text.startsWith("---\n")) {
		fail(slug, "spec 不能自带 YAML frontmatter，元数据只放 meta.json");
	}
}

function validateTheme(slug, meta) {
	if (typeof meta.assets?.theme !== "string") return;
	const themePath = join(TEMPLATES_DIR, slug, meta.assets.theme);
	if (!existsSync(themePath)) return;
	const css = readFileSync(themePath, "utf8");
	if (!css.includes("@theme")) {
		fail(slug, "theme.css 缺少 @theme 块");
	}
	const missing = REQUIRED_TOKENS.filter((token) => !css.includes(`${token}:`));
	if (missing.length > 0) {
		fail(slug, `theme.css 缺少基础 token：${missing.join("、")}`);
	}
}

function validateI18nText(slug, field, value) {
	if (!isPlainObject(value)) {
		fail(slug, `${field} 必须是 { en, zh } 对象`);
		return;
	}
	for (const locale of ["en", "zh"]) {
		if (typeof value[locale] !== "string" || value[locale].trim().length === 0) {
			fail(slug, `${field}.${locale} 必须是非空字符串`);
		}
	}
}

function validateEntry(slug, meta) {
	if (meta.schemaVersion !== 1) fail(slug, "schemaVersion 必须是 1");
	if (meta.slug !== slug) fail(slug, `meta.slug (${meta.slug}) 与目录名不一致`);
	if (!SLUG_RE.test(slug)) fail(slug, "目录名不符合 slug 格式 ^[a-z0-9][a-z0-9-]{0,63}$");
	if (!KINDS.has(meta.kind)) fail(slug, `kind 必须是 ${[...KINDS].join(" / ")}`);
	if (typeof meta.name !== "string" || meta.name.trim().length === 0) fail(slug, "name 必须是非空字符串");
	if (typeof meta.version !== "string" || !VERSION_RE.test(meta.version)) fail(slug, "version 格式非法");
	if (!Number.isInteger(meta.order) || meta.order < 0) fail(slug, "order 必须是非负整数（展示顺序，建议留 10 的间隔）");
	if (typeof meta.category !== "string" || meta.category.trim().length === 0) fail(slug, "category 必须是非空字符串");
	if (!VIBES.has(meta.vibe)) fail(slug, "vibe 必须是 light 或 dark");
	if (!Array.isArray(meta.tags) || meta.tags.some((tag) => typeof tag !== "string")) {
		fail(slug, "tags 必须是字符串数组");
	}
	if (typeof meta.blurb !== "string" || meta.blurb.trim().length === 0) {
		fail(slug, "blurb 必须是非空字符串（给模型看的英文风格摘要）");
	}
	validateI18nText(slug, "tagline", meta.tagline);
	if (typeof meta.license !== "string" || meta.license.trim().length === 0) fail(slug, "license 必须填写");
	if (!isPlainObject(meta.origin) || typeof meta.origin.type !== "string") {
		fail(slug, "origin.type 必须填写（curated / collected）");
	}
	if (typeof meta.collectedAt !== "string" || !DATE_RE.test(meta.collectedAt)) {
		fail(slug, "collectedAt 必须是 YYYY-MM-DD");
	}

	const assets = validateAssets(slug, meta);
	if (meta.kind === "design-system") {
		if (typeof meta.assets?.spec !== "string") fail(slug, "design-system 必须有 assets.spec");
		if (typeof meta.assets?.theme !== "string") fail(slug, "design-system 必须有 assets.theme");
	}
	if (meta.kind === "remixable" && typeof meta.assets?.package !== "string") {
		fail(slug, "remixable 必须有 assets.package");
	}
	if (meta.kind === "reference" && typeof meta.assets?.spec !== "string") {
		fail(slug, "reference 必须有 assets.spec");
	}
	validateSpec(slug, meta);
	validateTheme(slug, meta);

	if (assets === null) return null;
	return {
		kind: meta.kind,
		slug: meta.slug,
		name: meta.name,
		version: meta.version,
		order: meta.order,
		category: meta.category,
		vibe: meta.vibe,
		tags: meta.tags,
		blurb: meta.blurb,
		tagline: meta.tagline,
		license: meta.license,
		origin: meta.origin,
		collectedAt: meta.collectedAt,
		assets,
		content: inlineContent(slug, meta),
	};
}

function listSlugs() {
	if (!existsSync(TEMPLATES_DIR)) return [];
	return readdirSync(TEMPLATES_DIR, { withFileTypes: true })
		.filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
		.map((entry) => entry.name)
		.sort();
}

function readCurrentCatalog() {
	if (!existsSync(CATALOG_PATH)) return null;
	try {
		return JSON.parse(readFileSync(CATALOG_PATH, "utf8"));
	} catch {
		return null;
	}
}

function buildCatalog(entries, previous) {
	const body = {
		schemaVersion: 1,
		name: "vetta-design-templates",
		displayName: "Vetta Design Templates",
		repository: "https://github.com/openvetta/vetta-design-templates",
		minPluginVersion: "0.4.0",
		templates: entries,
	};
	// catalogVersion 只在内容真的变了才前进，避免空转 commit 每次都改版本号。
	const previousBody = previous ? { ...previous } : null;
	if (previousBody) delete previousBody.catalogVersion;
	const unchanged = previousBody !== null && JSON.stringify(previousBody) === JSON.stringify(body);
	const catalogVersion = unchanged ? previous.catalogVersion : nextCatalogVersion(previous?.catalogVersion);
	return { ...body, catalogVersion };
}

function nextCatalogVersion(current) {
	const today = new Date().toISOString().slice(0, 10).replaceAll("-", ".");
	if (typeof current === "string" && current.startsWith(`${today}-`)) {
		const serial = Number.parseInt(current.slice(today.length + 1), 10);
		if (Number.isFinite(serial)) return `${today}-${serial + 1}`;
	}
	return `${today}-1`;
}

function main() {
	const checkOnly = process.argv.includes("--check");
	const slugs = listSlugs();
	if (slugs.length === 0) {
		console.error("templates/ 下没有任何条目");
		process.exit(1);
	}

	const entries = [];
	for (const slug of slugs) {
		const meta = readMeta(slug);
		if (!meta) continue;
		const entry = validateEntry(slug, meta);
		if (entry) entries.push(entry);
	}

	// 清单顺序就是客户端的展示顺序：按 order 排，风格差异交错由 order 表达，不是字母序。
	entries.sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
	const seenOrder = new Map();
	for (const entry of entries) {
		const owner = seenOrder.get(entry.order);
		if (owner) fail(entry.slug, `order ${entry.order} 与 ${owner} 重复`);
		else seenOrder.set(entry.order, entry.slug);
	}

	if (errors.length > 0) {
		console.error(`校验未通过（${errors.length} 项）：`);
		for (const message of errors) console.error(`  - ${message}`);
		process.exit(1);
	}

	const previous = readCurrentCatalog();
	const catalog = buildCatalog(entries, previous);
	const serialized = `${JSON.stringify(catalog, null, "\t")}\n`;

	if (checkOnly) {
		const onDisk = existsSync(CATALOG_PATH) ? readFileSync(CATALOG_PATH, "utf8") : "";
		if (onDisk !== serialized) {
			console.error("`.vetta/design-templates.json` 与 templates/ 不同步，请运行 `node scripts/build-catalog.mjs` 后提交。");
			process.exit(1);
		}
		console.log(`catalog 校验通过：${entries.length} 个条目`);
		return;
	}

	writeFileSync(CATALOG_PATH, serialized);
	console.log(`已写入 ${CATALOG_PATH}：${entries.length} 个条目，catalogVersion=${catalog.catalogVersion}`);
}

main();
