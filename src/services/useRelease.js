import { useState, useEffect } from 'react';
import { PRODUCT } from '../config/product';

let cachedRelease = null;
const listeners = new Set();
let isFetching = false;

/**
 * React hook to retrieve the latest published GitPilot release dynamically from GitHub.
 * Seamlessly falls back to static PRODUCT defaults if offline or rate-limited.
 */
export function useRelease() {
  const [release, setRelease] = useState(cachedRelease || PRODUCT);

  useEffect(() => {
    if (cachedRelease) {
      setRelease(cachedRelease);
      return;
    }

    listeners.add(setRelease);

    if (!isFetching) {
      isFetching = true;
      fetch(`https://api.github.com/repos/${PRODUCT.githubOwner}/${PRODUCT.githubRepo}/releases/latest`)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((data) => {
          const rawTag = data.tag_name || `v${PRODUCT.version}`;
          const cleanVersion = rawTag.replace(/^v/, '');
          const exeAsset = data.assets?.find((a) => a.name.endsWith('.exe') && !a.name.includes('uninstaller'));

          const dynamicRelease = {
            ...PRODUCT,
            version: cleanVersion,
            installerFileName: exeAsset?.name || `GitPilot-Setup-${cleanVersion}.exe`,
            downloadUrl: exeAsset?.browser_download_url || `https://github.com/${PRODUCT.githubOwner}/${PRODUCT.githubRepo}/releases/download/${rawTag}/${exeAsset?.name || `GitPilot-Setup-${cleanVersion}.exe`}`,
            githubDownloadUrl: exeAsset?.browser_download_url || PRODUCT.githubDownloadUrl,
            releaseNotesUrl: data.html_url || `https://github.com/${PRODUCT.githubOwner}/${PRODUCT.githubRepo}/releases/tag/${rawTag}`,
            releaseDate: data.published_at
              ? new Date(data.published_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
              : PRODUCT.releaseDate,
          };

          cachedRelease = dynamicRelease;
          listeners.forEach((fn) => fn(dynamicRelease));
        })
        .catch((err) => {
          console.info('[GitPilot Website] Using cached fallback release metadata:', err.message);
        })
        .finally(() => {
          isFetching = false;
        });
    }

    return () => {
      listeners.delete(setRelease);
    };
  }, []);

  return release;
}
