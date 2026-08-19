# GitPilot Official Marketing & Sales Website

The official, production-ready product website for **GitPilot — Your Git workspace. On autopilot.**

---

## 🏗 Architecture

- **Project Location**: `D:\GitPilot-Website\`
- **Tech Stack**: React 18, Vite 6, Lucide Icons, Modern Dark OLED CSS Design System
- **Single Source of Truth for Releases**: [`src/config/product.js`](./src/config/product.js)
- **Reusable Download Component**: [`src/components/DownloadButton.jsx`](./src/components/DownloadButton.jsx)

---

## ⚡ Quick Start

```powershell
# 1. Navigate to website folder
cd D:\GitPilot-Website

# 2. Start Vite development server
npm run dev

# 3. Build static production bundle
npm run build
```

---

## 📦 Download & Release Configuration

The website's download architecture is centralized in [`src/config/product.js`](./src/config/product.js):

```javascript
export const PRODUCT = {
  name: "GitPilot",
  version: "1.1.0",
  platform: "Windows",
  architecture: "64-bit (x64)",
  supportedOs: "Windows 10 / 11",
  installerFileName: "GitPilot-Setup-v1.1.0.exe",
  githubUrl: "https://github.com/ashwath2005/GitPilot",
  downloadUrl: "https://github.com/ashwath2005/GitPilot/releases/download/v1.1.0/GitPilot-Setup-v1.1.0.exe"
};
```

When publishing release `v1.1.0` on GitHub, push the tag:
```bash
git tag v1.1.0
git push origin v1.1.0
```
GitHub Actions will automatically build and publish `GitPilot-Setup-v1.1.0.exe` to GitHub Releases, satisfying all website download buttons.
