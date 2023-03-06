import { FC } from 'react';

import dynamic from 'next/dynamic';

import ParentSize from '@visx/responsive/lib/components/ParentSize';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/wrapper';
import TitleLayout from 'containers/wrapper/title';

import { dataArea as data } from 'components/chart/data';
import Header from 'components/header';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';

const Chart = dynamic(() => import('components/chart/area'), { ssr: false });

const SmartCarbonContentPage: FC = () => {
  return (
    <div className="box-content flex min-h-screen flex-col">
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Smart Carbon" description="" type="website" />
        <Header />
      </div>
      <ContentLayout half>
        <Wrapper className="max-w-sm">
          <TitleLayout small>Smart carbon</TitleLayout>
          <article className="text-xl">
            Rwanda is carving out a clear path forward to curb future emissions in ambitious yet
            attainable ways. Africa’s largest green investment fund stands to help in turning this
            pledge into a reality.
          </article>
          <NavigationButtons previous="effective-governance" next="sustainable-land-use" />
          <p className="text-sm font-bold">Viewing emissions in MtCO2e</p>
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

export default SmartCarbonContentPage;
