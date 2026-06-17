import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** Color tone. */
  tone?: 'purple' | 'amber' | 'neutral';
  /** Filled instead of outline. */
  solid?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
