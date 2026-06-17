import React from 'react';

/**
 * Tag — topic chip for themes (Discipline, Jazz, Failure, Craft…).
 * Quiet outline by default; fills on the `active` state.
 */
export function Tag({ children, active = false, onClick }) {
  const interactive = typeof onClick === 'function';
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-meta)',
        fontSize: '13px',
        fontWeight: 500,
        padding: '6px 14px',
        borderRadius: 'var(--radius-pill)',
        cursor: interactive ? 'pointer' : 'default',
        color: active ? 'var(--text-on-accent)' : 'var(--text-body)',
        background: active ? 'var(--accent-deep)' : 'transparent',
        border: `1.5px solid ${active ? 'var(--accent-deep)' : 'var(--line-strong)'}`,
        transition: 'background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.borderColor = 'var(--accent-soft)'; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.borderColor = 'var(--line-strong)'; }}
    >
      {children}
    </span>
  );
}
