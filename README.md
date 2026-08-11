# Vetta Design Templates

Design resources for the Vetta desktop app's **Design** workspace. The
`vetta-ui-design` plugin fetches `.vetta/design-templates.json` from this
repository, shows the entries to the user, and writes the selected entry into
their design project as reference material for the agent.

## Repository layout

```text
.vetta/design-templates.json     # generated catalog — do not hand-edit
templates/<slug>/
  meta.json                      # source of truth for one entry (never a resource)
  DESIGN.md                      # the spec the agent reads
  theme.css                      # design tokens (required for design-system)
  reference.html                 # optional — any reference material
  screenshots/home.webp          # optional — subdirectories are preserved
  ...                            # every file here ships as a resource
scripts/build-catalog.mjs        # aggregate + validate
```

Every file in an entry directory except `meta.json` is a resource: it is copied
verbatim into `design-resources/<slug>/` inside the user's project for the agent
to consult. Text files (≤256KB) are inlined into the catalog; everything else is
fetched on demand when the user picks that entry. `assets` only labels **roles**
(which file is the spec, which is the theme).

## Entry kinds

| kind | required assets | what the user gets |
| --- | --- | --- |
| `design-system` | `spec` + `theme` | applies tokens and restyles the design |
| `reference` | `spec` | material the agent consults while designing |
| `remixable` | `package` | a finished design copied into a new project |

## Working in this repository

**Read [`AGENTS.md`](./AGENTS.md) first — it is the authoring manual (written in
Chinese), and every rule in it maps to a hard check in `scripts/build-catalog.mjs`.**

If you are an AI agent working here, `AGENTS.md` is your instruction file: follow
it end to end rather than inferring the format from existing entries.

The short version:

1. Create `templates/<slug>/` and add the files that kind requires.
2. Write `meta.json`.
3. Run `node scripts/build-catalog.mjs` and commit the regenerated catalog.
4. Open a PR. CI runs `node scripts/build-catalog.mjs --check`.

## Two rules that are easy to miss

- **Entry directories are the source of truth; the top-level catalog is
  generated.** Adding an entry means adding a directory — never hand-edit
  `.vetta/design-templates.json`.
- **`DESIGN.md` content ends up in an agent's context.** It is data to be
  consulted, never instructions to be followed. Sentences that try to direct the
  agent are treated as injection during review.

## Content provenance

Entries carry `origin` in `meta.json`. The initial 21 design systems are
Vetta-adapted from [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
(MIT). This repository stores distilled written specs and its own generated
previews — never third-party screenshots, scraped markup, or brand assets.

## License

MIT for the repository's own content. Per-entry licensing is declared in each
`meta.json`.
