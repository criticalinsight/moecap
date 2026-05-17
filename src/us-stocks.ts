import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { ContentNode } from "./assets";

export interface StockMeta {
  title?: string;
  company_name?: string;
  stock_price?: string;
  pe_ratio?: string;
  author?: string;
  rating?: string;
  market_cap?: string;
  market_cap_formatted?: string;
}

export interface StockIdea {
  id: number;
  date: string;
  ticker: string;
  meta: StockMeta;
  body: string;
}

// Robust text extraction from various telegram formats (string, Array of entities)
export function getMessageText(text: any): string {
  if (typeof text === 'string') return text;
  if (Array.isArray(text)) {
    return text.map(t => {
      if (typeof t === 'string') return t;
      if (t && typeof t === 'object' && t.text) return t.text;
      return '';
    }).join('');
  }
  return '';
}

// Convert markdown-like text to premium semantic HTML
export function formatStockBody(body: string): string {
  const blocks = body.split(/\n\s*\n/).map(b => b.trim()).filter(b => b.length > 0);
  const knownHeaders = new Set([
    "Executive Summary",
    "What They Sell and Who Buys",
    "How They Make Money",
    "Revenue Quality",
    "Cost Structure",
    "Capital Intensity",
    "Growth Drivers",
    "Competitive Edge",
    "Industry Structure and Position",
    "Unit Economics and Key KPIs",
    "Capital Allocation and Balance Sheet",
    "Risks and Failure Modes",
    "Valuation and Expected Return Profile",
    "Catalysts and Time Horizon"
  ]);

  return blocks.map(block => {
    const lines = block.split('\n');
    const firstLine = lines[0].trim();
    
    // Check if the first line is a known header or matches header characteristics
    if (knownHeaders.has(firstLine) || (firstLine.length < 50 && !firstLine.includes(".") && !firstLine.startsWith("-") && !firstLine.startsWith("*"))) {
      const headerHtml = `<h4 style="color:var(--accent); font-size:0.95rem; margin-top:1.5rem; margin-bottom:0.5rem; border-bottom: 1px dashed var(--border); padding-bottom:0.25rem;">${firstLine}</h4>`;
      
      const remainingText = lines.slice(1).join('\n').trim();
      if (remainingText) {
        let remainingHtml = '';
        if (remainingText.startsWith("-") || remainingText.startsWith("*")) {
          const items = remainingText.split(/\n/).map(line => {
            const cleaned = line.replace(/^[-*]\s*/, '').trim();
            return `<li>${cleaned}</li>`;
          }).join('\n');
          remainingHtml = `<ul style="margin: 0.5rem 0; padding-left: 1.5rem;">${items}</ul>`;
        } else {
          remainingHtml = `<p style="margin: 0.5rem 0 1rem 0; line-height: 1.6;">${remainingText}</p>`;
        }
        return `${headerHtml}\n${remainingHtml}`;
      }
      return headerHtml;
    }

    // List rendering (no header on first line)
    if (block.startsWith("-") || block.startsWith("*")) {
      const items = block.split(/\n/).map(line => {
        const cleaned = line.replace(/^[-*]\s*/, '').trim();
        return `<li>${cleaned}</li>`;
      }).join('\n');
      return `<ul style="margin: 0.5rem 0; padding-left: 1.5rem;">${items}</ul>`;
    }

    // Regular paragraph (no header on first line)
    return `<p style="margin: 0.5rem 0 1rem 0; line-height: 1.6;">${block}</p>`;
  }).join('\n');
}

// Parse, deduplicate, and sort stock ideas from us-stocks.json
export function parseStockIdeas(filePath: string): StockIdea[] {
  if (!existsSync(filePath)) {
    console.warn(`⚠️ Warning: US stocks JSON file not found at ${filePath}`);
    return [];
  }

  const fileContent = readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContent);
  const stocksMap = new Map<string, StockIdea>();

  if (!data || !Array.isArray(data.messages)) {
    return [];
  }

  for (const m of data.messages) {
    if (m.type !== "message") continue;

    const text = getMessageText(m.text);
    if (!text.startsWith("---")) continue;

    const parts = text.split("---");
    if (parts.length < 3) continue;

    const yamlSection = parts[1];
    const bodySection = parts.slice(2).join("---").trim();

    // Simple YAML parser
    const meta: StockMeta = {};
    const lines = yamlSection.split("\n");
    for (const line of lines) {
      const idx = line.indexOf(":");
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim() as keyof StockMeta;
      const val = line.slice(idx + 1).trim();
      meta[key] = val;
    }

    // Extract ticker from title (e.g. "EST - Estée Lauder Companies Inc. Analysis" -> "EST")
    let ticker = "";
    if (meta.title) {
      const dashIdx = meta.title.indexOf("-");
      if (dashIdx !== -1) {
        ticker = meta.title.slice(0, dashIdx).trim();
      } else {
        ticker = meta.title.trim();
      }
    }

    if (!ticker) {
      ticker = `UNKNOWN_${m.id}`;
    }

    const stockObj: StockIdea = {
      id: m.id,
      date: m.date,
      ticker,
      meta,
      body: bodySection
    };

    // Keep the latest post per ticker
    const existing = stocksMap.get(ticker);
    if (!existing || new Date(m.date) > new Date(existing.date)) {
      stocksMap.set(ticker, stockObj);
    }
  }

  return Array.from(stocksMap.values()).sort((a, b) => a.ticker.localeCompare(b.ticker));
}

