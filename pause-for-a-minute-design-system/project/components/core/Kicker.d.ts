import * as React from 'react';

export interface KickerProps {
  children?: React.ReactNode;
  /** Color tone. */
  tone?: 'purple' | 'amber' | 'muted' | 'ivory';
  /** Show the leading dash motif (echoes the clock-arc tick). */
  dash?: boolean;
}

export function Kicker(props: KickerProps): JSX.Element;
