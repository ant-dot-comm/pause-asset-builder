import React from 'react';

/**
 * BrushDivider — a thin horizontal rule broken by a centered brand motif
 * (a small pause-bar pair or a dash), echoing the "— FOR A MINUTE —" rule
 * under the logo.
 */
export function BrushDivider({ motif = 'bars', tone = 'var(--line-strong)', accent = 'var(--accent)' }) {
  const line = { flex: 1, height: '1.5px', background: tone, borderRadius: '2px' };
  let center;
  if (motif === 'bars') {
    center = (
      <span style={{ display: 'inline-flex', gap: '4px' }}>
        <span style={{ width: '4px', height: '16px', borderRadius: '2px', background: accent }} />
        <span style={{ width: '4px', height: '16px', borderRadius: '2px', background: accent }} />
      </span>
    );
  } else if (motif === 'dot') {
    center = <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: accent }} />;
  } else {
    center = <span style={{ width: '26px', height: '2px', borderRadius: '2px', background: accent }} />;
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '100%' }} role="separator">
      <span style={line} />
      {center}
      <span style={line} />
    </div>
  );
}
