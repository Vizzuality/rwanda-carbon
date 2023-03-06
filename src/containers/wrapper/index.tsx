import cn from 'lib/analytics/classnames';

type WrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  const { children, className } = props;

  return (
    <div
      className={cn({
        'relative z-10 box-content space-y-8 pr-24 text-white': true,
        [className]: !!className,
      })}
    >
      {/* Content */}
      {children}
    </div>
  );
};

export default Wrapper;
