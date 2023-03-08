import { FC, useState, useCallback } from 'react';

import dynamic from 'next/dynamic';

import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { AnimatePresence, motion } from 'framer-motion';

import Footer from 'containers/footer/component';
import MetaTags from 'containers/meta-tags';
import SmallHeading from 'containers/small-heading';
import Wrapper from 'containers/wrapper';
import TitleLayout from 'containers/wrapper/title';

import { positiveImpacts as data } from 'components/chart/data';
import type { ChartTypes } from 'components/chart/positive-impacts/types';
import Header from 'components/header';
import Icon from 'components/icon';
import Modal from 'components/modal';
import Slider from 'components/slider';
import ContentLayout from 'layouts/content';

import QUESTION from 'svgs/ui/question.svg';

const Chart = dynamic<ChartTypes>(() => import('components/chart/positive-impacts'), {
  ssr: false,
});

const ImpactsPage: FC = () => {
  const [isModalOpen, setModalVisibility] = useState(false);
  const [value, setValue] = useState(0);
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
        <Wrapper className="m-auto min-w-min justify-center space-y-7">
          <TitleLayout className="m-auto text-center">
            Potential positive impacts of carbon market investment
          </TitleLayout>
          <section className="m-auto space-y-6">
            <SmallHeading title="Carbon price" subtitle="(US$ per ton of CO2)" />

            <div className="m-auto flex max-w-2xl space-x-2 tracking-tight">
              <span className="text-xs">10</span>
              <Slider onValueChange={handleChange} value={[value]} />
              <span className="text-xs">120</span>
            </div>
          </section>

          <div className="fixed top-1/4 right-24  space-x-5 py-0">
            <AnimatePresence>
              <motion.div
                transformTemplate={template}
                animate={{ rotate: 360 }}
                style={{ rotate: 0, x: 'calc(50vh - 100px)' }}
              >
                {/* <button type="button" onClick={() => setModalVisibility(!isModalOpen)}> */}
                <Icon icon={QUESTION} className="h-auto w-12" />
                {/* </button> */}
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
              <div className="flex grow flex-col space-y-5 overflow-auto py-10">
                <div className="grow px-10">
                  <h2>LEARN MORE ABOUT</h2>
                </div>
              </div>
            </Modal>
          </div>
          <div className="space-3 flex h-60 w-full flex-1 justify-between">
            <div className="m-6 min-w-[244px] space-y-14">
              <SmallHeading title="Green job creation" subtitle="(Jobs)" />
              <ParentSize>
                {({ width, height }) => (
                  <Chart
                    type="greenJobCreation"
                    lineColor="#47DCAF"
                    data={data}
                    width={width}
                    height={height}
                    value={value}
                    preUnit="K"
                  />
                )}
              </ParentSize>
            </div>
            <div className="m-6 min-w-[244px] space-y-14">
              <SmallHeading title="Revenue generation" subtitle="(USD)" />
              <ParentSize>
                {({ width, height }) => (
                  <Chart
                    lineColor="#FAD201"
                    data={data}
                    type="revenueGeneration"
                    width={width}
                    height={height}
                    value={value}
                    postUnit="$"
                  />
                )}
              </ParentSize>
            </div>
            <div className="m-6 min-w-[244px] space-y-14">
              <SmallHeading title="Carbon reduction" subtitle="(MtCO²e)" />
              <ParentSize>
                {({ width, height }) => (
                  <Chart
                    lineColor="#5BCEFB"
                    data={data}
                    type="carbonReduction"
                    width={width}
                    height={height}
                    value={value}
                  />
                )}
              </ParentSize>
            </div>
          </div>
          <Footer />
        </Wrapper>
      </ContentLayout>
    </div>
  );
};

export default ImpactsPage;
