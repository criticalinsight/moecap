$c = Get-Content index.html -Raw
# Remove the duplicate nav that appears before <div class="entry-content">
# We use regex to find <nav>...</nav> followed by <div class="entry-content">
$c = $c -replace '(?ms)\s*<nav>[\s\S]*?<\/nav>(\s*<div class="entry-content")', '$1'
Set-Content index.html -Value $c
