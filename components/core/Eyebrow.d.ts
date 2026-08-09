import * as React from 'react';

export interface EyebrowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  tone?: 'brand' | 'mint' | 'muted' | 'inverse';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Eyebrow(props: EyebrowProps): JSX.Element;
