import React from 'react';
import logoImg from '../assets/gitpilot_logo.png';

/**
 * GitPilot Official Uploaded Brand Logo Component
 */
export const BrandLogo = ({ size = 32, className = '', style = {} }) => {
  return (
    <img
      src={logoImg}
      alt="GitPilot Logo"
      width={size}
      height={size}
      className={`brand-logo-img ${className}`.trim()}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
        borderRadius: '8px',
        flexShrink: 0,
        display: 'inline-block',
        filter: 'drop-shadow(0 0 12px rgba(99, 102, 241, 0.35))',
        ...style,
      }}
    />
  );
};
