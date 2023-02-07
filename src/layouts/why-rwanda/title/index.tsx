import { FC, ReactNode } from 'react';

import cx from 'classnames';

type WhyRwandaTitleLayoutTypes = {
  children: ReactNode;
  className?: string;
};

const WhyRwandaTitleLayout: FC<WhyRwandaTitleLayoutTypes> = (props: WhyRwandaTitleLayoutTypes) => {
  const { children, className } = props;

  return (
    <div className={cx('max-w-xs font-serif text-5xl', { [className]: !!className })}>
      {/* Content */}
      {children}
    </div>
  );
};

export default WhyRwandaTitleLayout;
