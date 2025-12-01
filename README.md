# MoeCapital

**The world's simplest financial blog.**

A comprehensive financial analysis platform featuring market insights, stock analysis, and interactive tools.

## 🌐 Live Site

Visit: [moecapital.com](https://moecapital.com)

## 📊 Features

### Main Site
- Financial education resources
- Forex and investing book compilations
- Alice Schroeder interview transcripts
- 13F fund letters analysis
- Sticky navigation for easy browsing

### 100-Bagger Analysis App (`/100`)
- Interactive stock analysis dashboard
- Real-time data visualization with Recharts
- Sector analysis and comparison tools
- Political and market news integration
- Built with React 19 + Vite

## 🏗️ Project Structure

```
moecapital/
├── index.html              # Main landing page
├── 100/                    # 100-bagger analysis app
│   ├── web/               # React application
│   │   ├── src/
│   │   ├── public/
│   │   └── dist/          # Production build
│   ├── *.py               # Data analysis scripts
│   ├── eodhd/             # Market data fetchers
│   └── strategies/        # Trading strategies
├── fx/                     # Forex resources
├── fund/                   # Fund letters
├── alice/                  # Alice Schroeder content
├── compilations/           # Book compilations
└── wealth_manager/         # Wealth management clone

```

## 🚀 Deployment

### Vercel (Recommended)

The project is configured as a monorepo for Vercel deployment:

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

When deploying the root project to Vercel:
- Main site serves at `moecapital.com`
- 100-bagger app auto-builds and serves at `moecapital.com/100`

### Manual Deployment

Build the 100-bagger app locally:

```bash
# Run the build script
powershell -ExecutionPolicy Bypass -File deploy-100-bagger.ps1

# Upload the 100 folder to your web server
```

## 🛠️ Development

### Main Site
Static HTML/CSS site. Edit `index.html` directly.

Update navigation with:
```bash
powershell -ExecutionPolicy Bypass -File update_site.ps1
```

### 100-Bagger App

```bash
cd 100/web

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Tech Stack

### Main Site
- HTML5
- CSS3 (Dark theme with custom styling)
- Vanilla JavaScript
- Sticky navigation

### 100-Bagger App
- React 19.2.0
- Vite 7.2.6
- TailwindCSS 4.1.17
- Recharts 3.5.1
- Framer Motion 12.23.25
- Axios for API calls

### Data Analysis
- Python 3.x
- Pandas, NumPy
- EODHD API integration

## 🔧 Configuration Files

- [`vercel.json`](vercel.json) - Vercel deployment config with routing
- [`package.json`](package.json) - Root build orchestration
- [`.vercelignore`](.vercelignore) - Build optimization
- [`100/web/vite.config.js`](100/web/vite.config.js) - Vite config with `/100/` base path

## 📝 Scripts

- `update_site.ps1` - Update main site navigation and accordions
- `fix_nav.ps1` - Fix duplicate navigation issues
- `deploy-100-bagger.ps1` - Build and prepare 100-bagger app for deployment

## 🤝 Contributing

This is a personal project. For questions or collaboration inquiries, please open an issue.

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website:** [moecapital.com](https://moecapital.com)
- **100-Bagger App:** [moecapital.com/100](https://moecapital.com/100)
- **Repository:** [github.com/criticalinsight/moecap](https://github.com/criticalinsight/moecap)

---

**Built with ❤️ for financial education and analysis**
