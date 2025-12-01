$html = Get-Content -Path "index.html" -Raw

# Define the navigation menu
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

# Add nav styles if not present
$navCSS = @"
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

# Insert CSS if not present
if ($html -notmatch "/* Navigation Menu */") {
    $html = $html -replace '</style>', "$navCSS`n</style>"
}

# Insert nav after opening body tag if not present
if ($html -notmatch '<nav>') {
    $html = $html -replace '(<body[^>]*>)', "`$1`n$nav"
}

Set-Content -Path "index.html" -Value $html
Write-Host "Navigation menu added successfully!" -ForegroundColor Green
