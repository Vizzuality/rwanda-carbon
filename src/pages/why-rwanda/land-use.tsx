import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import MetaTags from 'containers/meta-tags';

import { THEME, SIZE } from 'components/button/constants';
import Header from 'components/header';
import WhyRwandaLayout from 'layouts/why-rwanda';
import WhyRwandaTitleLayout from 'layouts/why-rwanda/title';

const LandUseContentPage: FC = () => (
  <div>
    <div>
      <MetaTags title="Rwanda Carbon Tracker" description="" type="website" />
      <Header />
    </div>
    <WhyRwandaLayout>
      <WhyRwandaTitleLayout className="max-w-lg">
        Land used according to the National Land Use and Development Master Plan
      </WhyRwandaTitleLayout>
      <div>
        <Link className={cx(THEME.blue, SIZE.l)} href="/why-rwanda/renewable-water">
          Next
        </Link>
      </div>
    </WhyRwandaLayout>
  </div>
);

export default LandUseContentPage;
