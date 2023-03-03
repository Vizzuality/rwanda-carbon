type ApplicationLayoutProps = {
  children: React.ReactNode;
};

const ApplicationLayout: React.FC<ApplicationLayoutProps> = (props: ApplicationLayoutProps) => {
  const { children } = props;

  return (
    <div className="flex min-h-screen flex-col bg-cobalt-0">
      <main className="grow">
        {/* Content */}
        {children}
      </main>
    </div>
  );
};

export default ApplicationLayout;
