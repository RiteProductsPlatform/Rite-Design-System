import * as React from 'react';

export interface BannerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'style'> {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: React.ReactNode;
  /** Body copy. */
  children?: React.ReactNode;
  /** Inline action, usually a ghost or small secondary `<Button>`. */
  action?: React.ReactNode;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}

export declare function Banner(props: BannerProps): JSX.Element;
