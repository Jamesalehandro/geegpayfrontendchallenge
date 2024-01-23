import {
  ComponentSingleStyleConfig,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';
import { pxToRem } from 'utils/stylesformatter/pxToRem';
import { rgba } from 'utils/stylesformatter/rgba';

// Sizes
const l = defineStyle({
  px: '16px',
  py: '12px',
  h: '40px',
});

const xl = defineStyle({
  px: '24px',
  py: '14px',
});

const xxl = defineStyle({
  px: '24px',
  py: '14px',
  h: '60px',
});

// Variants
const bg = defineStyle({
  color: 'white',
  bg: 'brandBlue.shinyBlue',
  fontWeight: 700,
  _disabled: {
    color: 'white',
    bg: 'brandBlue.700',
    opacity: 0.2,
  },
  _hover: {
    _disabled: {
      color: 'white',
      bg: 'brandBlue.700',
      opacity: 0.2,
    },
  },
});

const yellow = defineStyle({
  color: '#1350C7',
  bg: 'brandYellow.600',
  _disabled: {
    color: '#1350C7',
    bg: 'brandYellow.600',
    opacity: 0.2,
  },
  _hover: {
    _disabled: {
      color: '#1350C7',
      bg: 'brandYellow.600',
      opacity: 0.2,
    },
  },
});

const text = defineStyle((_) => ({
  background: 'transparent',
  p: '0',
  width: 'max-content',
  h: 'max-content',
  mt: '1',
  color: 'brandBlue.700',
}));

const transparent = defineStyle((_) => ({
  background: rgba('white', 0.2),
  color: 'white',
}));

export const buttonTheme: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    transition: DEFAULT_STYLES.transition,
    h: pxToRem(48),
    fontWeight: 500,
    fontSize: pxToRem(14),
    _hover: {
      opacity: 0.8,
      _disabled: {
        opacity: 0.8,
        bg: 'gray.300',
      },
    },
  },

  sizes: { l, xl, xxl },

  variants: {
    bg,
    text,
    transparent,
    yellow,
  },
  defaultProps: {
    size: 'xxl',
    variant: 'bg',
  },
});
