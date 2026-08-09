import * as React from 'react';

export interface StatTileProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** The figure. Big, bold, tight-tracked. */
  value: React.ReactNode;
  /** Lowercase descriptor under the figure. */
  label: React.ReactNode;
  /** Change indicator, set in IBM Plex Mono, e.g. "+12%". */
  delta?: React.ReactNode;
  deltaTone?: 'success' | 'danger' | 'neutral';
  icon?: string;
  tone?: 'default' | 'dark';
  style?: React.CSSProperties;
}

export declare function StatTile(props: StatTileProps): JSX.Element;
