import * as React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Filled selected state. */
  active?: boolean;
  /** Makes the tag clickable (filter chip). */
  onClick?: (e: React.MouseEvent) => void;
}

export function Tag(props: TagProps): JSX.Element;
