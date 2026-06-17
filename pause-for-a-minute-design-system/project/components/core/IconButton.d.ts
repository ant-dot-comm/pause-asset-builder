import * as React from 'react';

export interface IconButtonProps {
  /** Glyph / icon node. */
  children?: React.ReactNode;
  /** Accessible label (required). */
  label: string;
  variant?: 'solid' | 'soft' | 'outline';
  /** Diameter in px. */
  size?: number;
  onClick?: (e: React.MouseEvent) => void;
}

export function IconButton(props: IconButtonProps): JSX.Element;
