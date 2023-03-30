import { FC, ReactNode } from 'react';

import cn from 'lib/analytics/classnames';

type TitleLayoutTypes = {
  children: ReactNode;
  className?: string;
  small?: boolean;
};

const TitleLayout: FC<TitleLayoutTypes> = (props: TitleLayoutTypes) => {
  const { children, className, small } = props;

  return (
    <div
      className={cn({
        'max-w-2xl justify-center font-serif text-5xl tracking-tighter text-white': true,
        'max-w-xs': small,
        [className]: !!className,
      })}
    >
      {/* Content */}
      {children}
    </div>
  );
};

export default TitleLayout;
