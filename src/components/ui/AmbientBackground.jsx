import React from 'react';

// Clean background using CSS variables for proper theming
export default function AmbientBackground() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 -z-20" 
      style={{ backgroundColor: 'var(--bg-primary)' }}
      aria-hidden
    />
  );
}
