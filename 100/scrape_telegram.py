import requests
from bs4 import BeautifulSoup
import json
import os
from datetime import datetime
import re

# Configuration
CHANNEL_URL = 'https://www.t.me/s/americamoe/'
DATA_FILE = '100/web/public/data.json'
NEWS_FILE = '100/web/public/news.json'

def scrape_telegram():
    print(f"Scraping {CHANNEL_URL}...")
    try:
        response = requests.get(CHANNEL_URL)
        response.raise_for_status()
    except Exception as e:
        print(f"Failed to fetch Telegram channel: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    messages = soup.find_all('div', class_='tgme_widget_message_wrap')
    
    new_items = []
    
    for msg in messages:
        try:
            text_elem = msg.find('div', class_='tgme_widget_message_text')
            if not text_elem:
                continue
                
            text = text_elem.get_text(separator='\n').strip()
            
            # Extract date
            time_elem = msg.find('time', class_='time')
            date_str = "Today" # Default
            if time_elem and 'datetime' in time_elem.attrs:
                dt = datetime.fromisoformat(time_elem['datetime'].replace('Z', '+00:00'))
                date_str = dt.strftime('%Y-%m-%d')

            # Simple categorization logic
            category = "Macro"
            if "crypto" in text.lower() or "bitcoin" in text.lower() or "btc" in text.lower():
                category = "Crypto"
            elif "trump" in text.lower() or "biden" in text.lower() or "election" in text.lower():
                category = "Politics"
            elif "gold" in text.lower() or "silver" in text.lower() or "oil" in text.lower():
                category = "Commodities"
            
            # Sentiment (mock logic)
            sentiment = "neutral"
            
            # Title extraction
            lines = text.split('\n')
            title = lines[0][:50] + "..." if len(lines[0]) > 50 else lines[0]
            content = text
            
            item = {
                "id": hash(text),
                "category": category,
                "title": title,
                "content": content,
                "sentiment": sentiment,
                "date": date_str
            }
            new_items.append(item)
            
        except Exception as e:
            print(f"Error parsing message: {e}")
            continue

    # Load existing stock data
    stock_data = []
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, 'r', encoding='utf-8') as f:
                stock_data = json.load(f)
        except Exception as e:
            print(f"Error loading stock data: {e}")

    # Load existing general news
    general_news = []
    if os.path.exists(NEWS_FILE):
        try:
            with open(NEWS_FILE, 'r', encoding='utf-8') as f:
                general_news = json.load(f)
        except Exception as e:
            print(f"Error loading general news: {e}")

    # Map tickers to their index in stock_data for easy access
    ticker_map = {stock['ticker'].replace('.US', ''): i for i, stock in enumerate(stock_data)}

    added_stock_news = 0
    added_general_news = 0

    # Process new items
    for item in reversed(new_items): # Process oldest to newest
        # Extract tickers: Look for $TICKER pattern
        tickers = re.findall(r'\$([A-Z]{2,5})', item['content'])
        
        matched_stock = False
        if tickers:
            for ticker in tickers:
                if ticker in ticker_map:
                    matched_stock = True
                    stock_idx = ticker_map[ticker]
                    
                    # Initialize news array if missing
                    if 'news' not in stock_data[stock_idx]:
                        stock_data[stock_idx]['news'] = []
                    
                    # Check for duplicates in stock news
                    existing_stock_news = {n['content'] for n in stock_data[stock_idx]['news']}
                    if item['content'] not in existing_stock_news:
                        # Add to beginning of list
                        stock_data[stock_idx]['news'].insert(0, item)
                        # Limit to last 10 news items per stock
                        stock_data[stock_idx]['news'] = stock_data[stock_idx]['news'][:10]
                        added_stock_news += 1
                        print(f"Added news to {ticker}")

        # If no stock matched, add to general news
        if not matched_stock:
            existing_general_contents = {n['content'] for n in general_news}
            if item['content'] not in existing_general_contents:
                general_news.insert(0, item)
                added_general_news += 1

    # Limit general news to last 50
    general_news = general_news[:50]

    # Save files
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(stock_data, f, indent=4, ensure_ascii=False)
        
    with open(NEWS_FILE, 'w', encoding='utf-8') as f:
        json.dump(general_news, f, indent=4, ensure_ascii=False)
        
    print(f"Scraping complete. Added {added_stock_news} stock news items and {added_general_news} general news items.")

if __name__ == "__main__":
    scrape_telegram()
