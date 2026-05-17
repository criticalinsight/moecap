# Moe Capital

**The world's simplest financial research hub.**

Moe Capital is a unified financial analysis platform built for research, education, and market insights. It features a curated collection of investing resources, fund letters, and deep-dive analysis.

## 🌐 Live Site

Visit: [moecapital.com](https://moecapital.com)

## 📊 Features

- **NSE Dashboard**: Kenya Securities Exchange financials and ROIC analysis at [/nse](https://moecapital.com/nse).
- **13F Fund Letters**: Consolidated analysis and insights from top asset managers.
- **Dynamic Asset Library**: Automated discovery of PDFs and EPUBs from the `lib/` and `fx/` directories.
- **Schematic Aesthetic**: High-contrast, monospace-focused design with adaptive **Light/Dark Mode** support.
- **Categorized Research**: Content is automatically grouped by category with functional, anchor-based navigation.
- **100-Bagger Analysis**: Interactive dashboard for identifying high-growth stock opportunities.

## 🏗️ Project Structure

```text
/
├── src/
│   ├── content.ts    # Core site content & watchlists metadata
│   ├── view.ts       # Main dashboard HTML template & layout compiler
│   ├── nse.ts        # Dynamic NSE Terminal HTML compiler
│   ├── us-stocks.ts  # Compile-time US stock ideas database parser
│   └── assets.ts     # Directory scanner & asset manifest generator
├── scripts/
│   └── build-site.ts # Unified build pipeline controller
├── public/           # Production ready static assets (HTML, JSON, lib, fx)
├── lib/              # Premium investing literature (EPUB/PDF)
├── fx/               # Trading strategies & technical reports
├── data/
│   └── nse-data.json # Offline Securities Exchange financials database
└── tests/            # TDD integration & validation test suites
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.1.0+)

### Setup

```bash
# Install dependencies
bun install
```

### Development & Build

```bash
# Compile and build the unified static site
bun run build

# Run core unit and integration tests (19 tests)
bun test

# Run Playwright E2E browser details click verification
bunx playwright install chromium
bun run /Users/moe/.gemini/antigravity/brain/bb3c5852-964f-47b9-b717-9506102c0f9f/scratch/playwright_test.ts
```

### Deployment

The site is deployed to **Cloudflare Pages** using the Bun runtime.

```bash
# Deploy to production (requires environment variables)
bun run deploy
```

## �️ Tech Stack

- **Runtime**: Bun
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Schematic Aesthetic, adaptive Light/Dark mode)
- **Deployment**: Cloudflare Pages
- **Testing**: Bun Test

## 🤝 Contributing

This is a personal research project. For questions or collaboration inquiries, please open an issue or reach out to the maintainer.

## 📄 License

See [LICENSE](LICENSE) file for details.

---
**Built with ❤️ for financial clarity and deep research.**
