import { FC } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Icon from 'components/icon';
import Tooltip from 'components/tooltip';
import RwandaReasons from 'utils/constants';

import CHEVRON_DOWN_SVG from 'svgs/ui/arrow-down.svg?sprite';

const Home: FC = () => (
  <div className="m-auto h-screen bg-blue-2">
    <Head>
      <title>Rwanda carbon tracker</title>
    </Head>
    <div className="m-auto flex h-full w-full max-w-[1028px] flex-col items-center justify-center text-center leading-8">
      <h1 className="text-9xl tracking-wide">
        Invest in Rwanda
        <span className="text-yellow-0"> carbon credits</span>
      </h1>
      <p className="text-xl leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex items-center space-x-4 p-8 font-bold text-blue-1">
        <Link
          href="positive-impacts"
          className="cursor flex items-center justify-center rounded-3xl border border-yellow-0 bg-yellow-0 px-6 py-2 leading-6 text-blue-1 hover:bg-transparent hover:text-yellow-0 active:border-yellow-0 active:bg-transparent"
        >
          Positive impacts
        </Link>
        <Tooltip
          placement="bottom-start"
          trigger="hover"
          content={
            <div className="rounded-3xl bg-white p-8">
              <ul>
                {RwandaReasons.map(({ slug, name }) => (
                  <li key={slug} className="pb-4 font-bold text-blue-1 last-of-type:pb-0">
                    <Link href={`/why-rwanda/${slug}`}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          }
        >
          <Link
            href="/why-rwanda"
            className="box-border flex items-center space-x-4 divide-x-2 divide-green-1 rounded-3xl border border-green-0 bg-green-0 py-2 leading-6 text-blue-1 hover:divide-green-0 hover:border-green-0 hover:bg-white hover:text-green-0"
          >
            <p className="pl-6">Why Rwanda</p>
            <span className="m-auto h-full px-4">
              <Icon icon={CHEVRON_DOWN_SVG} className={'mt-1 h-3 w-4'} />
            </span>
          </Link>
        </Tooltip>
      </div>
    </div>
  </div>
);

export default Home;
