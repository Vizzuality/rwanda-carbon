import cx from 'classnames';

type ContentLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const ContentLayout: React.FC<ContentLayoutProps> = (props: ContentLayoutProps) => {
  const { children, className } = props;

  return (
    <div
      className={cx(
        'relative m-auto flex h-screen w-full items-center justify-between py-24 pr-6 pl-44',
        {
          [className]: !!className,
        }
      )}
    >
      {/* Content */}
      {children}
    </div>
  );
};

export default ContentLayout;
