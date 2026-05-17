# Product Requirements Document (PRD) - Moe Capital Refactoring & Expansion

## 1. Overview

Moe Capital is a fast, high-performance financial intelligence platform. Initially built as a simple static link directory, it has evolved into a unified compiler-driven static engine serving:
- Dynamic fund letter assets.
- An automated US Stock watchlist de-duplicating over 1,190 stock ideas.
- A fully integrated, real-time Nairobi Securities Exchange (NSE) ROIC Terminal.

## 2. Objectives

- **Content Restoration**: Recover the full Alice Schroeder interview (Parts 1-6), 13F Letters, and over 50 Kevin G. compilation resources.
- **US Stocks Engine**: Transition from a slow in-memory loader to a compile-time parsed JSON aggregator. Eliminate bundle bloat by generating lazy native `<details>` accordions and instant DOM hiding filters.
- **Nairobi Securities Exchange (NSE) ROIC Terminal**: Refactor the separate Vinxi/Nitro edge-bound application into a unified static template subpage hosted entirely on the primary origin.
- **Dynamic Price Synchronization**: Sync fluctuating securities prices in real-time in the browser using CORS proxies and non-blocking background streaming.
- **Absolute client-side Resilience**: Protect the terminal workspace rendering against network losses, absolute path issues, and database schemas anomalies.

## 3. Core Features

- **Unified Build Compiler**: A clean, single-command SSG pipeline built in Bun that generates zero-dependency HTML files instantly (<10ms compile time).
- **US Stock Aggregator**: De-duplicates 1,382 Telegram stock alerts into 1,191 unique tickers, sorted alphabetically and grouped by rating. Filters tickers at a locked 60fps in the browser.
- **Bloomberg-Style Dual-Pane NSE Console**: Immersive, multi-tab console displaying financial statements, regulatory announcements, and key performance ratios.
- **In-Browser Financial Ratios Computations**: Dynamically computes Invested Capital, NOPAT, ROE, and ROIC in the browser to resolve data gaps.
- **Resilient Fallback Routing & Guards**: Employs progressive directory fetch chains and numerical type-guards to isolate runtime rendering errors.

## 4. Success Criteria

- [x] Full Alice Schroeder interview (Parts 1-6) restored.
- [x] All 50+ compilation links properly categorized and responsive.
- [x] US Stock ideas parsed, deduplicated, rating-sorted, and search-filtered cleanly.
- [x] Decoupled standalone workers, proxies, and bindings by moving `/nse` to a native subpage directory.
- [x] Real-time prices synchronized in-browser with zero origin server overhead.
- [x] Dynamic workspace selection certified error-resilient via custom type guards.
- [x] 100% test passing rate across core tests and Playwright E2E browser tests.
- [x] Successful deployment to Cloudflare Pages edge under `moecap` project.
