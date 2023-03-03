import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import MetaTags from 'containers/meta-tags';
import Wrapper from 'containers/why-rwanda';
import WhyRwandaTitleLayout from 'containers/why-rwanda/title';

import Header from 'components/header';
import NavigationButtons from 'components/navigation-buttons';
import ContentLayout from 'layouts/content';

const SustainableLandUseContentPage: FC = () => (
  <div>
    <div>
      <MetaTags
        title="Rwanda Carbon Tracker - Sustainable land use"
        description=""
        type="website"
      />
      <Header />
    </div>
    <ContentLayout>
      <Wrapper>
        <WhyRwandaTitleLayout className="max-w-lg pr-5">Sustainable land use</WhyRwandaTitleLayout>
        <article className="max-w-md text-xl">
          Numerous wetland and forest conservation areas illustrate Rwanda’s environmental
          integrity. With sustainable agroforestry drives and forestry training schemes underway,
          the future home of Africa’s first green city is set to preserve and regreen its
          magnificent landscapes.
        </article>
        <NavigationButtons previous="smart-carbon" next="renewable-water-sources" />
      </Wrapper>
    </ContentLayout>
  </div>
);

export default SustainableLandUseContentPage;
