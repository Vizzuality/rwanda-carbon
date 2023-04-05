import { FC, useCallback, useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { motion, AnimatePresence } from 'framer-motion';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/wrapper';

import { sustainableLandUseData as data } from 'components/chart/data';
import Header from 'components/header';
import Icon from 'components/icon';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';
import cn from 'lib/analytics/classnames';

import ARROW_SVG from 'svgs/ui/arrow.svg?sprite';
const Chart = dynamic(() => import('components/chart/sustainable-land-use'), {
  ssr: false,
});

const SustainableLandUseContentPage: FC = () => {
  const [year, setYear] = useState(2019);
  const handleClick = useCallback((year) => {
    setYear(year);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setYear(2050);
    }, 2800);
    setTimeout(() => {
      setYear(2019);
    }, 4100);
  }, []);
  const delay = 1;
  const duration = 0.3;
  return (
    <div>
      <div>
        <MetaTags
          title="Rwanda Carbon Tracker - Sustainable land use"
          description=""
          type="website"
        />
        <Header isAnimated={true} />
      </div>
      <ContentLayout half>
        <Wrapper>
          <AnimatePresence>
            <motion.p
              className="max-w-xs justify-center pr-5 font-serif text-5xl text-white"
              initial={{ color: '#FFFF' }}
              animate={{ color: '#002E65' }}
              exit={{ color: '#FFFF' }}
              transition={{ delay, duration }}
            >
              Sustainable land use
            </motion.p>
            <motion.article
              initial={{ color: '#FFFF' }}
              animate={{ color: '#002E65' }}
              exit={{ color: '#FFFF' }}
              transition={{ delay, duration }}
              className="max-w-md tracking-wide"
            >
              Numerous wetland and forest conservation areas illustrate Rwanda’s environmental
              integrity. With sustainable agroforestry drives and forestry training schemes
              underway, the future home of Africa’s first green city is set to preserve and regreen
              its magnificent landscapes.
            </motion.article>
          </AnimatePresence>
          <NavigationButtons
            previous="smart-carbon"
            current="sustainable-land-use"
            next="renewable-water-sources"
            theme="cobalt"
          />
          <p className="relative flex text-xs font-bold text-cobalt-0">
            {' '}
            Viewing units of 1000 km² in{' '}
            <button type="button" onClick={() => handleClick(2019)} className="ml-1.5 flex">
              {' '}
              2019{' '}
              <motion.div
                initial={{ x: 0 }}
                animate={year === 2019 ? { x: -20 } : { x: 45 }}
                transition={{ duration: 0.5 }}
              >
                <Icon
                  icon={ARROW_SVG}
                  className={cn({
                    'absolute top-4 m-auto h-3 w-3 rotate-90 cursor-pointer': true,
                  })}
                />
              </motion.div>
            </button>
            <span className="mx-1.5"> and </span>
            <button type="button" onClick={() => handleClick(2050)} className="flex">
              2050
            </button>
          </p>
        </Wrapper>
        <div className="absolute top-0 bottom-0 left-0 w-full">
          <ParentSize>
            {({ width, height }) => <Chart width={width} height={height} data={data[year]} />}
          </ParentSize>
        </div>
      </ContentLayout>
    </div>
  );
};

export default SustainableLandUseContentPage;
