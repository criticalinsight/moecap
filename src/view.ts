import type { AssetMetadata, ContentNode, ContentLink } from './assets';

export function renderAssetLink(asset: AssetMetadata): string {
	const url = `/${asset.id}`;
	return `<a href="${url}" target="_blank">${asset.name}</a><br>
<p>Metadata: ${asset.extension.toUpperCase()} (${(asset.sizeBytes / 1024).toFixed(1)} KB)</p><br>`;
}

export function renderLinkGroup(links: ContentLink[]): string {
	return links.map(link => `
    <a href="${link.url}" target="_blank">${link.label}</a><br>
    ${link.note ? `<p>${link.note}</p><br>` : ''}
  `).join('');
}

export function renderMetricCard(title: string, metrics: Record<string, string>): string {
	const rows = Object.entries(metrics).map(([k, v]) => `
    <div style="display:flex; justify-content:space-between; border-bottom:1px solid #2a3b4c; padding: 0.5em 0;">
      <span>${k}</span>
      <span style="color:#ffdc09;">${v}</span>
    </div>
  `).join('');
	return `<h3>${title}</h3>\n${rows}`;
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
			innerHtml = node.assets ? node.assets.map(renderAssetLink).join('\n') : '';
			break;
	}

	return `
    <details id="${node.id}">
      <summary>${node.title}</summary>
      <div class="accordion-content">
        ${innerHtml}
      </div>
    </details>
  `;
}

export function renderPage(nodes: ContentNode[]): string {
	const categories = Array.from(new Set(nodes.map(n => n.category))).sort();
	const contentHtml = nodes.map(renderNode).join('\n');

	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Moe Capital</title>
	<style>
		@media (prefers-color-scheme: dark) {
			body { color: #fff; background: #000 }
			a:link { color: #9cf }
			a:hover, a:visited:hover { color: #cef }
			a:visited { color: #c9f }
		}
		body {
			margin: 1em auto;
			max-width: 35em;
			padding: 0 .62em;
			font: 1.2em/1.6 Roboto, -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica, Arial, sans-serif;
			background: #001724;
			color: #f5f5f5;
			text-rendering: optimizeLegibility;
		}
		a { color: #ffdc09; }
		details { margin: 1em 0; border: 1px solid #2a3b4c; border-radius: 4px; background: #002233; }
		summary { padding: 1em; cursor: pointer; font-weight: bold; color: #ffdc09; background: #001724; }
		.accordion-content { padding: 1em; background: #001724; line-height: 1.4; }
		.accordion-content h3 { margin-top: 0; color: #ffdc09; }
		nav { position: sticky; top: 0; background: #001724; padding: 0.5em; border-bottom: 1px solid #2a3b4c; z-index: 1000; display: flex; gap: 1em; justify-content: center; flex-wrap: wrap; }
		nav a { color: #ffdc09; text-decoration: none; font-weight: bold; font-size: 0.8em; }
		header h1 { text-align: center; color: #ffdc09; }
	</style>
</head>
<body>
	<header><h1>MoeCapital</h1></header>
	<nav>
		${categories.map(cat => `<a href="#${cat.toLowerCase()}">${cat.toUpperCase()}</a>`).join('\n\t\t')}
	</nav>
	<p style="text-align:center;">Hello, We are Moe Capital and we provide market insights and help you invest wisely.</p>
	
	<!-- Unified Content -->
${contentHtml}

</body>
</html>`;
}
