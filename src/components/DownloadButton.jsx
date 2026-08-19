import React from 'react';
import { Download } from 'lucide-react';
import { PRODUCT } from '../config/product';

/**
 * Reusable Download Button Component
 * Single source of truth: Always uses PRODUCT.downloadUrl.
 */
export const DownloadButton = ({
  text = 'Download GitPilot →',
  variant = 'primary', // 'primary' | 'secondary'
  size = 'md', // 'sm' | 'md' | 'lg'
  showIcon = true,
  className = '',
  id,
}) => {
  const variantClass = variant === 'secondary' ? 'main-btn-secondary' : '';
  const sizeClass = size === 'sm' ? 'main-btn-sm' : size === 'lg' ? 'main-btn-lg' : '';
  const isDirectFile = PRODUCT.downloadUrl.endsWith('.exe') || PRODUCT.downloadUrl.startsWith('/downloads/');

  return (
    <a
      id={id}
      href={PRODUCT.downloadUrl}
      download={isDirectFile ? PRODUCT.installerFileName : undefined}
      target={isDirectFile && PRODUCT.downloadUrl.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`main-btn ${variantClass} ${sizeClass} ${className}`.trim()}
      title={`Download ${PRODUCT.name} v${PRODUCT.version} for ${PRODUCT.platform}`}
    >
      {showIcon && <Download size={size === 'lg' ? 19 : 16} strokeWidth={2.2} />}
      <span>{text}</span>
    </a>
  );
};
