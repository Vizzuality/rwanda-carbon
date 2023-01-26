import Head from 'next/head';

import Button from 'components/button';

const Home: React.FC = () => (
  <div className="m-auto h-screen">
    <Head>
      <title>Rwanda carbon tracker</title>
    </Head>
    <div className="m-auto flex h-full w-full max-w-[1028px] flex-col items-center justify-center text-center leading-8">
      <h1 className="text-9xl tracking-wide">
        Invest in Rwanda
        <span className="text-yellow-0"> carbon credits</span>
      </h1>
      <p className="text-xl leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex space-x-4 p-8">
        <Button theme="primary" size="l">
          Positive impacts
        </Button>
        <Button theme="secondary" size="l">
          Why Rwanda
        </Button>
      </div>
    </div>
  </div>
);

export default Home;
