import cx from 'classnames';

type WhyRwandaLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const WhyRwandaLayout: React.FC<WhyRwandaLayoutProps> = (props: WhyRwandaLayoutProps) => {
  const { children, className } = props;

  return (
    <div
      className={cx('box-content space-y-8 bg-blue-1 p-24 text-white', {
        [className]: !!className,
      })}
    >
      {/* Content */}
      {children}
    </div>
  );
};

export default WhyRwandaLayout;
