import { FC } from 'react';

import dynamic from 'next/dynamic';

import ParentSize from '@visx/responsive/lib/components/ParentSize';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/wrapper';
import TitleLayout from 'containers/wrapper/title';

import { greenEnergyRushChart as data } from 'components/chart/data';
import Header from 'components/header';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';

const Chart = dynamic(() => import('components/chart/green-energy-rush'), { ssr: false });
export type XYChartProps = {
  width: number;
  height: number;
};

const GreenEnergyRushContentPage: FC = () => {
  return (
    <div>
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Green energy rush" description="" type="website" />
        <Header />
      </div>
      <ContentLayout half>
        <Wrapper>
          <TitleLayout small className="max-w-lg pr-5">
            Green energy rush
          </TitleLayout>
          <article className="max-w-md tracking-wide">
            Off-grid solar and micro-hydro plants are leading the way. Future innovation and foreign
            direct investment will boost renewables to make up over 60% of Rwanda’s energy mix by
            2035, even as overall generation ramps up to power the country’s development.
          </article>
          <NavigationButtons current="green-energy-rush" previous="renewable-water-sources" />
          <p className="text-xs font-bold">Viewing % of renewable energy in power regeneration.</p>
        </Wrapper>
        <div className="absolute top-0 left-0 h-full w-full">
          <ParentSize>
            {({ width, height }) => <Chart data={data} width={width} height={height} />}
          </ParentSize>
        </div>
      </ContentLayout>
    </div>
  );
};

export default GreenEnergyRushContentPage;
