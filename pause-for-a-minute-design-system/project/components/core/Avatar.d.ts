import * as React from 'react';

export interface AvatarProps {
  /** Image URL. Omit to show initials. */
  src?: string;
  /** Full name — used for initials fallback + alt text. */
  name?: string;
  /** Diameter in px. */
  size?: number;
  /** Show the lavender ring. */
  ring?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element;
