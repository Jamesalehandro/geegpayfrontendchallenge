import { pxToRem } from 'utils/stylesformatter/pxToRem';

export const breakpoints = {
  base: '0rem',
  sm: '32rem',
  xsm: pxToRem(700),
  md: '48rem',
  xmd: pxToRem(800),
  lg: '62rem',
  xlg: pxToRem(1080),
  xl: '80rem',
  sxl: pxToRem(1320),
  xxl: '90rem',
  '2xl': '96rem',
};
