import * as React from 'react';

export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Show a remove affordance and call this when it is clicked. */
  onRemove?: () => void;
  /** Selected filter-chip treatment: mint-tint fill, green border and label. */
  selected?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
