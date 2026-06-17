import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Show the short purple accent tab on the top edge. */
  accent?: boolean;
  /** CSS padding override. */
  padding?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
