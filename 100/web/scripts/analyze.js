import fs from 'fs';
import path from 'path';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load environment variables from parent directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const API_TOKEN = process.env.EODHD_API_TOKEN;
const OUTPUT_FILE = path.resolve(__dirname, '../public/data.json');

// List of interesting tickers to analyze (Mix of baggers, potential baggers, and tech giants)
const TICKERS = [
  // Tech Giants
  'AAPL.US', 'MSFT.US', 'NVDA.US', 'AMZN.US', 'GOOGL.US', 'META.US', 'TSLA.US', 'NFLX.US', 'AMD.US',
  // Known 100-Baggers / High Performers
  'MNST.US', 'COST.US', 'WMT.US', 'KO.US', 'JNJ.US', 'BRK-B.US', 'HD.US', 'UNH.US', 'LLY.US',
  'MA.US', 'V.US', 'ORLY.US', 'AZO.US', 'ODFL.US', 'TMO.US', 'DHR.US', 'NKE.US', 'MCD.US',
  // Potential / Growth
  'PLTR.US', 'SNOW.US', 'CRWD.US', 'DDOG.US', 'NET.US', 'SHOP.US', 'SE.US', 'MELI.US',
  'UBER.US', 'ADBE.US', 'ORCL.US', 'MSTR.US',
  // Fallen Angels (High peak, low now)
  'PTON.US', 'ZM.US', 'DOCU.US', 'PYPL.US', 'SQ.US', 'ROKU.US', 'TDOC.US'
];

const SECTORS = {
  'AAPL': 'Technology', 'MSFT': 'Technology', 'NVDA': 'Technology', 'AMZN': 'Consumer Cyclical',
  'GOOGL': 'Communication Services', 'META': 'Communication Services', 'TSLA': 'Consumer Cyclical',
  'NFLX': 'Communication Services', 'AMD': 'Technology',
  'MNST': 'Consumer Defensive', 'COST': 'Consumer Defensive', 'WMT': 'Consumer Defensive',
  'KO': 'Consumer Defensive', 'JNJ': 'Healthcare', 'BRK-B': 'Financial Services',
  'HD': 'Consumer Cyclical', 'UNH': 'Healthcare', 'LLY': 'Healthcare',
  'MA': 'Financial Services', 'V': 'Financial Services', 'ORLY': 'Consumer Cyclical',
  'AZO': 'Consumer Cyclical', 'ODFL': 'Industrials', 'TMO': 'Healthcare',
  'DHR': 'Healthcare', 'NKE': 'Consumer Cyclical', 'MCD': 'Consumer Cyclical',
  'PLTR': 'Technology', 'SNOW': 'Technology', 'CRWD': 'Technology',
  'DDOG': 'Technology', 'NET': 'Technology', 'SHOP': 'Technology',
  'SE': 'Consumer Cyclical', 'MELI': 'Consumer Cyclical',
  'UBER': 'Consumer Cyclical', 'ADBE': 'Technology', 'ORCL': 'Technology', 'MSTR': 'Technology',
  'PTON': 'Consumer Cyclical', 'ZM': 'Technology', 'DOCU': 'Technology',
  'PYPL': 'Financial Services', 'SQ': 'Financial Services', 'ROKU': 'Communication Services',
  'TDOC': 'Healthcare'
};

async function fetchHistory(ticker) {
  try {
    console.log(`Fetching data for ${ticker}...`);
    // Fetch full history
    const url = `https://eodhd.com/api/eod/${ticker}?api_token=${API_TOKEN}&fmt=json&period=d&order=a`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${ticker}:`, error.message);
    return null;
  }
}

function calculateMetrics(ticker, data) {
  if (!data || data.length === 0) return null;

  // Sort by date just in case
  data.sort((a, b) => new Date(a.date) - new Date(b.date));

  const startPrice = data[0].adjusted_close;
  const currentPrice = data[data.length - 1].adjusted_close;
  const startDate = data[0].date;
  const currentDate = data[data.length - 1].date;

  if (startPrice <= 0) return null;

  const totalReturn = (currentPrice - startPrice) / startPrice;
  const returnMultiple = currentPrice / startPrice;

  // Calculate CAGR
  const days = (new Date(currentDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
  const years = days / 365.25;
  const cagr = Math.pow(returnMultiple, 1 / years) - 1;

  // Calculate Max Drawdown
  let maxPeak = -Infinity;
  let maxDrawdown = 0;
  let peakDate = '';
  let drawdownDate = '';

  // Calculate Milestones
  const milestones = [];
  const levels = [10, 50, 100, 500, 1000];
  let nextLevelIdx = 0;

  const timeSeries = data.map(day => {
    const price = day.adjusted_close;
    const multiple = price / startPrice;

    // Drawdown
    if (price > maxPeak) {
      maxPeak = price;
      peakDate = day.date;
    }
    const drawdown = (maxPeak - price) / maxPeak;
    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown;
      drawdownDate = day.date;
    }

    // Milestones
    if (nextLevelIdx < levels.length && multiple >= levels[nextLevelIdx]) {
      milestones.push({
        multiple: levels[nextLevelIdx],
        date: day.date,
        daysFromStart: (new Date(day.date) - new Date(startDate)) / (1000 * 60 * 60 * 24)
      });
      nextLevelIdx++;
    }

    return {
      date: day.date,
      price: price,
      multiple: multiple,
      drawdown: drawdown
    };
  });

  // Classify Bagger Status
  let status = 'Normal';
  const maxMultiple = maxPeak / startPrice;

  if (returnMultiple >= 100) {
    status = '100-Bagger';
  } else if (maxMultiple >= 100 && returnMultiple < 100) {
    status = 'Fallen 100-Bagger';
  } else if (returnMultiple >= 10) {
    status = 'Multibagger';
  } else if (maxMultiple >= 10 && returnMultiple < 10) {
    status = 'Fallen Multibagger';
  }

  return {
    ticker: ticker.replace('.US', ''),
    startPrice,
    currentPrice,
    startDate,
    currentDate,
    returnMultiple,
    maxReturnMultiple: maxMultiple,
    cagr,
    maxDrawdown,
    years,
    milestones,
    status, // New status field
    sector: SECTORS[ticker.replace('.US', '')] || 'Unknown',
    is100Bagger: returnMultiple >= 100,
    is10Bagger: returnMultiple >= 10,
    isFallen: status.includes('Fallen'),
    history: timeSeries // Include full history for charts
  };
}

async function main() {
  if (!API_TOKEN) {
    console.error("Error: EODHD_API_TOKEN not found in .env");
    process.exit(1);
  }

  const results = [];

  for (const ticker of TICKERS) {
    const data = await fetchHistory(ticker);
    if (data) {
      const metrics = calculateMetrics(ticker, data);
      if (metrics) {
        results.push(metrics);
        console.log(`Processed ${ticker}: ${metrics.returnMultiple.toFixed(2)}x return`);
      }
    }
    // Small delay to be nice to API
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  // Sort by return multiple
  results.sort((a, b) => b.returnMultiple - a.returnMultiple);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`\nAnalysis complete! Saved ${results.length} tickers to ${OUTPUT_FILE}`);
}

main();
