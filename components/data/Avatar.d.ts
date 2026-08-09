import * as React from 'react';

export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Full name — used for initials and the tooltip. */
  name?: string;
  /** Photo URL. Falls back to initials when absent. */
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  tone?: 'brand' | 'mint' | 'muted';
  style?: React.CSSProperties;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
