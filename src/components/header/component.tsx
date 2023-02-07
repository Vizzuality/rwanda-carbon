import { FC } from 'react';

import cx from 'classnames';

import Link from 'next/link';
import { useRouter } from 'next/router';

import MetaTags from 'containers/meta-tags';

import Icon from 'components/icon';
import Logo from 'components/logo';
import Tooltip from 'components/tooltip';
import RwandaReasons from 'utils/constants';

import CHEVRON_DOWN_SVG from 'svgs/ui/arrow-down.svg?sprite';

import type { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ className, ...restProps }: HeaderProps) => {
  const { pathname } = useRouter();
  return (
    <header className={className} {...restProps}>
      <MetaTags title="Rwanda Carbon Tracker" description="" type="website" />
      <div className="flex items-center justify-between p-3">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <div className="flex items-center justify-between space-x-4">
          <Link
            href="/positive-impacts"
            className={cx(
              'flex items-center justify-center rounded-3xl border border-yellow-0 px-6 py-2 font-bold',
              {
                'bg-yellow-0 text-blue-1 hover:bg-transparent hover:text-yellow-0 active:border-yellow-0 active:bg-transparent':
                  pathname?.includes('positive-impacts'),
                'text-yellow-0': !pathname?.includes('positive-impacts'),
              }
            )}
          >
            Positive impacts
          </Link>
          <Tooltip
            placement="bottom-start"
            trigger="hover"
            content={
              <div className="rounded-3xl bg-white p-8">
                <ul>
                  {RwandaReasons.map(({ slug, name }) => (
                    <li key={slug} className="pb-4 font-bold text-blue-1 last-of-type:pb-0">
                      <Link href={`/why-rwanda/${slug}`} as={`/why-rwanda/${slug}`}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            }
          >
            <Link
              href="/why-rwanda"
              className={cx(
                'box-border flex items-center space-x-4 divide-x-2 rounded-3xl border border-green-0 py-2 font-bold',
                {
                  'divide-green-1 bg-green-0 text-blue-1 hover:divide-green-0 hover:border-green-0 hover:bg-white hover:text-green-0':
                    pathname?.includes('why-rwanda'),
                  'divide-green-0 bg-transparent text-green-0 hover:divide-green-1 hover:border-green-0 hover:bg-green-0 hover:text-blue-1':
                    !pathname?.includes('why-rwanda'),
                }
              )}
            >
              <p className="pl-6">Why Rwanda</p>
              <span className="m-auto h-full px-4">
                <Icon icon={CHEVRON_DOWN_SVG} className={'mt-1 h-3 w-4'} />
              </span>
            </Link>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};

export default Header;
