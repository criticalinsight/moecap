import requests
from bs4 import BeautifulSoup
import json
import os
from datetime import datetime
import re

# Configuration
CHANNEL_URL = 'https://www.t.me/s/americamoe/'
DATA_FILE = '100/web/public/news.json'

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

            # Simple categorization logic (can be improved)
            category = "Macro"
            if "crypto" in text.lower() or "bitcoin" in text.lower() or "btc" in text.lower():
                category = "Crypto"
            elif "trump" in text.lower() or "biden" in text.lower() or "election" in text.lower():
                category = "Politics"
            elif "gold" in text.lower() or "silver" in text.lower() or "oil" in text.lower():
                category = "Commodities"
            
            # Sentiment (mock logic for now, could use NLTK/TextBlob)
            sentiment = "neutral"
            
            # Title extraction (first line or summary)
            lines = text.split('\n')
            title = lines[0][:50] + "..." if len(lines[0]) > 50 else lines[0]
            content = text
            
            item = {
                "id": hash(text), # Simple hash for ID
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

    # Load existing data
    existing_data = []
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, 'r', encoding='utf-8') as f:
                existing_data = json.load(f)
        except Exception as e:
            print(f"Error loading existing data: {e}")

    # Merge and deduplicate
    # Create a set of existing IDs or contents to avoid duplicates
    existing_contents = {item['content'] for item in existing_data}
    
    added_count = 0
    for item in reversed(new_items): # Append new ones at the top (if we prepend)
        if item['content'] not in existing_contents:
            existing_data.insert(0, item) # Prepend
            existing_contents.add(item['content'])
            added_count += 1
    
    # Limit to last 50 items to keep file size manageable
    existing_data = existing_data[:50]

    # Save back
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(existing_data, f, indent=4, ensure_ascii=False)
        
    print(f"Scraping complete. Added {added_count} new items.")

if __name__ == "__main__":
    scrape_telegram()
