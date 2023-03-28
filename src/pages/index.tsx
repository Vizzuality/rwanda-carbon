import { FC } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Footer from 'containers/footer';
import MetaTags from 'containers/meta-tags';

import { THEME, SIZE } from 'components/button/constants';
import Header from 'components/header';
import cn from 'lib/analytics/classnames';

const Home: FC = () => (
  <div className="m-auto h-screen bg-[url('/images/landing.png')] bg-cover bg-no-repeat">
    <Head>
      <meta name="viewport" content="width=1024, initial-scale=1" />
      <title>Rwanda carbon tracker</title>
    </Head>
    <div className="m-auto flex h-full w-full flex-col items-center justify-center space-y-4 text-center leading-8">
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Why Rwanda" description="" type="website" />
        <Header carbonTrackerLogo={false} />
      </div>
      <h1 className="font-serif text-9xl tracking-tighter text-white">
        Invest in Rwanda
        <span className="block text-yellow-0"> carbon credits</span>
      </h1>
      <p className="font-inter text-xl leading-8 text-white">
        Accelerate socio-economic success and environmental stewardship
      </p>
      <div className="flex items-center space-x-4 p-8 font-bold text-cobalt-0">
        <Link href="positive-impacts" className={cn({ [THEME.primary]: true, [SIZE.base]: true })}>
          Positive impacts
        </Link>
        <Link href="/why-rwanda" className={cn({ [THEME.secondary]: true, [SIZE.base]: true })}>
          Why Rwanda
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
