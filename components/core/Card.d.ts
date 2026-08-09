import * as React from 'react';

/**
 * The Rite surface container.
 * @startingPoint section="Core" subtitle="Cards, stat tiles and the Rite surface language" viewport="700x300"
 */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  /** Body padding in px. Rite cards run 20–28. Default 24. */
  padding?: number;
  /** Adds hover border + shadow and a pointer cursor. */
  interactive?: boolean;
  tone?: 'default' | 'subtle' | 'dark';
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
