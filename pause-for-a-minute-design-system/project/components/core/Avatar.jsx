import React from 'react';

/**
 * Avatar — circular host/guest portrait with an optional warm ring.
 * Falls back to initials on a muted plum field.
 */
export function Avatar({ src, name = '', size = 56, ring = true }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--plum-700)',
      color: 'var(--ivory-50)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.36,
      overflow: 'hidden',
      flex: '0 0 auto',
      border: ring ? '2px solid var(--accent-soft)' : 'none',
      boxShadow: ring ? '0 0 0 4px rgba(126,68,180,0.12)' : 'none',
    }}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '·')}
    </span>
  );
}
