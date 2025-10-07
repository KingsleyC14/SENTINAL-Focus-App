# SENTINAL iOS Build Instructions

## Prerequisites

1. **GitHub Account**: You'll need a GitHub account to host your repository
2. **Expo Account**: You'll need an Expo account (free) to get an access token
3. **Apple Developer Account**: For installing the app on your iPhone (free or paid)

## Setup Steps

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it `SENTINAL` or `sentinal-ios`
3. Make it public or private (your choice)
4. Don't initialize with README (we already have files)

### 2. Get Expo Access Token

1. Go to [expo.dev](https://expo.dev) and sign up/login
2. Go to your account settings
3. Create a new access token
4. Copy the token (you'll need it for GitHub secrets)

### 3. Push Code to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: SENTINAL focus app"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 4. Configure GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Click on "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add these secrets:
   - **Name**: `EXPO_TOKEN`
   - **Value**: Your Expo access token from step 2

### 5. Trigger the Build

1. Go to the "Actions" tab in your GitHub repository
2. Click on "Build iOS App" workflow
3. Click "Run workflow" button
4. Select the branch (main) and click "Run workflow"

### 6. Download and Install IPA

1. Wait for the build to complete (usually 10-15 minutes)
2. Go to the "Releases" section of your repository
3. Download the `.ipa` file from the latest release
4. Install on your iPhone using one of these methods:

#### Method 1: Apple Developer App
1. Install "Apple Developer" app from App Store
2. Sign in with your Apple ID
3. Upload the IPA file
4. Install on your device

#### Method 2: TestFlight (if you have Apple Developer Program)
1. Upload the IPA to App Store Connect
2. Add it to TestFlight
3. Install via TestFlight app

#### Method 3: Xcode (if you have a Mac)
1. Connect your iPhone to your Mac
2. Open Xcode
3. Go to Window → Devices and Simulators
4. Drag and drop the IPA file to install

## Troubleshooting

- **Build fails**: Check the Actions logs for specific error messages
- **Can't install IPA**: Make sure you trust the developer certificate in Settings
- **App crashes**: Check if all dependencies are properly installed

## Notes

- The build uses the "development" profile, which allows installation on your device
- You may need to trust the developer certificate in iPhone Settings
- The app will expire after 7 days (development builds) unless you have a paid Apple Developer account
