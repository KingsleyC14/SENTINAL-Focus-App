# SENTINAL iOS App Development - Issues and Solutions

## Project Overview
**SENTINAL** - A focus mode iOS app built with React Native and Expo, developed on Windows using GitHub Actions for iOS builds.

## Development Environment
- **Platform**: Windows 10
- **Framework**: React Native with Expo
- **iOS Development**: GitHub Actions (macOS runners)
- **Testing**: Expo Go app

---

## Issues Encountered and Solutions

### 1. **Initial Project Setup Issues**

#### Issue: Directory Not Found / Package.json Missing
**Error**: `Directory not found` / `Could not find file 'package.json'`

**Root Cause**: Project directory wasn't properly initialized

**Solution**: 
- Explicitly created the project directory structure
- Created individual files (package.json, App.js, app.json) manually
- Ensured proper git repository initialization

---

### 2. **iOS Development on Windows**

#### Issue: CocoaPods Not Available
**Error**: `pod : The term 'pod' is not recognized`

**Root Cause**: CocoaPods is macOS-specific, not available on Windows

**Solution**: 
- Switched to Expo development approach
- Used GitHub Actions with macOS runners for iOS builds
- Leveraged cloud-based iOS development

---

### 3. **Dependency Conflicts**

#### Issue: Node.js Version Compatibility
**Error**: 
```
npm error ERESOLVE could not resolve dependency: peer react@"^19.1.0" from react-native@0.80.2
npm warn EBADENGINE package: 'metro-resolver@0.83.1', required: { node: '>=20.19.4' }, current: { node: 'v18.20.8' }
```

**Root Cause**: React Native packages required Node.js 20.19.4+, but workflow used Node.js 18

**Solution**: 
- Updated all GitHub Actions workflows to use Node.js 20
- Used `npm install --legacy-peer-deps` to handle dependency conflicts
- Removed problematic `react-native-web` dependency

---

### 4. **Asset References Issues**

#### Issue: Missing Image Assets
**Error**: `Error: ENOENT: no such file or directory, open './assets/splash.png'`

**Root Cause**: app.json referenced image assets that didn't exist

**Solution**: 
- Removed all image asset references from app.json
- Simplified splash screen configuration to use solid colors
- Updated app.json to remove problematic asset paths

---

### 5. **GitHub Actions Workflow Issues**

#### Issue: Workflow Getting Stuck
**Error**: "Upload build artifacts" step never started

**Root Cause**: `npx expo run:ios` keeps Metro bundler running indefinitely

**Solution**: 
- Created new workflow using `xcodebuild` directly
- Used `xcodebuild` commands for building and archiving
- Ensured workflow completes and uploads artifacts

---

### 6. **iOS Code Signing Issues**

#### Issue: Development Team Required
**Error**: `Signing for "SENTINAL" requires a development team`

**Root Cause**: Trying to build for real iOS device requires Apple Developer Account

**Solution**: 
- Modified workflow to build for iOS Simulator instead
- iOS Simulator builds don't require code signing
- No Apple Developer Account needed for simulator builds

---

### 7. **iOS Project Generation Issues**

#### Issue: iOS Directory Not Found
**Error**: `cd: ios: No such file or directory`

**Root Cause**: `npx expo prebuild --platform ios` wasn't completing successfully

**Solution**: 
- Added `--clean` flag to prebuild command
- Added verification step to check if iOS directory was created
- Added error handling and logging for debugging

---

### 8. **Git Commands Not Working**

#### Issue: Terminal Commands Not Responding
**Error**: Git commands returning no output

**Root Cause**: Terminal/PowerShell issues or git repository problems

**Solution**: 
- Used manual GitHub web interface for workflow creation
- Created workflow files locally and pushed via web interface
- Bypassed terminal issues by using alternative methods

---

## Final Working Solution

### **Development Setup (Expo Go)**
```bash
# Start development server
npx expo start

# Scan QR code with Expo Go app on iPhone
# Test app in real-time on device
```

### **Production Build (GitHub Actions)**
```yaml
# Fixed iOS Build workflow
name: Fixed iOS Build
on: workflow_dispatch
jobs:
  build:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
    - run: npm install --legacy-peer-deps
    - run: npx expo prebuild --platform ios
    - run: cd ios && pod install && cd ..
    - run: xcodebuild build for iOS Simulator
    - uses: actions/upload-artifact@v4
```

---

## Key Learnings

1. **Windows iOS Development**: Use GitHub Actions with macOS runners for iOS builds
2. **Node.js Version**: Always use Node.js 20+ for React Native projects
3. **Expo vs Native**: Expo Go for development, GitHub Actions for production builds
4. **Code Signing**: iOS Simulator builds don't require Apple Developer Account
5. **Workflow Design**: Use `xcodebuild` directly instead of `expo run:ios` for CI/CD
6. **Asset Management**: Remove references to non-existent assets in app.json
7. **Dependency Management**: Use `--legacy-peer-deps` for complex dependency trees

---

## Project Structure
```
SENTINAL-Expo/
├── .github/workflows/
│   ├── fixed-build.yml
│   ├── ios-build.yml
│   └── simple-expo-build.yml
├── App.js (SENTINAL focus mode app)
├── app.json (Expo configuration)
├── package.json (Dependencies)
└── ios/ (Generated iOS project)
```

---

## Success Metrics
- ✅ iOS app builds successfully on GitHub Actions
- ✅ App runs on iOS Simulator
- ✅ App runs on real device via Expo Go
- ✅ All focus mode features working
- ✅ Navigation between screens functional
- ✅ Timer and statistics working

---

*Documentation created: December 2024*
*Project: SENTINAL Focus Mode iOS App*
*Platform: React Native + Expo + GitHub Actions*
