import * as React from 'react';

export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'style'> {
  open?: boolean;
  title?: React.ReactNode;
  /** One line under the title explaining the consequence of the action. */
  description?: React.ReactNode;
  /** sm 400 · md 540 · lg 720 px. */
  size?: 'sm' | 'md' | 'lg';
  /** Called on scrim click, close button and Escape. */
  onClose?: () => void;
  /** Right-aligned action row. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Modal(props: ModalProps): JSX.Element;
