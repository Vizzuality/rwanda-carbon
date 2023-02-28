import cx from 'classnames';

type WrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  const { children, className } = props;

  return (
    <div
      className={cx('relative box-content space-y-8 pr-24 text-white', {
        [className]: !!className,
      })}
    >
      {/* Content */}
      {children}
    </div>
  );
};

export default Wrapper;
