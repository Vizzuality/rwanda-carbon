import { FC, useCallback, useState } from 'react';

import dynamic from 'next/dynamic';

import ParentSize from '@visx/responsive/lib/components/ParentSize';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/wrapper';
import TitleLayout from 'containers/wrapper/title';

import { sustainableLandUseData as data } from 'components/chart/data';
import Header from 'components/header';
import Icon from 'components/icon';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';

import ARROW_UP_SVG from 'svgs/ui/arrow-up.svg?sprite';

const Chart = dynamic(() => import('components/chart/sustainable-land-use'), {
  ssr: false,
});

const SustainableLandUseContentPage: FC = () => {
  const [year, setYear] = useState(2019);
  const handleClick = useCallback((e) => {
    setYear(e);
  }, []);
  return (
    <div>
      <div>
        <MetaTags
          title="Rwanda Carbon Tracker - Sustainable land use"
          description=""
          type="website"
        />
        <Header />
      </div>
      <ContentLayout half>
        <Wrapper>
          <TitleLayout small className="max-w-lg pr-5 text-cobalt-0">
            Sustainable land use
          </TitleLayout>
          <article className="max-w-md text-xl text-cobalt-0">
            Numerous wetland and forest conservation areas illustrate Rwanda’s environmental
            integrity. With sustainable agroforestry drives and forestry training schemes underway,
            the future home of Africa’s first green city is set to preserve and regreen its
            magnificent landscapes.
          </article>
          <NavigationButtons
            previous="smart-carbon"
            current="sustainable-land-use"
            next="renewable-water-sources"
            theme="cobalt"
          />
          <p className="text-sm font-bold text-cobalt-0">
            {' '}
            Viewing units of 1000 km2 in{' '}
            <button type="button" onClick={() => handleClick(2019)} className="relative">
              2019
              {year === 2019 && <Icon icon={ARROW_UP_SVG} className="m-auto h-3 w-3" />}
            </button>{' '}
            and{' '}
            <button type="button" onClick={() => handleClick(2050)}>
              2050
              {year === 2050 && <Icon icon={ARROW_UP_SVG} className="m-auto h-3 w-3" />}
            </button>
          </p>
        </Wrapper>
        <div className="absolute top-0 left-0 h-full w-full">
          <ParentSize>
            {({ width, height }) => <Chart width={width} height={height} data={data[year]} />}
          </ParentSize>
        </div>
      </ContentLayout>
    </div>
  );
};

export default SustainableLandUseContentPage;
