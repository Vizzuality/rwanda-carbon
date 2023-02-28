import { FC } from 'react';

import cn from 'lib/analytics/classnames';

import type { AvatarProps } from './types';

export const Avatar: FC<AvatarProps> = ({ children, className, bgImage }: AvatarProps) => (
  <div
    className={cn({
      'relative z-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-700 bg-transparent bg-cover bg-center bg-no-repeat hover:z-10':
        true,
      [className]: !!className,
    })}
    style={{
      ...(bgImage && { backgroundImage: `url(${bgImage})` }),
    }}
  >
    {children}
  </div>
);

export default Avatar;
