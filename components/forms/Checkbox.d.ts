import * as React from 'react';

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange' | 'style'> {
  checked?: boolean;
  /** Mixed state for a parent row whose children are partly selected. */
  indeterminate?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  onChange?: (next: boolean) => void;
  style?: React.CSSProperties;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
