import { FC } from 'react';

import { motion, Variants } from 'framer-motion';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/wrapper';
import TitleLayout from 'containers/wrapper/title';

import Header from 'components/header';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';

type CustomVariantsProps = {
  initialX: string;
  x: number;
  y: number;
  initialDelay: number;
  duration: number;
};

const wavesProps = [
  {
    zIndex: 'z-10',
    background: 'Wave',
    y: '-40%',
    initialDelay: 0.8,
    initialX: '-45%',
    x: '-45%',
    duration: 10,
  },
  {
    zIndex: 'z-20',
    background: 'Wave_cyan',
    y: '-20%',
    initialDelay: 0.4,
    initialX: '-42%',
    x: '-58%',
    duration: 6,
  },
  {
    zIndex: 'z-30',
    background: 'Wave_white',
    y: 0,
    initialDelay: 0,
    initialX: '-40%',
    x: '-60%',
    duration: 4,
  },
];

const wavesVariants: Variants = {
  hidden: ({ y }: CustomVariantsProps) => ({
    y: '100%',
  }),
  visible: ({ y, initialDelay }: CustomVariantsProps) => ({
    y,
    transition: {
      duration: 0.5,
      delay: initialDelay,
    },
  }),
  rippleLeft: ({ initialX }: CustomVariantsProps) => ({
    x: initialX,
  }),
  rippleRight: ({ x, duration }: CustomVariantsProps) => ({
    x,
    transition: {
      ease: 'easeInOut',
      duration,
      delay: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }),
};

const RenewableWaterSourcesContentPage: FC = () => (
  <div>
    <div>
      <MetaTags
        title="Rwanda Carbon Tracker - Renewable water sources"
        description=""
        type="website"
      />
      <Header />
    </div>
    <ContentLayout half>
      <Wrapper>
        <TitleLayout small className="max-w-lg pr-5">
          Renewable water sources
        </TitleLayout>
        <motion.article
          initial={{ color: '#FFFF' }}
          animate={{ color: '#002E65' }}
          exit={{ color: '#FFFF' }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="max-w-md text-xl"
        >
          Rwanda’s pristine lakes and rivers will undergo renewed conservation efforts. The
          benefactor will be society whose share of rechargeable fresh water sources will increase
          significantly.
        </motion.article>
        <NavigationButtons
          previous="sustainable-land-use"
          current="renewable-water-sources"
          next="green-energy-rush"
          theme="cobalt"
        />
        <p className="text-sm font-bold text-cobalt-0"> Viewing m3 per capita per annum</p>
      </Wrapper>
      <div className="fixed bottom-0 -left-0 flex h-screen w-full flex-col items-end justify-end overflow-hidden">
        <div className="relative h-screen w-full">
          <div className="absolute -bottom-[12.5%] left-0 h-full w-full">
            {wavesProps.map(({ zIndex, background, y, initialDelay, initialX, x, duration }) => (
              <motion.div
                key={background}
                initial="hidden"
                animate="visible"
                variants={wavesVariants}
                className={`absolute bottom-0 left-1/2 ${zIndex} h-full w-[4000px] -translate-x-1/2 translate-y-0`}
                custom={{
                  y,
                  initialDelay,
                }}
              >
                <motion.div
                  initial="rippleLeft"
                  animate="rippleRight"
                  variants={wavesVariants}
                  className={`absolute top-0 left-0 h-full w-full bg-bottom bg-no-repeat`}
                  style={{ backgroundImage: `url(/images/${background}.svg)` }}
                  custom={{
                    initialX,
                    x,
                    duration,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="absolute right-5 top-1/2 z-40 -translate-y-1/2 transform text-xs">
            <div className="m-0 flex justify-end space-x-1 p-0 text-white">
              <span>Target 2050</span>
              <span className="font-bold">1700</span>
            </div>
            {[...Array(10).keys()].map((d) => (
              <div key={d} className="flex justify-end p-0 text-white">
                -
              </div>
            ))}
            <div className="flex justify-end space-x-1 text-cobalt-0">
              <span>Target 2035</span>
              <span className="font-bold">1000</span>
            </div>
            {[...Array(10).keys()].map((d) => (
              <div key={d} className="flex justify-end text-cobalt-0">
                -
              </div>
            ))}
            <div className="flex justify-end space-x-1">
              <span>Baseline</span>
              <span className="font-bold">670</span>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  </div>
);

export default RenewableWaterSourcesContentPage;
