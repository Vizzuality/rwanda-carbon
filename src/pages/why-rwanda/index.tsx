import { FC, useCallback, useState } from 'react';

import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';

import Footer from 'containers/footer/component';
import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/wrapper';
import TitleLayout from 'containers/wrapper/title';

import Header from 'components/header';
import ContentLayout from 'layouts/content';
import RwandaReasons from 'utils/constants';

const WhyRwandaPage: FC = () => {
  const [isHover, setIsHover] = useState({});

  const handleMouseEnter = useCallback((slug) => {
    setIsHover({ [slug]: true });
  }, []);
  const handleMouseLeave = useCallback((slug) => {
    setIsHover({ [slug]: false });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2.1,
        staggerChildren: 0.7,
      },
      transitionEnd: { display: 'none' },
    },
    exit: { display: 'none' },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div>
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Why Rwanda" description="" type="website" />
        <Header />
      </div>
      <AnimatePresence>
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="m-auto flex h-screen flex-col justify-center text-center font-serif text-[242px] leading-[77%] tracking-tighter text-white"
        >
          <motion.span variants={item}>Fuel</motion.span>
          <motion.span variants={item}>a nation&apos;s</motion.span>
          <motion.span variants={item}>future</motion.span>
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className="flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          <ContentLayout half>
            <Wrapper>
              <TitleLayout small className="max-w-lg">
                Why Rwanda
              </TitleLayout>
              <article className="max-w-md space-y-3 text-xl">
                <p>
                  Energized by upward socio-economic momentum, Rwanda is poised to modernize its
                  economy and elevate the lives of all Rwandans.
                </p>
                <p>
                  As a result of two transformative decades, the country has become a hub of
                  stability and peace, a poster child for economic development and environmental
                  conservation, and a champion of women’s empowerment and equality.  The
                </p>
                <p>
                  <a
                    href="https://www.ndcs.undp.org/content/dam/LECB/docs/pubs-reports/undp-ndcsp-rwanda-ndc2-2020.pdf?download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-0 underline"
                  >
                    Nationally Determined Contribution (NDC)
                  </a>{' '}
                  details Rwanda’s climate commitments and serves as a cobaltprint for climate
                  action in key sectors.
                </p>
                <p>
                  <a
                    href="https://www.minecofin.gov.rw/fileadmin/user_upload/Minecofin/Publications/REPORTS/National_Development_Planning_and_Research/Vision_2050/English-Vision_2050_Abridged_version_WEB_Final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-0 underline"
                  >
                    Vision 2050
                  </a>{' '}
                  outlines Rwanda’s ambitious strategy to transform the nation into a home of
                  lasting success and innovation. Now is the time to reap the benefits - take part
                  in propelling Rwanda towards the future!
                </p>
              </article>
            </Wrapper>
            <div className="flex flex-1 justify-end">
              <div
                className={`grid max-w-[700px] flex-1 grid-cols-2 font-bold uppercase text-white`}
              >
                {RwandaReasons.map(({ slug, name }) => (
                  <Link key={slug} href={`/why-rwanda/${slug}`} className={`flex-1`}>
                    <div
                      style={{
                        backgroundImage: isHover[slug] ? 'none' : `url(/images/${slug}.png)`,
                      }}
                      onMouseEnter={() => handleMouseEnter(slug)}
                      onMouseLeave={() => handleMouseLeave(slug)}
                      className={`flex h-[170px] flex-1 items-center justify-center bg-cover hover:bg-white hover:text-cobalt-0`}
                    >
                      <p>{name}</p>
                    </div>
                  </Link>
                ))}
                <Link href="/positive-impacts" className="flex-1">
                  <div
                    style={{
                      backgroundImage: isHover['positive-impacts']
                        ? 'none'
                        : `url('/images/positive-impacts.png')`,
                    }}
                    onMouseEnter={() => handleMouseEnter('positive-impacts')}
                    onMouseLeave={() => handleMouseLeave('positive-impacts')}
                    className=" flex h-full items-center justify-center bg-cover hover:bg-white hover:text-cobalt-0"
                  >
                    Positive impacts
                  </div>
                </Link>
              </div>
            </div>
          </ContentLayout>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default WhyRwandaPage;
