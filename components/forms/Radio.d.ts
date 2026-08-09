import * as React from 'react';

export interface RadioProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange' | 'style'> {
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  /** Second line of explanatory copy under the label. */
  description?: React.ReactNode;
  onChange?: (next: true) => void;
  style?: React.CSSProperties;
}

export declare function Radio(props: RadioProps): JSX.Element;
