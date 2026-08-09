import * as React from 'react';

export interface TopBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'style'> {
  title?: React.ReactNode;
  /** Uppercase kicker above the title. Ignored when `breadcrumbs` is set. */
  eyebrow?: React.ReactNode;
  /** Render a `<Breadcrumbs>` here instead of an eyebrow. */
  breadcrumbs?: React.ReactNode;
  /** Right-aligned controls. */
  actions?: React.ReactNode;
  /** Sticky with a translucent blurred background. Default true. */
  sticky?: boolean;
  style?: React.CSSProperties;
}

export interface TopBarSearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'width'> {
  placeholder?: string;
  width?: number;
}

export declare function TopBar(props: TopBarProps): JSX.Element;
export declare function TopBarSearch(props: TopBarSearchProps): JSX.Element;
