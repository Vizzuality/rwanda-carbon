import type { AppProps } from 'next/app';

import { Inter, DM_Serif_Display } from '@next/font/google';

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

const serif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'block',
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      :root {
        --font-inter: ${inter.style.fontFamily};
        --font-serif: ${serif.style.fontFamily};
      }
    `}</style>
    <ApplicationLayout>
      <Component {...pageProps} />
    </ApplicationLayout>
  </>
);

export default STORE_WRAPPER.withRedux(MyApp);
