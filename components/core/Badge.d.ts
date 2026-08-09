import * as React from 'react';

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'brand' | 'mint';
  /** Leading status dot. */
  dot?: boolean;
  /** Lucide icon name. */
  icon?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
