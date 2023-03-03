import { FC } from 'react';

import dynamic from 'next/dynamic';

import ParentSize from '@visx/responsive/lib/components/ParentSize';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/why-rwanda';
import WhyRwandaTitleLayout from 'containers/why-rwanda/title';

import { dataRadialAfrica as data } from 'components/chart/data';
import Header from 'components/header';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';

const Chart = dynamic(() => import('components/chart/radial'), { ssr: false });
export type XYChartProps = {
  width: number;
  height: number;
};

const EffectiveGovernanceContentPage: FC = () => {
  return (
    <div>
      <div>
        <MetaTags title="Rwanda Carbon Tracker" description="" type="website" />
        <Header />
      </div>
      <ContentLayout>
        <Wrapper>
          <WhyRwandaTitleLayout className="max-w-lg pr-5">
            Effective governance
          </WhyRwandaTitleLayout>
          <article className="max-w-md text-xl">
            Rwanda has reduced poverty, strengthened the rule of law, and raised living standards.
            Mindful of fiscal transparency, equality, and security, Rwanda has emerged a trusted
            partner.
          </article>
          <NavigationButtons previous="/why-rwanda" next="smart-carbon" />
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

export default EffectiveGovernanceContentPage;