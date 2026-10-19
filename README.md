# Locust Phenology Atlas · Қазақстан · Kazakhstan · Казахстан

Interactive historical calendar of non-swarming grasshopper pests in Kazakhstan, based on 2003–2025 phytosanitary monitoring records. Project IRN AP22784639.

Languages: **Қазақша → English → Русский**. Kazakh is the default; the selected language is retained locally and in shareable URLs.

The atlas provides a district map, annual dynamics, spatial groups, agroclimatic summaries, short interpretation notes, district histories and CSV/SVG export. It includes 218 current administrative units, of which 196 have verified historical matches. No phenological dates are assigned to the remaining 22 units.

This repository contains the static website and the display data required by it. It does not contain the research workspace or unpublished analysis files. No external libraries, API keys, server process or CDN are required.

## GitHub Pages

Publish from the **main** branch, **/ (root)** folder in Settings → Pages. All paths are relative, so the site supports project Pages URLs.

For a local preview: `python -m http.server 8000`. Open `http://localhost:8000/`.

Validation: `npm test` (Node.js 18+).

The calendar is a historical analytical reference. It does not forecast a new season or prescribe treatments. Verify current timing, larval instar and abundance in the field.

## Repository and branch

The production web atlas is maintained in **sc-katu/locust-phenology-web**, branch **main**.

Live site: https://sc-katu.github.io/locust-phenology-web/

The `web-atlas` branch in the separate research repository is an earlier implementation. Use this repository and its `main` branch for current web development.

## Mobile and responsive layout

Responsive CSS is implemented for desktop, tablet and phone screens:

- Below 760 px, navigation collapses into a hamburger menu.
- On narrower screens, the map and district card stack vertically.
- Summary indicators use two columns on phones; filters and researcher links wrap to fit the screen.
- The map supports dragging, touch interaction and explicit zoom buttons.
- Wide charts and tables scroll horizontally to keep labels readable.
- The supplementary methods sidebar is hidden on phones; the main methods content remains available.

The code has responsive breakpoints at 1250, 1050 and 760 px. The narrow-screen layout is implemented; a comprehensive test on physical Android and iOS devices has not yet been performed.

## Source files

| Path | Purpose |
| --- | --- |
| `index.html` | Page structure and static asset references |
| `assets/app.js` | Map interactions, filters, district profiles, charts and exports |
| `assets/core.js` | Calendar formatting, filtering, quartiles and CSV helpers |
| `assets/i18n.js` | Kazakh, English and Russian interface translations |
| `assets/styles.css` | Appearance, responsive layout and print styles |
| `data/atlas.json` | Display data used by the application |
| `data/place_names_kk.json` | Kazakh administrative labels keyed by stable identifiers |
| `data/*.geojson` | District and regional geometry |
| `data/provenance.json` | Coverage summary and data checksums |
| `tests/` | Data, calendar, filtering, export and localization checks |

## Working on the atlas

```bash
git clone https://github.com/sc-katu/locust-phenology-web.git
cd locust-phenology-web
python3 -m http.server 8000
```

Open http://localhost:8000/ in a browser. Opening `index.html` directly through `file://` does not support the JSON loading used by the app.

No dependency installation or frontend build step is required. With Node.js 18+ installed, run `npm test` before publishing changes that affect application logic or data.

Edit interface wording in `assets/i18n.js`; preserve the order **Қазақша → English → Русский**. Keep numeric data, historical linkage status and administrative identifiers unchanged when editing labels.

Static assets use version query parameters to prevent outdated browser caches. When changing JavaScript, translations or styles, update the release parameter consistently in `index.html`, the module imports in `assets/app.js` and `assets/core.js`, and matching imports in `tests/`. The application and core helpers must import the same instance of the localization module.

Push reviewed changes to `main`. GitHub Pages automatically rebuilds from the repository root; check the **pages build and deployment** workflow in Actions. After deployment, check all three languages, the mobile menu, district selection and CSV export.
