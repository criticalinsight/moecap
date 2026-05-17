# Architecture Document - Moe Capital Unified Site

## 1. Tech Stack

- **Development Runtime**: [Bun](https://bun.sh)
- **Language**: TypeScript
- **Compilation Engine**: Pure-function Layout Compiler (`src/view.ts` and `src/nse.ts`)
- **Hosting & Edge Delivery**: [Cloudflare Pages](https://pages.cloudflare.com/) (100% static origin served over CDN edge)
- **Quality Assurance**: Bun Test & Playwright headless browser E2E test suites

## 2. Directory Structure

```text
/
├── public/           # Unified build outputs directory (mirrored to edge CDN)
│   ├── index.html    # Core dashboard (Alice Schroeder, Compilations, US Watchlists)
│   ├── nse/
│   │   ├── index.html # Monospace NSE Bloomberg-style financial terminal subpage
│   │   └── nse-data.json # Mirror of the corporate financials database
│   ├── lib/          # Discoverable investing books
│   └── fx/           # Trading strategy reports
├── src/
│   ├── assets.ts     # Directory asset manifest discovery
│   ├── content.ts    # Main watchlists metadata & static site structure
│   ├── nse.ts        # Pure static NSE compiler & layout template engine
│   ├── us-stocks.ts  # Compile-time Telegram aggregator & de-duplicator
│   └── view.ts       # HTML dynamic layout compiler for the dashboard
├── scripts/
│   └── build-site.ts # Main SSG pipeline compiler orchestrator
├── data/
│   └── nse-data.json # Core corporate financials database
└── tests/            # Automated integration & verification tests
```

## 3. Build & Compile Pipeline

Running `bun run build` starts our unified multi-tier compilation pipeline:

```mermaid
graph TD
    A[build-site.ts] --> B[Clean public/]
    A --> C[Scan lib/ & fx/]
    C --> D[Generate assets manifest]
    A --> E[Parse us-stocks.json]
    E --> F[Deduplicate and sort US Stock ideas]
    A --> G[Compile src/view.ts]
    D & F --> G
    G --> H[Write public/index.html]
    A --> I[Compile src/nse.ts]
    I --> J[Write public/nse/index.html & nse-data.json]
    A --> K[Mirror filesystems lib/ & fx/ to public/]
```

1. **FileSystem Scan**: `src/assets.ts` scans physical files in `lib/` and `fx/` to dynamically verify asset links.
2. **Aggregation**: `src/us-stocks.ts` de-duplicates 1,382 Telegram stock messages, alphabetical-sorts them, and structures them.
3. **Dashboard Compilation**: `src/view.ts` compiles the main dashboard page using pure template functions.
4. **NSE Terminal Compilation**: `src/nse.ts` reads `/data/nse-data.json`, copies it as a static asset, compiles the Bloomberg-style workspace grid, and generates `public/nse/index.html`.

---

## 4. Runtime Architecture

The site runs with **zero runtime JavaScript frameworks** on the client, utilizing high-performance native browser mechanics:

### US Stocks filtering
- All 1,191 tickers are pre-rendered inside native HTML5 `<details>` lazy accordions.
- Instantaneous search is achieved via simple inline EventListeners that match query inputs to the accordion's `data-ticker` or `data-company` attributes, toggling `style.display = 'none'` at 60fps.

### NSE terminal Workspace
- **Async Caching & Fallback**: DOMContentLoaded fires a background progressive fallback fetch. It tries host-relative `/nse/nse-data.json` first, and falls back to relative `nse-data.json` if run locally or inside nested subfolders.
- **Bloomberg Pane Update**: Card clicks call the `selectStock(ticker)` function. It queries the local in-memory database cache, computes metrics, and formats tables using clean template strings in <1ms.
- **Live Sync**: A background CORS-proxied fetch retrieves live quotes from `afx.kwayisi.org` using high-speed, escaped regular expressions (`rowRegex`), merging updates onto local variables in real-time.
- **Type Safety**: All metrics formatting runs through type-guarded converters (`parseFloat`, `!isNaN`) to prevent unhandled TypeErrors and freeze-ups on incomplete data sets.

---

## 5. Design Aesthetic

Following an elegant **Monospace Brutalist & Anemone Zola** visual direction:
- **Color Palettes**: Sleek dark mode HSL configurations with HSL-balanced highlight states. Automatically reverts to light mode via `@media (prefers-color-scheme: light)`.
- **Typography**: Complete monospace layout (`JetBrains Mono`, `IBM Plex Mono`) to emphasize deep research and technical precision.
- **Micro-animations**: Smooth hover translations on accordions and borders.

---

## 6. End-to-End Test & Verification Gates

Quality is enforced through a strict double-layered verification system:
1. **Core Unit/Integration Tests (`tests/`)**: Executed via Bun Test to assert database integrity, SSG compilers outputs, and parsing deduplications.
2. **Headless Browser E2E Tests (`scratch/playwright_test.ts`)**: Boots a clean, local file server using `Bun.serve` on a clean port, launches a headless Playwright Chromium instance, navigates to `/nse`, clicks target stock cards, and asserts that the right-pane workspace, balance sheets, and key ratios tables render perfectly with zero browser exceptions or syntax warnings.
