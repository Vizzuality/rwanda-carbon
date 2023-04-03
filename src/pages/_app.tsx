import type { AppProps } from 'next/app';

import { Inter } from '@next/font/google';

import ApplicationLayout from 'layouts';
import { STORE_WRAPPER } from 'store';

import 'styles/globals.css';

const inter = Inter({
  weight: ['300', '400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'block',
});

// const serif = Serif({
//   weight: ['400', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   variable: '--font-serif',
//   display: 'block',
// });
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      :root {
        --font-serif: ${inter.style.fontFamily};
      }
    `}</style>
    <ApplicationLayout>
      <Component {...pageProps} />
    </ApplicationLayout>
  </>
);

export default STORE_WRAPPER.withRedux(MyApp);
