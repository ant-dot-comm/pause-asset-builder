import React from 'react';

/**
 * IconButton — circular control for play/pause/share and other single-glyph
 * actions. Solid purple for the primary play action; soft for the rest.
 */
export function IconButton({ children, label, variant = 'soft', size = 48, onClick, ...rest }) {
  const variants = {
    solid: { background: 'var(--accent)', color: 'var(--text-on-accent)', border: '1.5px solid var(--accent)' },
    soft:  { background: 'rgba(126,68,180,0.12)', color: 'var(--accent-soft)', border: '1.5px solid transparent' },
    outline: { background: 'transparent', color: 'var(--text-strong)', border: '1.5px solid var(--line-strong)' },
  };
  const v = variants[variant] || variants.soft;
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-soft), background var(--dur-fast) var(--ease-soft)',
        WebkitTapHighlightColor: 'transparent',
        ...v,
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.93)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
