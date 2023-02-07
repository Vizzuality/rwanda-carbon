import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import MetaTags from 'containers/meta-tags';

import { THEME, SIZE } from 'components/button/constants';
import Header from 'components/header';
import WhyRwandaLayout from 'layouts/why-rwanda';
import WhyRwandaTitleLayout from 'layouts/why-rwanda/title';

const CarbonReductionContentPage: FC = () => {
  return (
    <div className="box-content flex min-h-screen flex-col">
      <div>
        <MetaTags title="Rwanda Carbon Tracker - Carbon reduction" description="" type="website" />
        <Header />
      </div>
      <WhyRwandaLayout className="max-w-sm">
        <WhyRwandaTitleLayout>Carbon reduction goal</WhyRwandaTitleLayout>
        <article className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies
          vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit
          non mi porta gravida at metus.
        </article>
        <div>
          <Link className={cx(THEME.white, SIZE.l)} href="/why-rwanda/land-use">
            Next
          </Link>
        </div>
      </WhyRwandaLayout>
    </div>
  );
};

export default CarbonReductionContentPage;
