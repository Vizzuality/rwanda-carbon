import { FC } from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { COMMON_CONTENT_CLASSES } from './constants';
import type { ModalContentProps } from './types';

export const ModalContent: FC<ModalContentProps> = ({
  children,
  className,
  floating,
  getFloatingProps,
  onOpenChange,
}: ModalContentProps) => {
  const contentFramerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    exit: {
      transition: {
        delay: 0,
        duration: 0.25,
      },
    },
  };

  return (
    <motion.div
      variants={contentFramerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cx({ [COMMON_CONTENT_CLASSES]: true, [className]: !!className })}
      {...getFloatingProps({
        ref: floating,
      })}
    >
      <div className="z-50 flex grow flex-col">
        <button
          type="button"
          onClick={() => {
            onOpenChange(false);
          }}
          className="absolute top-0 -right-12 z-10 flex h-screen translate-y-0 transform items-center overflow-y-auto bg-transparent px-4 py-4"
        >
          <Icon icon={CLOSE_SVG} className="inline-block h-3.5 w-3.5 text-white" />
        </button>

        {children}
      </div>
    </motion.div>
  );
};

export default ModalContent;
