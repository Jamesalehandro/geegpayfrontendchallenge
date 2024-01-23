import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { BrandFlex } from 'components/shared/BrandFlex';
import { BrandHeading } from 'components/shared/BrandHeading';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { SharedTitle } from 'components/shared/SharedTitle';
import { listDetails } from 'store/data/list';
import { textStyles } from 'styles/theme/text';
import { pxToRem } from 'utils/stylesformatter/pxToRem';

export const ListDetails = () => {
  const renderPlatforms = listDetails.map((item) => (
    <Stack key={item.id}>
      <BrandHeading
        {...textStyles.title}
        color='#22242C'
        fontSize={pxToRem(16)}
      >
        {item.title}
      </BrandHeading>

      <Flex h='9px' bg='brandGray.100' _dark={{ bg: '#333' }} rounded='40'>
        <Box w={`${item.percentage}%`} bg={item.color} rounded='40' />
      </Flex>

      <BrandFlex layerStyle='spaced' color='brandGray.600' textStyle='body2'>
        <Text> ${item.price.toLocaleString()}</Text>
        <Text> +{item.percentage}%</Text>
      </BrandFlex>
    </Stack>
  ));

  return (
    <ColumnFlex w={{ base: 'full', sm: '488px' }} layerStyle='boxed'>
      <SharedTitle title='Top Platform' />

      <Stack flex='1' gap='8'>
        {renderPlatforms}
      </Stack>
    </ColumnFlex>
  );
};
