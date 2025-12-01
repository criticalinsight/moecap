$html = Get-Content -Path "index.html" -Raw

# 1. Add CSS
$css = @"
		/* Navigation Menu */
		nav {
			position: sticky;
			top: 0;
			background: #001724;
			padding: 0.5em;
			border-bottom: 1px solid #2a3b4c;
			z-index: 1000;
			display: flex;
			flex-wrap: wrap;
			gap: 1em;
			justify-content: center;
		}

		nav a {
			color: #ffdc09;
			text-decoration: none;
			font-weight: bold;
			font-size: 0.9em;
		}

		nav a:hover {
			text-decoration: underline;
		}
"@

if ($html -notmatch "/* Navigation Menu */") {
	$html = $html -replace "(\.accordion-content \{[^}]+\})", "`$1`n$css"
}

# 2. Add Nav
$nav = @"
	<nav>
		<a href='#forex-books'>Forex Books</a>
		<a href='#investing-books'>Investing Books</a>
		<a href='#compilations'>Compilations</a>
		<a href='#alice-schroeder'>Alice Schroeder Interview</a>
		<a href='#fund-letters'>13F Letters</a>
		<a href='/100'>100-Bagger Analysis</a>
	</nav>
"@

if ($html -notmatch "<nav>") {
	# Target only the main header with MoeCapital
	$html = $html -replace "(<header>\s*<h1>MoeCapital<\/h1>\s*<\/header>)", "`$1`n$nav"
}

# 3. Add JS
$js = @"
	<script>
		document.addEventListener('DOMContentLoaded', function() {
			// Handle navigation clicks
			document.querySelectorAll('nav a').forEach(anchor => {
				anchor.addEventListener('click', function(e) {
					e.preventDefault();
					const targetId = this.getAttribute('href').substring(1);
					const targetDetails = document.getElementById(targetId);
					if (targetDetails) {
						targetDetails.open = true;
						targetDetails.scrollIntoView({ behavior: 'smooth' });
					}
				});
			});

			// Handle initial hash
			if (window.location.hash) {
				const targetId = window.location.hash.substring(1);
				const targetDetails = document.getElementById(targetId);
				if (targetDetails) {
					targetDetails.open = true;
					setTimeout(() => targetDetails.scrollIntoView({ behavior: 'smooth' }), 100);
				}
			}
		});
	</script>
</body>
"@

if ($html -notmatch "<script>") {
	$html = $html -replace "</body>", $js
}

# 4. Restore Accordions
# Map titles to IDs
$map = @{
	"Forex Books"               = "forex-books";
	"Investing Books"           = "investing-books";
	"Compilations"              = "compilations";
	"Alice Schroeder Interview" = "alice-schroeder";
	"13F Letters"               = "fund-letters"
}

foreach ($key in $map.Keys) {
	$id = $map[$key]
	# Replace Start: <h2 class="section-title">Title</h2><div class="section-content"...>
	# We use regex to be flexible with whitespace and attributes
	$patternStart = '<h2 class="section-title">\s*' + [regex]::Escape($key) + '\s*<\/h2>\s*<div class="section-content"[^>]*>'
    
	# We want to preserve the style attribute if possible, but for now we can just reset it to class defaults or copy it.
	# The original div had style="padding: 1em; overflow-x: auto;". The class .accordion-content has this in CSS now.
	# So we can just use <div class="accordion-content">.
    
	$replaceStart = "<details id=""$id"">`n<summary>$key</summary>`n<div class=""accordion-content"">"
    
	$html = $html -replace $patternStart, $replaceStart
}

# 5. Close Accordions
# Replace closing div of the section content with </div></details>
# We look for </div> followed by <details (next section) or <script (end of page)

$html = $html -replace '</div>(\s*<details)', '</div></details>$1'
$html = $html -replace '</div>(\s*<script)', '</div></details>$1'

Set-Content -Path "index.html" -Value $html
