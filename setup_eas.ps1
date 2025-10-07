# PowerShell script to set up EAS project
Write-Host "Setting up EAS project for SENTINAL..."

# Create a temporary file with the response
$response = "Y"
$response | Out-File -FilePath "response.txt" -Encoding ASCII

# Run eas init with the response
Get-Content "response.txt" | eas init

# Clean up
Remove-Item "response.txt" -ErrorAction SilentlyContinue

Write-Host "EAS project setup complete!"
