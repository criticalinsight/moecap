import type { AssetMetadata, ContentNode, ContentLink } from './assets';

export function renderAssetLink(asset: AssetMetadata): string {
	const url = `/${asset.id}`;
	return `
    <article class="asset-item">
      <span><a href="${url}" target="_blank">${asset.name}</a></span>
      <span class="meta">${asset.extension.toUpperCase()} (${(asset.sizeBytes / 1024).toFixed(1)} KB)</span>
    </article>`;
}

export function renderLinkGroup(links: ContentLink[]): string {
	return links.map(link => `
    <article class="link-item">
      <span><a href="${link.url}" target="_blank">${link.label}</a></span>
      <span class="meta">${link.note || ''}</span>
    </article>
  `).join('');
}

export function renderMetricCard(title: string, metrics: Record<string, string>): string {
	const rows = Object.entries(metrics).map(([k, v]) => `
    <div class="metric-row">
      <span class="label">${k}</span>
      <span class="value">${v}</span>
    </div>
  `).join('');
	return title ? `<h3>${title}</h3>\n${rows}` : rows;
}

export function renderNode(node: ContentNode): string {
	let innerHtml = '';

	switch (node.type) {
		case 'ARTICLE':
			innerHtml = `
        ${node.metrics ? renderMetricCard('', node.metrics) : ''}
        ${node.content}
      `;
			break;
		case 'LINK_LIST':
			innerHtml = node.links ? renderLinkGroup(node.links) : '';
			break;
		case 'METRIC_CARD':
			innerHtml = node.metrics ? renderMetricCard(node.title, node.metrics) : '';
			break;
		case 'ASSET_LIST':
			innerHtml = node.assets ? `<div class="asset-grid">${node.assets.map(renderAssetLink).join('\n')}</div>` : '';
			break;
	}

	return `
    <details id="${node.id}">
      <summary>${node.title}</summary>
      <section class="content-body">
        ${innerHtml}
      </section>
    </details>
  `;
}

export function renderPage(nodes: ContentNode[]): string {
    const categories = Array.from(new Set(nodes.map(n => n.category))).sort();
    
    // Group nodes by category
    const groupedContent = categories.map(cat => {
        const catNodes = nodes.filter(n => n.category === cat);
        const navId = cat.toLowerCase().replace(/\s+/g, '-');
        return `
        <section id="${navId}" class="category-section">
            <h2 class="category-header">${cat}</h2>
            <div class="category-nodes">
                ${catNodes.map(renderNode).join('\n')}
            </div>
        </section>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Moe Capital | Anemone Zola</title>
    <style>
        :root {
            --bg: #1a1b1e;
            --surface: #25262b;
            --accent: #78B6AD;
            --link: #E2AEA2;
            --text: #c1c2c5;
            --meta: #909296;
            --border: #373a40;
            --bg-code: #2c2e33;
        }

        @media (prefers-color-scheme: light) {
            :root {
                --bg: #f8f9fa;
                --surface: #ffffff;
                --accent: #386e66;
                --link: #a64d3d;
                --text: #212529;
                --meta: #6c757d;
                --border: #dee2e6;
                --bg-code: #f1f3f5;
            }
        }

        * { box-sizing: border-box; }

        body {
            background: var(--bg);
            color: var(--text);
            font-family: 'JetBrains Mono', 'Fira Code', 'IBM Plex Mono', ui-monospace, monospace;
            line-height: 1.5;
            margin: 0;
            padding: 4rem 2rem;
            display: flex;
            justify-content: center;
        }

        main {
            width: 100%;
            max-width: 70ch;
        }

        h1, h2, h3 { color: var(--accent); margin-top: 2.5rem; font-weight: 600; }
        h1::before { content: '# '; opacity: 0.5; }
        h2::before { content: '## '; opacity: 0.5; }
        h3::before { content: '### '; opacity: 0.5; }

        header { text-align: left; margin-bottom: 4rem; }
        header h1 { margin: 0; font-size: 1.8rem; letter-spacing: -0.02em; }
        header p { color: var(--meta); margin: 0.5rem 0 0 0; font-size: 0.9rem; }

        nav {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 4rem;
            padding: 1rem 0;
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            background: var(--bg);
            z-index: 10;
        }

        nav a {
            text-decoration: none;
            color: var(--meta);
            font-size: 0.85rem;
            transition: color 0.2s;
        }

        nav a::before { content: '['; margin-right: 2px; }
        nav a::after { content: ']'; margin-left: 2px; }
        nav a:hover { color: var(--accent); }

        a { color: var(--link); text-decoration: none; transition: opacity 0.2s; }
        a:hover { opacity: 0.8; text-decoration: underline; }

        .category-header {
            margin-bottom: 2rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--border);
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        details { 
            margin-bottom: 1.5rem; 
            border: 1px solid var(--border);
            background: var(--surface);
            border-radius: 4px;
            transition: border-color 0.2s;
        }
        
        details:hover { border-color: var(--accent); }

        summary {
            padding: 1rem;
            cursor: pointer;
            color: var(--text);
            font-weight: 500;
            list-style: none;
            display: flex;
            align-items: center;
        }
        
        summary::-webkit-details-marker { display: none; }
        summary::before { 
            content: '>>'; 
            color: var(--accent); 
            margin-right: 1.5ch; 
            font-size: 0.8rem;
            opacity: 0.7;
        }

        details[open] summary {
            border-bottom: 1px solid var(--border);
            color: var(--accent);
        }

        .content-body {
            padding: 1.5rem;
            font-size: 0.9rem;
        }

        .metric-row, .asset-item, .link-item {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border);
        }

        .metric-row:last-child, .asset-item:last-child, .link-item:last-child { 
            border-bottom: none; 
        }

        .label { color: var(--meta); }
        .value { color: var(--accent); font-weight: 500; }
        .meta { font-size: 0.75rem; color: var(--meta); opacity: 0.8; }

        ul { list-style: none; padding-left: 0; }
        ul li::before { content: '- '; color: var(--accent); margin-right: 1ch; }

        hr { border: 0; border-top: 1px solid var(--border); margin: 3rem 0; }

        .asset-grid {
            display: grid;
            gap: 0.5rem;
        }

        footer {
            margin-top: 6rem;
            padding-bottom: 4rem;
        }

        @media (max-width: 600px) {
            body { padding: 2rem 1rem; }
            nav { gap: 0.5rem; }
        }
    </style>
</head>
<body>
    <main>
        <header>
            <h1>MoeCapital</h1>
            <p>Unified Financial Research & Asset Library</p>
        </header>
        
        <nav>
            ${categories.map(cat => `<a href="#${cat.toLowerCase().replace(/\s+/g, '-')}">${cat}</a>`).join('')}
        </nav>
        
        <article>
            ${groupedContent}
        </article>

        <footer>
            <hr>
            <p style="font-size: 0.75rem; color: var(--meta); text-align: center; opacity: 0.6;">
                Built for financial clarity. Simple. Monospace. De-complexed.
            </p>
        </footer>
    </main>
</body>
</html>`;
}
