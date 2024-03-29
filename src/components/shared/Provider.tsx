'use client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { LayoutProps } from 'models/shared';
import { theme } from 'styles/theme/theme';
import { DefaultContextProvider } from 'context/DefaultContext';

export const Provider = ({ children }: LayoutProps) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <DefaultContextProvider>{children}</DefaultContextProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};
