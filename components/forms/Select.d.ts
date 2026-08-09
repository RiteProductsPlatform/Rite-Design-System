import * as React from 'react';

export interface SelectOption { value: string; label: string }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'style'> {
  options?: SelectOption[];
  /** Renders a leading empty option with this label. */
  placeholder?: string;
  invalid?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): JSX.Element;
