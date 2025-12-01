# Deploy 100-Bagger Application to moecapital.com/100
# This script builds the React app and prepares it for deployment

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Building 100-Bagger Application" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

# Navigate to web directory
$webPath = "c:\Users\moeca\Desktop\moecap\100-bagger\web"
Set-Location -Path $webPath

# Check if node_modules exists, if not install dependencies
if (-not (Test-Path "node_modules")) {
    Write-Host "`nInstalling dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install dependencies!" -ForegroundColor Red
        exit 1
    }
}

# Build the application
Write-Host "`nBuilding application..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

# Create/clean the deployment directory
$deployPath = "c:\Users\moeca\Desktop\moecap\100"
Write-Host "`nPreparing deployment directory..." -ForegroundColor Yellow

if (Test-Path $deployPath) {
    Write-Host "Cleaning existing deployment directory..." -ForegroundColor Yellow
    Remove-Item -Path "$deployPath\*" -Recurse -Force
}
else {
    Write-Host "Creating deployment directory..." -ForegroundColor Yellow
    New-Item -Path $deployPath -ItemType Directory | Out-Null
}

# Copy built files
Write-Host "Copying built files to deployment directory..." -ForegroundColor Yellow
Copy-Item -Path "dist\*" -Destination $deployPath -Recurse -Force

# Create .htaccess for proper routing
$htaccess = @"
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /100/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /100/index.html [L]
</IfModule>
"@

Set-Content -Path "$deployPath\.htaccess" -Value $htaccess

Write-Host "`n=====================================" -ForegroundColor Green
Write-Host "Build Complete!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "Deployment files are ready in:" -ForegroundColor Cyan
Write-Host "  $deployPath" -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Upload the '100' folder to your web server" -ForegroundColor White
Write-Host "  2. Place it in the root directory of moecapital.com" -ForegroundColor White
Write-Host "  3. Visit https://moecapital.com/100 to test" -ForegroundColor White
Write-Host ""
