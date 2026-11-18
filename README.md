# Bharatnomy — Format Exploration Pack

A React 18 + TypeScript + Tailwind CSS 3 prototype containing **three structurally distinct light-theme website formats** for Bharatnomy. Use the floating **FORMAT STUDY** selector to switch between them in the same running app.

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal. For a production build:

```bash
npm run build
npm run preview
```

## The three formats

### 01 — Field Grid
- Fixed left research sidebar; no top-tab navigation.
- Full-width editorial headline and a wide spatial/cartographic field canvas.
- Fine technical grid, lichen/sage palette, layered contours and slow signal motion.
- Five research lenses arranged as a modular five-column field index.
- Typography: Syne + DM Sans + IBM Plex Mono.

### 02 — Signal Observatory
- Navigation moved to a narrow vertical rail on the right edge.
- Wide centered observatory composition with a 3D orbital signal instrument, coordinates and floating nodes.
- Ice-blue / cobalt / soft vermilion palette and grid-plane movement.
- Typography: Space Grotesk + DM Sans + IBM Plex Mono.

### 03 — Research Ledger
- Main navigation moved to a fixed bottom dock.
- Large typographic opening, numbered folio index and editorial research rows.
- Full-width illustrated landscape instead of a split text-and-image hero.
- Warm paper / terracotta / muted olive palette and printed-paper dot grid.
- Typography: Fraunces + DM Sans + IBM Plex Mono.

## Shared product functionality

- Research, Datasets, Data Observatory, About, Standards and Careers sections.
- The original research positioning and institutional copy from the supplied Bharatnomy HTML.
- Two interactive dataset demonstrators: District Heat Readiness and Renewable Capacity Snapshot.
- Switch between Map, Chart and Table views; select an indicator and district.
- District selection stays connected across the map, chart and table views.
- Download CSV and README files for both sample datasets.
- Replaceable text/monogram brand mark.
- Responsive mobile navigation and reduced-motion support.

## Content provenance

Institutional positioning and website copy are adapted from the supplied `bharatnomy.html`: mission, five research lenses, research status, Maharashtra Heat Action Plans project and its milestones, publication formats, open research questions, topic-selection criteria, dataset development and release standards, state-profile plan, audience, team, editorial standards, non-negotiables, corrections, funding transparency and careers copy.

## Data and map disclaimer

Both CSV datasets contain **synthetic demonstration values only**. They are not official statistics, measurements, Bharatnomy findings or evidence. The map is a schematic district locator for interaction testing, not an accurate Maharashtra boundary or GIS layer. Replace the sample records and map geometry with verified, documented data before public release.

## Technical notes

- React 18, TypeScript, Tailwind CSS 3, Vite, Framer Motion and Lucide React.
- No backend or API key is required.
- CSV and README assets are served locally from `public/data`.
- Custom SVG artwork is used for the hero visuals; motion uses Framer Motion and CSS keyframes.
- `prefers-reduced-motion` is respected.
- The Format Study selector is only for internal review and should be removed from the final public site after a format is selected.
