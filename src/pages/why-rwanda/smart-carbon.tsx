import { FC } from 'react';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/why-rwanda';
import WhyRwandaTitleLayout from 'containers/why-rwanda/title';

import Header from 'components/header';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';

const SmartCarbonContentPage: FC = () => {
  return (
    <div className="box-content flex min-h-screen flex-col">
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Smart Carbon" description="" type="website" />
        <Header />
      </div>
      <ContentLayout>
        <Wrapper className="max-w-sm">
          <WhyRwandaTitleLayout>Smart carbon</WhyRwandaTitleLayout>
          <article className="text-xl">
            Rwanda is carving out a clear path forward to curb future emissions in ambitious yet
            attainable ways. Africa’s largest green investment fund stands to help in turning this
            pledge into a reality.
          </article>
          <NavigationButtons previous="effective-governance" next="sustainable-land-use" />
          <p className="text-sm font-bold">Viewing emissions in MtCO2e</p>
        </Wrapper>
      </ContentLayout>
    </div>
  );
};

export default SmartCarbonContentPage;
