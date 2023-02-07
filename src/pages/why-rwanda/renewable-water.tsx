import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import MetaTags from 'containers/meta-tags';

import { THEME, SIZE } from 'components/button/constants';
import Header from 'components/header';
import WhyRwandaLayout from 'layouts/why-rwanda';
import WhyRwandaTitleLayout from 'layouts/why-rwanda/title';

const RenewableWaterContentPage: FC = () => (
  <div>
    <div>
      <MetaTags title="Rwanda Carbon Tracker" description="" type="website" />
      <Header />
    </div>
    <WhyRwandaLayout>
      <WhyRwandaTitleLayout className="max-w-lg">
        Renewable water resource availability
      </WhyRwandaTitleLayout>
      <article className="max-w-md text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies
        vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non
        mi porta gravida at metus.
      </article>
      <div>
        <Link className={cx(THEME.white, SIZE.l)} href="/why-rwanda/renewable-water">
          Next
        </Link>
      </div>
    </WhyRwandaLayout>
  </div>
);

export default RenewableWaterContentPage;
