import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type ApplicationLayoutProps = {
  children: React.ReactNode;
};

const ApplicationLayout: React.FC<ApplicationLayoutProps> = (props: ApplicationLayoutProps) => {
  const { children } = props;

  return (
    <div className="flex min-h-screen flex-col overflow-x-auto bg-cobalt-0">
      <main className={`${inter.variable} grow`}>
        {/* Content */}
        {children}
      </main>
    </div>
  );
};

export default ApplicationLayout;
