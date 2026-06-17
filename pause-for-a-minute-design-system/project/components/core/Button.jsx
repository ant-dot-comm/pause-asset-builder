import React from 'react';

/**
 * Button — the primary action control for Pause for a Minute.
 * Rounded, warm, calm. Purple solid for primary, outline + ghost for the rest.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  as = 'button',
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '13px', gap: '7px', radius: 'var(--radius-pill)' },
    md: { padding: '12px 22px', fontSize: '15px', gap: '9px', radius: 'var(--radius-pill)' },
    lg: { padding: '16px 30px', fontSize: '17px', gap: '11px', radius: 'var(--radius-pill)' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1.5px solid var(--accent)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--line-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent-soft)',
      border: '1.5px solid transparent',
    },
    warm: {
      background: 'var(--accent-warm)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--accent-warm)',
    },
  };
  const v = variants[variant] || variants.primary;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    fontSize: s.fontSize,
    letterSpacing: '0.01em',
    padding: s.padding,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: full ? '100%' : 'auto',
    transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)',
    WebkitTapHighlightColor: 'transparent',
    ...v,
  };

  const Tag = as;
  return (
    <Tag
      style={style}
      disabled={as === 'button' ? disabled : undefined}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--accent)';
        if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-deep)';
        if (variant === 'ghost') e.currentTarget.style.background = 'rgba(126,68,180,0.12)';
        if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--accent-soft)';
        if (variant === 'warm') e.currentTarget.style.background = 'var(--amber-600)';
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
