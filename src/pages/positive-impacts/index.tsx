import { FC, useState, useCallback } from 'react';

import dynamic from 'next/dynamic';

import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { AnimatePresence, motion } from 'framer-motion';

import PositiveImpactsModalContent from 'containers/data-and-sources/positive-impacts';
import Footer from 'containers/footer/component';
import MetaTags from 'containers/meta-tags';
import SmallHeading from 'containers/small-heading';
import Wrapper from 'containers/wrapper';
import TitleLayout from 'containers/wrapper/title';

import Button from 'components/button';
import { positiveImpacts as data } from 'components/chart/data';
import Header from 'components/header';
import Icon from 'components/icon';
import Modal from 'components/modal';
import Slider from 'components/slider';
import { IMPACTS } from 'constants/positive-impacts';
import ContentLayout from 'layouts/content';
import type { ChartTypes } from 'types/positive-impacts';

import QUESTION from 'svgs/ui/question.svg';

const Chart = dynamic<ChartTypes>(() => import('components/chart/positive-impacts'), {
  ssr: false,
});

const carbonPriceValues = data.map((d) => d.carbonPrice);
const maxCarbonPriceValue = Math.max(...carbonPriceValues);
const minCarbonPriceValue = Math.min(...carbonPriceValues);

//selected as default just for visualization purposes
const media = (maxCarbonPriceValue - minCarbonPriceValue) / 2;
const defaultValue = media % 2 === 0 ? media : media + 5;

const ImpactsPage: FC = () => {
  const [isModalOpen, setModalVisibility] = useState(false);
  const [value, setValue] = useState(defaultValue);
  function template({ rotate, x }) {
    return `rotate(${rotate}) translateX(${x})`;
  }

  const handleChange = useCallback((e) => setValue(e), []);
  return (
    <div className="box-content flex min-h-screen flex-col">
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Smart Carbon" description="" type="website" />
        <Header />
      </div>
      <ContentLayout>
        <Wrapper className="m-auto min-w-min justify-center space-y-14">
          <TitleLayout className="m-auto text-center">
            Potential positive impacts of carbon market investment
          </TitleLayout>
          <section className="m-auto space-y-6">
            <SmallHeading title="Carbon price" subtitle="(US$ per ton of CO2)" />

            <div className="m-auto flex max-w-2xl space-x-2 tracking-tight">
              <span className="text-xs">{minCarbonPriceValue}</span>
              <Slider
                onValueChange={handleChange}
                value={[value]}
                defaultValue={[defaultValue]}
                min={minCarbonPriceValue}
                max={maxCarbonPriceValue}
              />
              <span className="text-xs">{maxCarbonPriceValue}</span>
            </div>
          </section>

          <div className="fixed top-1/4 right-24 z-50  space-x-5 py-0">
            <AnimatePresence>
              <motion.div
              // transformTemplate={template}
              // animate={{ rotate: 360 }}
              // style={{ rotate: 0, x: 'calc(50vh - 100px)' }}
              >
                <button type="button" onClick={() => setModalVisibility(!isModalOpen)}>
                  <Icon icon={QUESTION} className="z-20 h-auto w-12" />
                </button>
              </motion.div>
            </AnimatePresence>
            <Modal
              title="LEARN MORE ABOUT"
              size="default"
              open={isModalOpen}
              onOpenChange={(o) => {
                setModalVisibility(o);
              }}
            >
              <div className="md:max-w-8xl z-50 m-auto flex min-h-screen w-full flex-col space-y-10 py-28 lg:max-w-7xl">
                <PositiveImpactsModalContent />
                <Button
                  theme="cobalt"
                  size="s"
                  className="self-center tracking-tight"
                  onClick={() => setModalVisibility(false)}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </div>
          <div className="space-3 flex h-60 w-full flex-1 justify-between">
            {IMPACTS.map((i) => (
              <div className="m-6  space-y-14" key={i.type}>
                <SmallHeading title={i.title} subtitle={i.subtitle} />
                <ParentSize>
                  {({ width, height }) => (
                    <Chart
                      type={i.type}
                      lineColor={i.lineColor}
                      data={data}
                      width={width}
                      height={height}
                      value={value}
                      preUnit={i.preUnit ?? null}
                      postUnit={i.postUnit ?? null}
                    />
                  )}
                </ParentSize>
              </div>
            ))}
          </div>
          <Footer />
        </Wrapper>
      </ContentLayout>
    </div>
  );
};

export default ImpactsPage;
