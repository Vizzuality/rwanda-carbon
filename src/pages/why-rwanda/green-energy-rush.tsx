import { FC } from 'react';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/why-rwanda';
import WhyRwandaTitleLayout from 'containers/why-rwanda/title';

import Header from 'components/header';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';

const GreenEnergyRushContentPage: FC = () => {
  return (
    <div>
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Green energy rush" description="" type="website" />
        <Header />
      </div>
      <ContentLayout>
        <Wrapper>
          <WhyRwandaTitleLayout className="max-w-lg pr-5">Green energy rush</WhyRwandaTitleLayout>
          <article className="max-w-md text-xl">
            Off-grid solar and micro-hydro plants are leading the way. Future innovation and foreign
            direct investment will boost renewables to make up over 60% of Rwanda’s energy mix by
            2035, even as overall generation ramps up to power the country’s development.
          </article>
          <NavigationButtons previous="renewable-water-sources" />
        </Wrapper>
      </ContentLayout>
    </div>
  );
};

export default GreenEnergyRushContentPage;
