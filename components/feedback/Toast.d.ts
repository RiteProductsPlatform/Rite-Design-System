import * as React from 'react';

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'style'> {
  tone?: 'success' | 'info' | 'warning' | 'danger';
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Optional single inline action, e.g. an Undo button. */
  action?: React.ReactNode;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): JSX.Element;
