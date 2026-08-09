import * as React from 'react';

export interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Lucide icon name, shown on a mint-tint circular plate. Default "inbox". */
  icon?: string;
  /** Path to a brand illustration — replaces the icon plate. See assets/illustrations/. */
  illustration?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Usually a single `<Button>`. */
  action?: React.ReactNode;
  compact?: boolean;
  style?: React.CSSProperties;
}

export declare function EmptyState(props: EmptyStateProps): JSX.Element;
