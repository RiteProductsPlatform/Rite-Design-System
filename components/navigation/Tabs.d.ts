import * as React from 'react';

export interface TabItem {
  id: string;
  label: string;
  /** Lucide icon name. */
  icon?: string;
  /** Trailing count pill. */
  count?: number;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  items?: TabItem[];
  active?: string;
  onSelect?: (id: string) => void;
  /** underline = page-level sections. pill = a segmented switch inside a card. */
  variant?: 'underline' | 'pill';
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): JSX.Element;
