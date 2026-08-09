import * as React from 'react';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  invalid?: boolean;
  rows?: number;
  style?: React.CSSProperties;
}

export declare function Textarea(props: TextareaProps): JSX.Element;
