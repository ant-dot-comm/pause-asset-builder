import * as React from 'react';

export interface ButtonProps {
  /** Button label / content. */
  children?: React.ReactNode;
  /**
   * Visual style.
   * @startingPoint section="Core" subtitle="Rounded pill buttons — primary, secondary, ghost, warm" viewport="700x150"
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'warm';
  /** Size. */
  size?: 'sm' | 'md' | 'lg';
  /** Optional icon node before the label. */
  iconLeft?: React.ReactNode;
  /** Optional icon node after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to fill container width. */
  full?: boolean;
  disabled?: boolean;
  /** Render as a different element (e.g. 'a'). */
  as?: any;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps): JSX.Element;
