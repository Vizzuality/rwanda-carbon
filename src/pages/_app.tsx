import type { AppProps } from 'next/app';

import ApplicationLayout from 'layouts';
import { STORE_WRAPPER } from 'store';

import 'styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ApplicationLayout>
    <Component {...pageProps} />
  </ApplicationLayout>
);

export default STORE_WRAPPER.withRedux(MyApp);
