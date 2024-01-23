import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './button';
import { textStyles } from './text';
import { layerStyles } from './layer';
import { colors } from './colors';
import { breakpoints } from './breakpoints';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  components: {
    Button: buttonTheme,
  },
  colors,
  textStyles,
  layerStyles,
  breakpoints,
  config,
});
