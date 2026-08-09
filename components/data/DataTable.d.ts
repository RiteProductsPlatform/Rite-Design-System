import * as React from 'react';

export interface DataTableColumn<T = any> {
  key: string;
  header: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  width?: number | string;
  /** Render the cell in IBM Plex Mono — use for IDs, counts, dates, amounts. */
  mono?: boolean;
  /** Secondary text colour. */
  muted?: boolean;
  /** Allow the cell to wrap. Cells are nowrap by default. */
  wrap?: boolean;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
}

/**
 * The workhorse record list for every RiteSuite module.
 * @startingPoint section="Data" subtitle="Sortable record table with status cells" viewport="700x340"
 */
export interface DataTableProps<T = any> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  columns?: DataTableColumn<T>[];
  rows?: T[];
  onRowClick?: (row: T) => void;
  /** Tighter 9px row padding for long lists. */
  dense?: boolean;
  sortKey?: string;
  sortDir?: 'asc' | 'desc';
  onSort?: (key: string) => void;
  /** Rendered instead of the table when `rows` is empty — pass an `<EmptyState>`. */
  empty?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function DataTable<T = any>(props: DataTableProps<T>): JSX.Element;
