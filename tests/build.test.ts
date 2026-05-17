import { describe, test, expect } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

describe("Unified Build Output Verification", () => {
  test("public/index.html is created and contains the accordion elements", () => {
    const indexPath = "/Users/moe/Desktop/moecapital/public/index.html";
    expect(existsSync(indexPath)).toBe(true);

    const htmlContent = readFileSync(indexPath, "utf-8");
    
    // Check main section headers
    expect(htmlContent).toContain("US Stock Ideas - Green/Buy");
    expect(htmlContent).toContain("US Stock Ideas - Yellow/Neutral");
    expect(htmlContent).toContain("US Stock Ideas - Red/Sell");

    // Check search inputs exist
    expect(htmlContent).toContain('id="stock-search-us-stocks-green"');
    expect(htmlContent).toContain('id="stock-search-us-stocks-yellow"');
    expect(htmlContent).toContain('id="stock-search-us-stocks-red"');

    // Check client-side filter scripts exist
    expect(htmlContent).toContain("document.getElementById('stock-search-us-stocks-green')");
    expect(htmlContent).toContain("document.getElementById('stock-search-us-stocks-yellow')");
    expect(htmlContent).toContain("document.getElementById('stock-search-us-stocks-red')");

    // Check presence of some sample tickers
    expect(htmlContent).toContain('data-ticker="aapl"');
    expect(htmlContent).toContain('data-ticker="msft"');
    expect(htmlContent).toContain('data-ticker="amzn"');
    expect(htmlContent).toContain('data-ticker="nvda"');
    expect(htmlContent).toContain('data-ticker="adbe"');
    expect(htmlContent).toContain('data-ticker="tsla"');

    // Ensure the old static metrics are removed
    expect(htmlContent).not.toContain('Mastercard $MA');
    expect(htmlContent).not.toContain('Visa $V');
  });
});
