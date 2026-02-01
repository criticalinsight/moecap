# Product Requirements Document (PRD) - Moe Capital Content Restoration

## 1. Overview

The goal of this project was to restore missing and deleted content from the Moe Capital website after an accidental truncation and deletion of key directories. The restoration also included a UI refinement to improve the accessibility of "Special Situations" content.

## 2. Objectives

- **Content Restoration**: Recover the full Alice Schroeder interview (Parts 1-6) and the "13F Letters" section.
- **Link Restoration**: Recover over 50 "Kevin G. Compilations" links organized by industry.
- **System Restoration**: Recover the `wealth_manager` directory and ensure the automated build pipeline (Bun + TypeScript) functions correctly.
- **UI Refinement**: Group individual company cards (Noah, NuBank) into a single "Special Situations" accordion for better focus.

## 3. Features

- **Unified Site Content**: Dynamic site generation from a centralized `src/content.ts` file.
- **Asset Management**: Automatic discovery and mirroring of PDF and EPUB resources from the `lib/` and `fx/` directories.
- **Responsive Design**: Dark-mode-first aesthetic with optimized layouts for readability and research.

## 4. Success Criteria

- [x] Full interview text available on the site.
- [x] 13F and Compilation links functional.
- [x] `wealth_manager` sub-project restored from history.
- [x] Successful deployment to Cloudflare Pages.
