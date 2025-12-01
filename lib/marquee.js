(function () {
    // Create styles
    const style = document.createElement('style');
    style.textContent = `
        #moe-marquee {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(15, 23, 42, 0.9);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
            z-index: 9999;
            height: 40px;
            display: flex;
            align-items: center;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            backdrop-filter: blur(8px);
        }
        .marquee-content {
            display: flex;
            white-space: nowrap;
            animation: marquee-scroll 40s linear infinite;
        }
        .marquee-item {
            margin: 0 24px;
            font-size: 12px;
            font-weight: 500;
            color: #60a5fa;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .marquee-item:hover {
            color: #fff;
        }
        .marquee-badge {
            background: rgba(59, 130, 246, 0.2);
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 10px;
            color: #93c5fd;
            border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .marquee-date {
            color: #64748b;
        }
        @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        #moe-marquee:hover .marquee-content {
            animation-play-state: paused;
        }
        body {
            padding-top: 40px !important; /* Push content down */
        }
    `;
    document.head.appendChild(style);

    // Create container
    const container = document.createElement('div');
    container.id = 'moe-marquee';
    const content = document.createElement('div');
    content.className = 'marquee-content';
    container.appendChild(content);
    document.body.prepend(container);

    // Fetch data
    fetch('/100/data.json')
        .then(res => res.json())
        .then(data => {
            // Sort and slice
            const newStocks = data
                .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
                .slice(0, 10);

            if (newStocks.length === 0) {
                container.style.display = 'none';
                return;
            }

            // Create items (duplicate for loop)
            const items = [...newStocks, ...newStocks, ...newStocks, ...newStocks];

            items.forEach(stock => {
                const link = document.createElement('a');
                link.href = `/100?ticker=${stock.ticker}`;
                link.className = 'marquee-item';
                link.innerHTML = `
                    <span class="marquee-badge">NEW</span>
                    <span>${stock.ticker}</span>
                    <span class="marquee-date">added ${stock.startDate}</span>
                `;
                content.appendChild(link);
            });
        })
        .catch(err => {
            console.error('Failed to load marquee data', err);
            container.style.display = 'none';
        });
})();
