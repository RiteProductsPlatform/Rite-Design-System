import * as React from 'react';

export interface LogoProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'style' | 'src' | 'alt'> {
  /** lockup = loop mark + wordmark (default). mark = loop only. wordmark = type only. */
  variant?: 'lockup' | 'mark' | 'wordmark';
  /** Background the logo sits on — picks the white or dark artwork. */
  on?: 'light' | 'dark';
  /** Rendered height in px. Default 32. Minimum 20 for the lockup. */
  height?: number;
  /** Path prefix to assets/logo/ — override when mounting outside components/. */
  base?: string;
  style?: React.CSSProperties;
}

export declare function Logo(props: LogoProps): JSX.Element;
