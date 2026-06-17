import React from 'react';

/**
 * Badge — compact status / metadata marker.
 * Episode numbers, "New", season tags, "Live".
 */
export function Badge({ children, tone = 'purple', solid = false }) {
  const tones = {
    purple: { fg: 'var(--accent-soft)', bd: 'var(--accent-deep)', solidBg: 'var(--accent)', solidFg: 'var(--text-on-accent)' },
    amber:  { fg: 'var(--accent-warm)', bd: 'rgba(207,138,62,0.5)', solidBg: 'var(--accent-warm)', solidFg: 'var(--ink-900)' },
    neutral:{ fg: 'var(--text-muted)', bd: 'var(--line-strong)', solidBg: 'var(--surface-raised)', solidFg: 'var(--text-strong)' },
  };
  const t = tones[tone] || tones.purple;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-meta)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? t.solidBg : 'transparent',
      color: solid ? t.solidFg : t.fg,
      border: solid ? '1.5px solid transparent' : `1.5px solid ${t.bd}`,
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}
