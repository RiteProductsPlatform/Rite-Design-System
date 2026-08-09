import * as React from 'react';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Lucide icon name. */
  icon: string;
  /** Accessible label — also used as the tooltip title. Required. */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'solid';
  /** Renders the persistent-selected treatment (mint-tint fill, green glyph). */
  active?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
