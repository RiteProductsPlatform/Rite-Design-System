import * as React from 'react';

export interface FieldGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  label?: React.ReactNode;
  /** Helper text under the control. Replaced by `error` when present. */
  hint?: React.ReactNode;
  /** Error message — turns the text red. Set `invalid` on the control too. */
  error?: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function FieldGroup(props: FieldGroupProps): JSX.Element;
