# 100-Bagger Analysis Tool

A comprehensive dashboard for analyzing stock performance, identifying potential "100-baggers" (stocks that return 100x), and tracking market trends.

## Features

*   **Stock Analysis**: Detailed 13-point investment framework analysis for various tickers.
*   **Interactive Dashboard**: Visualizations of stock price history, drawdowns, and return multiples.
*   **News Integration**: Real-time news updates and "Global Macro & News" section.
*   **Telegram Scraper**: Tools to scrape and analyze market sentiment from Telegram channels.

## Project Structure

*   `web/`: React-based frontend application.
*   `bagger_analysis.py`: Python script for backend analysis (if applicable).
*   `strategies/`: Investment strategy definitions.

## Getting Started

### Prerequisites

*   Node.js (v18+)
*   Python (v3.10+)

### Installation

1.  Navigate to the `web` directory:
    ```bash
    cd web
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Dashboard

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:5173`.

## Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist` directory.
