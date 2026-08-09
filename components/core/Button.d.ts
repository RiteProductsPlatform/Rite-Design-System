import * as React from 'react';

/**
 * The Rite action button.
 * @startingPoint section="Core" subtitle="Buttons in every Rite variant, size and state" viewport="700x300"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** primary = Tropical Rainforest fill. accent = Signal Mint, for one hero action only. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label. */
  icon?: string;
  /** Lucide icon name rendered after the label. */
  iconAfter?: string;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
