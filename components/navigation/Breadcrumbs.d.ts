import * as React from 'react';

export interface Crumb { id?: string; label: string }

export interface BreadcrumbsProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  items?: Crumb[];
  onNavigate?: (id?: string) => void;
  style?: React.CSSProperties;
}

export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
