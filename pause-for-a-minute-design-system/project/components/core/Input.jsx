import React from 'react';

/**
 * Input — single-line text/email field. Warm, rounded, calm focus ring.
 * Used in subscribe forms and search.
 */
export function Input({ type = 'text', placeholder = '', value, onChange, size = 'md', full = true, ...rest }) {
  const sizes = {
    sm: { padding: '9px 14px', fontSize: '14px' },
    md: { padding: '13px 18px', fontSize: '15px' },
    lg: { padding: '16px 20px', fontSize: '16px' },
  };
  const s = sizes[size] || sizes.md;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: full ? '100%' : 'auto',
        fontFamily: 'var(--font-ui)',
        color: 'var(--text-strong)',
        background: 'var(--surface-1)',
        border: '1.5px solid var(--line-strong)',
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        transition: 'border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)',
        ...s,
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-soft)';
        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(126,68,180,0.14)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = 'var(--line-strong)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      {...rest}
    />
  );
}
