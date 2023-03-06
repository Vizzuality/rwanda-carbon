import cn from 'lib/analytics/classnames';

type ContentLayoutProps = {
  className?: string;
  children: React.ReactNode;
  half?: boolean;
};

const ContentLayout: React.FC<ContentLayoutProps> = (props: ContentLayoutProps) => {
  const { children, className, half } = props;

  return (
    <div
      className={cn({
        'relative m-auto flex h-screen w-full py-24 pr-6 pl-44': true,
        'items-center justify-between': half,
        [className]: !!className,
      })}
    >
      {/* Content */}
      {children}
    </div>
  );
};

export default ContentLayout;
