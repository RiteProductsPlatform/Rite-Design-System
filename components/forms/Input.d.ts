import * as React from 'react';

/**
 * Single-line text field.
 * @startingPoint section="Forms" subtitle="Inputs, selects, toggles and field groups" viewport="700x340"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'> {
  /** Lucide icon name rendered inside the leading edge. */
  icon?: string;
  /** Short trailing unit or hint, set in IBM Plex Mono, e.g. "USD". */
  suffix?: React.ReactNode;
  invalid?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
