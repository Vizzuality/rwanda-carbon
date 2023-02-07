type ApplicationLayoutProps = {
  children: React.ReactNode;
};

const ApplicationLayout: React.FC<ApplicationLayoutProps> = (props: ApplicationLayoutProps) => {
  const { children } = props;

  return (
    <div className="flex min-h-screen flex-col bg-blue-1">
      <main className="grow">
        {/* Content */}
        {children}
      </main>
    </div>
  );
};

export default ApplicationLayout;
