import { FC, useCallback, useState } from 'react';

import Link from 'next/link';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/why-rwanda';
import WhyRwandaTitleLayout from 'containers/why-rwanda/title';

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

  return (
    <div>
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Why Rwanda" description="" type="website" />
        <Header />
      </div>
      <div className="flex">
        <ContentLayout>
          <Wrapper>
            <WhyRwandaTitleLayout className="max-w-lg">Why Rwanda</WhyRwandaTitleLayout>
            <article className="max-w-md space-y-3 text-xl">
              <p>
                Energized by upward socio-economic momentum, Rwanda is poised to modernize its
                economy and elevate the lives of all Rwandans.
              </p>
              <p>
                As a result of two transformative decades, the country has become a hub of stability
                and peace, a poster child for economic development and environmental conservation,
                and a champion of women’s empowerment and equality.  The
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/159ogNmA9qoPD_oB2BCpnetcrombjxYok/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-0 underline"
                >
                  Nationally Determined Contribution (NDC)
                </a>{' '}
                details Rwanda’s climate commitments and serves as a cobaltprint for climate action
                in key sectors.
              </p>
              <p>
                <a
                  href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.minecofin.gov.rw%2Ffileadmin%2Fuser_upload%2FMinecofin%2FPublications%2FREPORTS%2FNational_Development_Planning_and_Research%2FVision_2050%2FEnglish-Vision_2050_Abridged_version_WEB_Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-0 underline"
                >
                  Vision 2050
                </a>{' '}
                outlines Rwanda’s ambitious strategy to transform the nation into a home of lasting
                success and innovation. Now is the time to reap the benefits - take part in
                propelling Rwanda towards the future! .
              </p>
            </article>
          </Wrapper>
          <div className="flex flex-1 justify-end">
            <div className={`flex  max-w-[540px] flex-wrap font-bold uppercase text-white`}>
              {RwandaReasons.map(({ slug, name }) => (
                <Link key={slug} href={`/why-rwanda/${slug}`} className={`flex-1`}>
                  <div
                    style={{ backgroundImage: isHover[slug] ? 'none' : `url(/images/${slug}.png)` }}
                    onMouseEnter={() => handleMouseEnter(slug)}
                    onMouseLeave={() => handleMouseLeave(slug)}
                    className={`flex h-[170px] w-[270px] flex-1 items-center justify-center bg-cover hover:bg-white hover:text-cobalt-0`}
                  >
                    <p>{name}</p>
                  </div>
                </Link>
              ))}
              <Link href="/positive-impacts" className="flex-1">
                <div className="flex h-full w-[270px] items-center justify-center bg-[url('/images/positive-impacts.png')] bg-cover hover:bg-white hover:text-cobalt-0">
                  Positive impact
                </div>
              </Link>
            </div>
          </div>
        </ContentLayout>
      </div>
    </div>
  );
};
export default WhyRwandaPage;
