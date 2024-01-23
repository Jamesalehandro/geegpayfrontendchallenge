import React from 'react';
import { Circle, Stack, useColorMode } from '@chakra-ui/react';
import { colorModeItems } from 'store/data/nav';

export const ToggleColorMode = () => {
  const { setColorMode, colorMode } = useColorMode();

  const renderColorModeItems = colorModeItems.map((item) => {
    const isActive = item.value === colorMode;
    return (
      <Circle
        as='button'
        onClick={() => setColorMode(item.value)}
        key={item.value}
        bg={isActive ? 'brandGreen.50' : 'transparent'}
        color={isActive ? 'white' : 'brandGray.300'}
        p='1'
      >
        {<item.icon size={20} />}
      </Circle>
    );
  });

  return (
    <Stack
      w='40px'
      bg='white'
      _dark={{ bg: '#333' }}
      shadow='sm'
      align='center'
      rounded='100px'
      py='2'
      px='1'
    >
      {renderColorModeItems}
    </Stack>
  );
};
