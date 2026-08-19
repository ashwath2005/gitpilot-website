/**
 * GitPilot Official Product & Release Configuration
 * ============================================================
 * SINGLE SOURCE OF TRUTH FOR ALL DOWNLOAD AND REPO METADATA.
 * ============================================================
 */

// Toggle between locally bundled installer (for testing/self-hosting) and GitHub Releases
const USE_LOCAL_SERVER_DOWNLOAD = true;

const LOCAL_DOWNLOAD_PATH = "/downloads/GitPilot-Setup-v1.1.0.exe";
const GITHUB_RELEASE_DOWNLOAD_URL = "https://github.com/ashwath2005/GitPilot/releases/download/v1.1.0/GitPilot-Setup-v1.1.0.exe";

export const PRODUCT = {
  name: "GitPilot",
  tagline: "Your Git workspace. On autopilot.",
  description: "Monitor repositories, inspect changes, protect credentials, generate meaningful commits, and automate Git workflows from one powerful Windows desktop application.",
  version: "1.1.0",
  platform: "Windows",
  architecture: "64-bit (x64)",
  supportedOs: "Windows 10 / 11",
  releaseDate: "August 2026",
  
  // Local File Metadata
  installerFileName: "GitPilot-Setup-v1.1.0.exe",
  localInstallerPath: "D:\\GitPilot\\dist-installer\\GitPilot-Setup-v1.1.0.exe",
  localAppPath: "D:\\GitPilot\\dist-app\\GitPilot-win32-x64\\GitPilot.exe",

  // GitHub Repository Metadata
  githubOwner: "ashwath2005",
  githubRepo: "GitPilot",
  githubUrl: "https://github.com/ashwath2005/GitPilot",
  releasesUrl: "https://github.com/ashwath2005/GitPilot/releases",
  releaseNotesUrl: "https://github.com/ashwath2005/GitPilot/releases/tag/v1.1.0",
  changelogUrl: "https://github.com/ashwath2005/GitPilot/blob/main/CHANGELOG.md",
  docsUrl: "https://github.com/ashwath2005/GitPilot#readme",

  /**
   * Active Download URL
   * When USE_LOCAL_SERVER_DOWNLOAD is true, the website serves the installer directly
   * from the public /downloads/ folder so you can download the 1.28 GB setup immediately.
   */
  downloadUrl: USE_LOCAL_SERVER_DOWNLOAD ? LOCAL_DOWNLOAD_PATH : GITHUB_RELEASE_DOWNLOAD_URL,
  githubDownloadUrl: GITHUB_RELEASE_DOWNLOAD_URL,
  isHostedPublicly: false,
};
