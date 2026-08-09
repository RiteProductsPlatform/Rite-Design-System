import React from 'react';

const BASE = '../../assets/logo/';

export function Logo({ variant = 'lockup', on = 'light', height = 32, base = BASE, style, ...rest }) {
  const file = variant === 'mark' ? 'rite-mark.png'
    : variant === 'wordmark' ? (on === 'dark' ? 'rite-wordmark-white.png' : 'rite-wordmark-dark.png')
    : (on === 'dark' ? 'rite-logo-lockup-white.png' : 'rite-logo-lockup.png');
  return <img src={base + file} alt="Rite" {...rest} style={{ height, width: 'auto', display: 'block', ...style }} />;
}
