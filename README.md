# Moe Capital

**The world's simplest financial research hub.**

Moe Capital is a unified financial analysis platform built for research, education, and market insights. It features a curated collection of investing resources, fund letters, and deep-dive analysis.

## 🌐 Live Site

Visit: [moecapital.com](https://moecapital.com)

## 📊 Features

- **Alice Schroeder Interview**: Full transcripts of the definitive "Snowball" author interview (Parts 1-6).
- **13F Fund Letters**: Consolidated analysis and insights from top asset managers.
- **Kevin G. Compilations**: Over 50 curated research collections from legendary venture and value investors.
- **Dynamic Asset Library**: Automated discovery of PDFs and EPUBs from the `lib/` and `fx/` directories.
- **100-Bagger Analysis**: Interactive dashboard for identifying high-growth stock opportunities.

## 🏗️ Project Structure

```text
/
├── src/
│   ├── content.ts   # Core site content & link database
│   ├── view.ts      # HTML Template & rendering engine
│   └── assets.ts    # Asset Discovery & Manifest Generation
├── scripts/
│   └── build-site.ts # Main build entry point
├── public/          # Build output (Static files & Assets)
├── 100/             # 100-Bagger interactive app
├── lib/             # Curated investing books (EPUB/PDF)
├── fx/              # Trading & Technical analysis resources
└── tests/           # Vitest-based verification suite
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
# Build the unified site
bun run build

# Run tests
bun test
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
- **Styling**: Vanilla CSS (Dark mode optimized)
- **Deployment**: Cloudflare Pages
- **Testing**: Bun Test

## 🤝 Contributing

This is a personal research project. For questions or collaboration inquiries, please open an issue or reach out to the maintainer.

## 📄 License

See [LICENSE](LICENSE) file for details.

---
**Built with ❤️ for financial clarity and deep research.**
