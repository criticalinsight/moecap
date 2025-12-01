# Deploying 100-Bagger Analysis to moecapital.com/100

This guide will help you deploy the 100-bagger web application to `moecapital.com/100` as a subdirectory.

## Step 1: Configure Vite for Subdirectory Deployment

Update `vite.config.js` to set the base path:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/100/',  // Add this line
})
```

## Step 2: Update Router Configuration (if using React Router)

If you're using React Router, ensure your routes are configured with the base path:

```javascript
// In your main App.jsx or routing file
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/100">
      {/* Your routes */}
    </BrowserRouter>
  );
}
```

## Step 3: Build the Application

```bash
cd c:\Users\moeca\Desktop\moecap\100-bagger\web
npm run build
```

This creates an optimized production build in the `dist` folder.

## Step 4: Deploy to Your Server

### Option A: Deploy to Existing Hosting (Static Files)

Copy the contents of the `dist` folder to your server's `/100` directory:

```bash
# Create the directory if it doesn't exist
mkdir c:\Users\moeca\Desktop\moecap\100

# Copy the built files
xcopy /E /I c:\Users\moeca\Desktop\moecap\100-bagger\web\dist c:\Users\moeca\Desktop\moecap\100
```

Then upload the `100` folder to your web server.

### Option B: Vercel with Custom Domain and Path

1. **Deploy the 100-bagger app to Vercel** (as a separate project):

```bash
cd c:\Users\moeca\Desktop\moecap\100-bagger\web
vercel --prod
```

2. **Configure your domain's DNS/proxy** to route `/100` to the Vercel deployment:
   - Use your hosting provider's reverse proxy settings
   - Or use Vercel's path rewrites (if main site is also on Vercel)

### Option C: All-in-One Vercel Deployment

If your main `moecapital.com` site is also on Vercel, you can use a monorepo approach:

1. Create `vercel.json` in your root moecap directory:

```json
{
  "rewrites": [
    {
      "source": "/100/:path*",
      "destination": "/100-bagger/web/dist/:path*"
    },
    {
      "source": "/100",
      "destination": "/100-bagger/web/dist/index.html"
    }
  ],
  "builds": [
    {
      "src": "100-bagger/web/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ]
}
```

2. Push to your repository and Vercel will handle the deployment.

## Step 5: Server Configuration

### Apache (.htaccess)

If using Apache, create/update `.htaccess` in the `/100` directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /100/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /100/index.html [L]
</IfModule>
```

### Nginx

If using Nginx, add this to your server configuration:

```nginx
location /100 {
    alias /path/to/your/site/100;
    try_files $uri $uri/ /100/index.html;
}
```

## Step 6: Test the Deployment

Visit `https://moecapital.com/100` to verify the deployment.

## Automated Build Script

Create a PowerShell script `deploy-100-bagger.ps1` in the root moecap directory:

```powershell
# Navigate to web directory
Set-Location -Path "c:\Users\moeca\Desktop\moecap\100-bagger\web"

# Install dependencies (if needed)
npm install

# Build the application
npm run build

# Create/clean the deployment directory
$deployPath = "c:\Users\moeca\Desktop\moecap\100"
if (Test-Path $deployPath) {
    Remove-Item -Path "$deployPath\*" -Recurse -Force
} else {
    New-Item -Path $deployPath -ItemType Directory
}

# Copy built files
Copy-Item -Path "dist\*" -Destination $deployPath -Recurse -Force

Write-Host "Build complete! Files ready in: $deployPath"
Write-Host "Upload the '100' folder to your web server."
```

Run with:

```bash
powershell -ExecutionPolicy Bypass -File deploy-100-bagger.ps1
```

## Continuous Deployment with GitHub Actions (Optional)

Create `.github/workflows/deploy-100-bagger.yml`:

```yaml
name: Deploy 100-Bagger App

on:
  push:
    branches: [ main ]
    paths:
      - '100-bagger/web/**'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        working-directory: ./100-bagger/web
        run: npm install
        
      - name: Build
        working-directory: ./100-bagger/web
        run: npm run build
        
      - name: Deploy to server
        uses: burnett01/rsync-deployments@5.2
        with:
          switches: -avzr --delete
          path: 100-bagger/web/dist/
          remote_path: /var/www/moecapital.com/100/
          remote_host: ${{ secrets.DEPLOY_HOST }}
          remote_user: ${{ secrets.DEPLOY_USER }}
          remote_key: ${{ secrets.DEPLOY_KEY }}
```

## Troubleshooting

### Assets Not Loading
- Verify `base: '/100/'` is set in `vite.config.js`
- Check that all asset paths are relative
- Inspect browser console for 404 errors

### Routing Issues
- Ensure server redirect rules are configured
- Check that React Router has the correct `basename`

### Build Errors
- Run `npm install` to ensure dependencies are installed
- Clear cache: `rm -rf node_modules dist && npm install`

## Summary

**Quick deployment steps:**
1. Set `base: '/100/'` in `vite.config.js`
2. Run `npm run build` 
3. Copy `dist` contents to your server's `/100` directory
4. Configure server rewrites for React Router
5. Visit `moecapital.com/100`

---

**Note:** After the first build, you can use the automated PowerShell script for faster deployments.
