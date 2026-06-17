import React from 'react';

/**
 * Kicker — uppercase eyebrow label, often paired with a short tick/dash motif
 * echoing the clock arc. Sits above titles.
 */
export function Kicker({ children, tone = 'purple', dash = true }) {
  const colors = {
    purple: 'var(--accent-soft)',
    amber: 'var(--accent-warm)',
    muted: 'var(--text-muted)',
    ivory: 'var(--text-strong)',
  };
  const c = colors[tone] || colors.purple;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-meta)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: c,
    }}>
      {dash && <span style={{ width: '22px', height: '2px', background: 'currentColor', borderRadius: '2px', opacity: 0.7 }} />}
      {children}
    </span>
  );
}
