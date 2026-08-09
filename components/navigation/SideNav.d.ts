import * as React from 'react';

export interface SideNavItem {
  id: string;
  label: string;
  /** Lucide icon name. */
  icon: string;
  /** Optional trailing count, set in IBM Plex Mono. */
  count?: number;
}

export interface SideNavSection {
  /** Uppercase group heading. Omit for an ungrouped block. */
  label?: string;
  items: SideNavItem[];
}

/**
 * The RiteSuite application sidebar — always Deep Forest, never light.
 * @startingPoint section="App shell" subtitle="Deep Forest sidebar with grouped module navigation" viewport="700x400"
 */
export interface SideNavProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  sections?: SideNavSection[];
  /** id of the active item. */
  active?: string;
  onSelect?: (id: string) => void;
  /** Collapses to a 64px icon rail. */
  collapsed?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function SideNav(props: SideNavProps): JSX.Element;
