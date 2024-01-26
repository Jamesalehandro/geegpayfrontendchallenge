import React from 'react';
import { Flex, ListItem, Text } from '@chakra-ui/react';

interface Props {
  mainText: string;
  desc: string;
  color?: string;
}

export const ListItemComp = ({ mainText, desc, color }: Props) => {
  return (
    <ListItem w='full'>
      <Flex w='full' align='flex-start' py='2' gap='0.5'>
        <Text
          color='#000000D9'
          textStyle='body2'
          _dark={{ color: 'unset' }}
          fontWeight={600}
        >
          {mainText}:{' '}
        </Text>

        <Text
          color={color ?? '#3F4753'}
          _dark={{ color: color ?? 'unset' }}
          whiteSpace='pre-wrap'
          textStyle='body2'
          opacity={0.8}
          noOfLines={1}
        >
          {' '}
          {desc}
        </Text>
      </Flex>
    </ListItem>
  );
};
