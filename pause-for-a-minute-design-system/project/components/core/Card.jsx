import React from 'react';

/**
 * Card — warm matte surface container. Optional accent top-edge and
 * the subtle paper feel of the brand. No glossy shadows.
 */
export function Card({ children, accent = false, padding = 'var(--space-6)', style = {}, ...rest }) {
  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--surface-2)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      {accent && (
        <span style={{
          position: 'absolute',
          top: 0,
          left: 'var(--space-6)',
          width: '44px',
          height: '4px',
          background: 'var(--accent)',
          borderRadius: '0 0 4px 4px',
        }} />
      )}
      {children}
    </div>
  );
}
