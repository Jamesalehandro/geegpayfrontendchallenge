import {
  ComponentSingleStyleConfig,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';
import { pxToRem } from 'utils/stylesformatter/pxToRem';
import { colors } from './colors';

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

const text = defineStyle((_) => ({
  background: 'transparent',
  p: '0',
  width: 'max-content',
  h: 'max-content',
  color: colors.brandGreen['50'],
  textTransform: 'capitalize',
}));

export const buttonTheme: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    transition: DEFAULT_STYLES.transition,
    h: pxToRem(48),
    fontWeight: 500,
    fontSize: pxToRem(16),
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
    text,
  },
  defaultProps: {
    size: 'xl',
  },
});
