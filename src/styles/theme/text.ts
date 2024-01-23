import { TypographyProps } from '@chakra-ui/react';
import { pxToRem } from 'utils/stylesformatter/pxToRem';

const sharedTransform = 'uppercase' as TypographyProps['textTransform'];
/** This can be extended to add additional text styles to the project */

export const textStyles = {
  header: {
    fontSize: { base: pxToRem(30), md: pxToRem(48) },
    lineHeight: 1.5,
    fontWeight: 700,
    textTransform: sharedTransform,
  },
  headerAlt: {
    fontSize: { base: '1.7rem', md: pxToRem(35) },
    lineHeight: 1.5,
    fontWeight: 700,
    textTransform: sharedTransform,
  },
  sectionHeader: {
    fontSize: { base: pxToRem(24), md: pxToRem(32) },
    lineHeight: 1.3,
    fontWeight: 600,
    textTransform: sharedTransform,
  },
  subHeader: {
    fontSize: { base: pxToRem(20), md: pxToRem(24) },
    lineHeight: 1.3,
    fontWeight: 600,
    textTransform: sharedTransform,
  },
  title: {
    fontSize: { base: pxToRem(18), md: pxToRem(20) },
    lineHeight: 1.3,
    fontWeight: 600,
    textTransform: sharedTransform,
  },
  subtitle: {
    fontSize: pxToRem(18),
    lineHeight: 1.3,
    fontWeight: 500,
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  body: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  boldBody: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: pxToRem(14),
    fontWeight: 400,
    lineHeight: 1.5,
  },
  boldBody2: {
    fontSize: pxToRem(14),
    fontWeight: 700,
    lineHeight: 1.5,
  },
  desc: {
    fontSize: pxToRem(12),
    lineHeight: 1.6,
    fontWeight: 400,
  },
  boldDesc: {
    fontSize: pxToRem(12),
    lineHeight: 1.5,
    fontWeight: 700,
  },
  tiny: {
    fontSize: pxToRem(10),
    fontWeight: 400,
    lineHeight: 1.5,
  },
  xs: {
    fontSize: pxToRem(8),
    fontWeight: 400,
    lineHeight: 1.5,
  },
};
