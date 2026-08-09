import * as React from 'react';

export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange' | 'style'> {
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  onChange?: (next: boolean) => void;
  style?: React.CSSProperties;
}

export declare function Switch(props: SwitchProps): JSX.Element;
