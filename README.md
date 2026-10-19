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
