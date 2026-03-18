# Architecture Document - Moe Capital Unified Site

## 1. Tech Stack

- **Runtimes**: [Bun](https://bun.sh)
- **Language**: TypeScript
- **Rendering**: Custom Static Site Generator (SSG) in `src/view.ts`
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 2. Directory Structure

```text
/
├── public/          # Final build output (HTML, assets)
├── src/
│   ├── assets.ts    # Asset Discovery & Manifest Generation
│   ├── content.ts   # Core Site Content (HTML, Metrics, Links)
│   └── view.ts      # HTML Template & Rendering Logic
├── scripts/
│   └── build-site.ts # Main Build Controller
├── lib/             # Books & Investing Resources (EPUB/PDF)
└── fx/              # Trading & Technical Analysis Resources
```

## 3. Build Process

The build follows a 4-step unified pipeline:

1. **Preparation**: Cleans the `public/` directory.
2. **Asset Discovery**: Scans `lib/` and `fx/` to generate an asset manifest.
3. **Merging**: Combines asset manifest with static content from `src/content.ts`.
4. **Rendering**: Injects all nodes into the HTML template and writes to `public/index.html`.
5. **Mirroring**: Copies raw assets into the `public/` folder for serving.

## 4. Content Schema

Content is managed as `ContentNode` objects supporting:

- `ARTICLE`: Full HTML content with optional metrics.
- `ASSET_LIST`: Dynamic lists generated from filesystem scan.
- `LINK_LIST`: Curated lists of external resources.
- `METRIC_CARD`: Tabular data (PE ratios, Price Targets).

## 5. UI & Aesthetic (Schematic)

The site follows a **Schematic** and **Anemone Zola** aesthetic:

- **Typography**: Strictly monospace (`JetBrains Mono`, `Courier New`) for a technical, de-complexed feel.
- **Color System**: Adaptive CSS variables controlled via `@media (prefers-color-scheme: light)`.
- **Navigation**: Dynamically generated based on content categories found in `src/content.ts` and asset manifests.
- **Layout**: Uses a single-page anchor system. Each category is rendered as a `<section>` with an ID mapping to the navigation header.
- **Components**: Custom-styled `details`/`summary` elements for content hierarchy, featuring custom chevron indicators (`>>`).
