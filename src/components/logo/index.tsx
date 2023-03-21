import { FC } from 'react';

import cx from 'classnames';

import { motion, AnimatePresence } from 'framer-motion';

import { SIZE } from './constants';
import type { LogoProps } from './types';

export const Logo: FC<LogoProps> = ({ size = 'sm', isAnimated = false }: LogoProps) => (
  <AnimatePresence>
    <motion.h1
      className={cx('flex flex-col text-center font-serif text-xl -tracking-wide text-white', {
        [SIZE[size]]: !!size,
      })}
      initial={{ color: '#FFFF' }}
      animate={!isAnimated ? { color: '#FFFF' } : { color: '#002E65' }}
      exit={!isAnimated ? { color: '#FFFF' } : { color: '#002E65' }}
      transition={{ delay: 1.3, duration: 0.01 }}
    >
      Invest in Rwanda
      <motion.span
        className="block"
        initial={{ color: '#FAD201' }}
        animate={!isAnimated ? { color: '#FAD201' } : { color: '#002E65' }}
        exit={!isAnimated ? { color: '#FAD201' } : { color: '#002E65' }}
        transition={{ delay: 1.3, duration: 0.01 }}
      >
        carbon credits
      </motion.span>
    </motion.h1>
  </AnimatePresence>
);

export default Logo;
