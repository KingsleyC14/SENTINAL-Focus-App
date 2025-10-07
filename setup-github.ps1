# PowerShell script to set up GitHub repository for SENTINAL

Write-Host "Setting up GitHub repository for SENTINAL..." -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit files
Write-Host "Committing files..." -ForegroundColor Yellow
git commit -m "Initial commit: SENTINAL focus app"

Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub.com" -ForegroundColor White
Write-Host "2. Copy the repository URL" -ForegroundColor White
Write-Host "3. Run these commands:" -ForegroundColor White
Write-Host "   git remote add origin YOUR_REPO_URL" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host "`n4. Add EXPO_TOKEN to GitHub Secrets" -ForegroundColor White
Write-Host "5. Go to Actions tab and run the workflow" -ForegroundColor White

Write-Host "`nSetup complete! Check BUILD_INSTRUCTIONS.md for detailed steps." -ForegroundColor Green