// Render stock ideas into dynamic details-based HTML accordions
export function renderStockAccordions(stocks: StockIdea[]): string {
  if (stocks.length === 0) {
    return `<p style="color:var(--meta);">No stock ideas available at this time.</p>`;
  }

  return `
    <div class="search-container" style="margin-bottom: 1.5rem;">
      <input type="text" id="stock-search" placeholder="Search by ticker or company name..." 
             style="width:100%; padding:0.8rem; border:1px solid var(--border); border-radius:6px; background:var(--bg-code); color:var(--text); font-family:inherit; outline:none; transition:border-color 0.2s;" />
    </div>
    
    <div id="stocks-accordion-wrapper">
      ${stocks.map(stock => {
        const rating = stock.meta.rating || "🟡";
        let ratingColor = "var(--meta)";
        if (rating.includes("🔴")) ratingColor = "hsl(0, 75%, 60%)";
        else if (rating.includes("🟡")) ratingColor = "var(--accent)";
        else if (rating.includes("🟢")) ratingColor = "hsl(140, 60%, 50%)";

        const companyName = stock.meta.company_name || stock.ticker;
        const stockPrice = stock.meta.stock_price || "N/A";
        const peRatio = stock.meta.pe_ratio || "N/A";
        const marketCap = stock.meta.market_cap_formatted || (stock.meta.market_cap ? `$${stock.meta.market_cap}B` : "N/A");

        return `
          <details class="stock-accordion-item" data-ticker="${stock.ticker.toLowerCase()}" data-company="${companyName.toLowerCase()}" style="margin-bottom:1rem; border-color:var(--border);">
            <summary style="display:flex; justify-content:space-between; align-items:center; padding: 1rem;">
              <span>[${stock.ticker}] ${companyName}</span>
              <span style="color:${ratingColor}; font-weight:bold; margin-left: auto;">${rating}</span>
            </summary>
            <div class="content-body" style="padding:1.5rem; background:var(--surface);">
              <div style="margin-bottom:1.5rem; border-left:3px solid ${ratingColor}; padding-left:10px;">
                <div style="font-size:1.1rem; font-weight:bold; color:var(--text);">${companyName} (${stock.ticker})</div>
                <div style="font-size:0.85rem; color:var(--meta); margin-top:0.2rem;">
                  Rating: <span style="color:${ratingColor};">${rating}</span> &middot; Author: ${stock.meta.author || "Moe"} &middot; Date: ${stock.date.split('T')[0]}
                </div>
              </div>
              
              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap:10px; margin-bottom:1.5rem; border-bottom:1px solid var(--border); padding-bottom:1rem;">
                <div>
                  <span style="display:block; font-size:0.75rem; color:var(--meta);">Stock Price</span>
                  <span style="font-weight:bold; color:var(--text);">${stockPrice}</span>
                </div>
                <div>
                  <span style="display:block; font-size:0.75rem; color:var(--meta);">P/E Ratio</span>
                  <span style="font-weight:bold; color:var(--text);">${peRatio}</span>
                </div>
                <div>
                  <span style="display:block; font-size:0.75rem; color:var(--meta);">Market Cap</span>
                  <span style="font-weight:bold; color:var(--text);">${marketCap}</span>
                </div>
              </div>
              
              <div class="stock-analysis-text">
                ${formatStockBody(stock.body)}
              </div>
            </div>
          </details>
        `;
      }).join('\n')}
    </div>
    
    <script>
      // High-performance client-side accordion search filter
      const searchInput = document.getElementById('stock-search');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase().trim();
          const items = document.querySelectorAll('.stock-accordion-item');
          
          items.forEach(item => {
            const ticker = item.getAttribute('data-ticker') || '';
            const company = item.getAttribute('data-company') || '';
            
            if (ticker.includes(query) || company.includes(query)) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        });
      }
    </script>
  `;
}

// Returns the fully constructed US stocks ContentNode
export function getUsStocksNode(filePath: string): ContentNode {
  const stocks = parseStockIdeas(filePath);
  return {
    id: "us-stocks",
    title: `US Stock Ideas (${stocks.length})`,
    type: "ARTICLE",
    category: "US",
    content: renderStockAccordions(stocks)
  };
}
