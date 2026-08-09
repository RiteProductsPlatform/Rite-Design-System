import * as React from 'react';

export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  value?: number;
  max?: number;
  tone?: 'brand' | 'mint' | 'warning' | 'danger';
  label?: React.ReactNode;
  /** Show the percentage on the right, in IBM Plex Mono. */
  showValue?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
