import ERROR_SVG from 'svgs/notifications/error.svg?sprite';
import INFO_SVG from 'svgs/notifications/info.svg?sprite';
import SUCCESS_SVG from 'svgs/notifications/success.svg?sprite';
import WARNING_SVG from 'svgs/notifications/warning.svg?sprite';

import type { ToastTheme } from './types';

// eslint-disable-next-line import/prefer-default-export
export const THEME: ToastTheme = {
  info: {
    icon: INFO_SVG,
    bg: 'from-cobalt-400 to-cobalt-700',
    hoverBg: 'from-cobalt-000 to-cobalt-400',
  },
  success: {
    icon: SUCCESS_SVG,
    bg: 'from-green-400 to-green-700',
    hoverBg: 'from-green-100 to-green-400',
  },
  warning: {
    icon: WARNING_SVG,
    bg: 'from-yellow-400 to-yellow-700',
    hoverBg: 'from-yellow-100 to-yellow-400',
  },
  error: {
    icon: ERROR_SVG,
    bg: 'from-red-400 to-red-700',
    hoverBg: 'from-red-100 to-red-400',
  },
};
