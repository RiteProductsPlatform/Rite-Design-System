import * as React from 'react';

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Tooltip copy. Keep it to one short line. */
  label: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
