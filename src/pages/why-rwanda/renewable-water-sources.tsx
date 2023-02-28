import { FC } from 'react';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/why-rwanda';
import WhyRwandaTitleLayout from 'containers/why-rwanda/title';

import Header from 'components/header';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';

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
    <ContentLayout>
      <Wrapper>
        <WhyRwandaTitleLayout className="max-w-lg pr-5">
          Renewable water sources
        </WhyRwandaTitleLayout>
        <article className="max-w-md text-xl">
          Rwanda’s pristine lakes and rivers will undergo renewed conservation efforts. The
          benefactor will be society whose share of rechargeable fresh water sources will increase
          significantly.
        </article>
        <NavigationButtons previous="sustainable-land-use" next="green-energy-rush" />
        <p className="text-sm font-bold"> Viewing units of 1000 km2 in 2019 and 2050</p>
      </Wrapper>
    </ContentLayout>
  </div>
);

export default RenewableWaterSourcesContentPage;
