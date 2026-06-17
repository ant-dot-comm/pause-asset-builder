import * as React from 'react';

export interface BrushDividerProps {
  /** Centered motif. */
  motif?: 'bars' | 'dot' | 'dash';
  /** Line color. */
  tone?: string;
  /** Center motif color. */
  accent?: string;
}

export function BrushDivider(props: BrushDividerProps): JSX.Element;
