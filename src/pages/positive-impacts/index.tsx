import { FC, useState } from 'react';

import dynamic from 'next/dynamic';

import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';

import Footer from 'containers/footer/component';
import MetaTags from 'containers/meta-tags';
import SmallHeading from 'containers/small-heading';
import Wrapper from 'containers/wrapper';
import TitleLayout from 'containers/wrapper/title';

import { dataArea as data } from 'components/chart/data';
import Header from 'components/header';
import Icon from 'components/icon';
import Modal from 'components/modal';
import Slider from 'components/slider';
import ContentLayout from 'layouts/content';

import QUESTION from 'svgs/ui/question.svg';

const Chart = dynamic(() => import('components/chart/line'), { ssr: false });

const ImpactsPage: FC = () => {
  const [isModalOpen, setModalVisibility] = useState(false);
  return (
    <div className="box-content flex min-h-screen flex-col">
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Smart Carbon" description="" type="website" />
        <Header />
      </div>
      <ContentLayout>
        <Wrapper className="m-auto justify-center space-y-14">
          <TitleLayout className="text-center">
            Potential positive impacts of carbon market investment
          </TitleLayout>
          <section className="m-auto space-y-4">
            <SmallHeading title="Carbon price" subtitle="(US$ per ton of CO2)" />

            <div className="flex space-x-2 tracking-tight">
              <span className="text-xs">10</span>
              <Slider />
              <span className="text-xs">120</span>
            </div>
          </section>

          <div className="fixed top-1/4 right-24  space-x-5 py-0">
            <AnimatePresence>
              <motion.button
                type="button"
                onClick={() => setModalVisibility(!isModalOpen)}
                animate={{ rotate: 2 * Math.PI }}
                transition={{ repeat: Infinity }}
              >
                <Icon icon={QUESTION} className="h-auto w-12" />
              </motion.button>
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
          <div className="flex h-60 w-full flex-1 justify-between space-x-3">
            <div>
              <SmallHeading title="Green job creation" subtitle="(Jobs)" />
              <ParentSize>
                {({ width, height }) => (
                  <Chart lineColor="#47DCAF" data={data} width={width} height={height} />
                )}
              </ParentSize>
            </div>
            <div>
              <SmallHeading title="Revenue generation" subtitle="(USD)" />
              <ParentSize>
                {({ width, height }) => (
                  <Chart lineColor="#FAD201" data={data} width={width} height={height} />
                )}
              </ParentSize>
            </div>
            <div>
              <SmallHeading title="Carbon reduction" subtitle="(MtCO²e)" />
              <ParentSize>
                {({ width, height }) => (
                  <Chart lineColor="#5BCEFB" data={data} width={width} height={height} />
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
