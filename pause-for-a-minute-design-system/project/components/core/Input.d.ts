import * as React from 'react';

export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'sm' | 'md' | 'lg';
  /** Fill container width (default true). */
  full?: boolean;
}

export function Input(props: InputProps): JSX.Element;
