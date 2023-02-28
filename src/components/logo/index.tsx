import { FC } from 'react';

import cx from 'classnames';

import { SIZE } from './constants';
import type { LogoProps } from './types';

export const Logo: FC<LogoProps> = ({ size = 'sm' }: LogoProps) => (
  <h1
    className={cx('flex flex-col font-serif text-xl tracking-wide text-white', {
      [SIZE[size]]: !!size,
    })}
  >
    Invest in Rwanda
    <span className="block text-yellow-0">carbon credits</span>
  </h1>
);

export default Logo;
