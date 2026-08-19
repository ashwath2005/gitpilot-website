import React from 'react';
import { Download } from 'lucide-react';
import { useRelease } from '../services/useRelease';

/**
 * Reusable Download Button Component
 * Dynamically resolves latest release download link from GitHub.
 */
export const DownloadButton = ({
  text = 'Download GitPilot →',
  variant = 'primary', // 'primary' | 'secondary'
  size = 'md', // 'sm' | 'md' | 'lg'
  showIcon = true,
  className = '',
  id,
}) => {
  const product = useRelease();
  const variantClass = variant === 'secondary' ? 'main-btn-secondary' : '';
  const sizeClass = size === 'sm' ? 'main-btn-sm' : size === 'lg' ? 'main-btn-lg' : '';
  const isDirectFile = product.downloadUrl.endsWith('.exe') || product.downloadUrl.startsWith('/downloads/');

  return (
    <a
      id={id}
      href={product.downloadUrl}
      download={isDirectFile ? product.installerFileName : undefined}
      target={isDirectFile && product.downloadUrl.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`main-btn ${variantClass} ${sizeClass} ${className}`.trim()}
      title={`Download ${product.name} v${product.version} for ${product.platform}`}
    >
      {showIcon && <Download size={size === 'lg' ? 19 : 16} strokeWidth={2.2} />}
      <span>{text}</span>
    </a>
  );
};
