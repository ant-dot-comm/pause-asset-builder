import * as React from 'react';

export interface PauseMarkProps {
  /** Width in px (height auto). */
  size?: number;
  /** Color of arc + ticks (CSS color or var). */
  color?: string;
  /** Color of the two pause bars. */
  accent?: string;
  /** Include the clock arc + ticks. Set false for bars only. */
  arc?: boolean;
}

export function PauseMark(props: PauseMarkProps): JSX.Element;
