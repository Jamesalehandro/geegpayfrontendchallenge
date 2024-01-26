import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { BrandFlex } from 'components/shared/BrandFlex';
import { BrandHeading } from 'components/shared/BrandHeading';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { SharedTitle } from 'components/shared/SharedTitle';
import { useState } from 'react';
import { listDetails } from 'store/data/list';
import { DEFAULT_STYLES } from 'styles/globalStyles';
import { textStyles } from 'styles/theme/text';
import { pxToRem } from 'utils/stylesformatter/pxToRem';

export const ListDetails = () => {
  const [addMore, setAddMore] = useState(false);

  const renderPlatforms = listDetails(addMore).map((item) => (
    <Stack key={item.id}>
      <BrandHeading
        {...textStyles.title}
        color='#22242C'
        fontSize={pxToRem(16)}
      >
        {item.title}
      </BrandHeading>

      <Flex h='9px' bg='brandGray.100' _dark={{ bg: '#333' }} rounded='40'>
        <Box
          w={`${item.percentage}%`}
          bg={item.color}
          rounded='40'
          transition={DEFAULT_STYLES.transition}
        />
      </Flex>

      <BrandFlex layerStyle='spaced' color='brandGray.600' textStyle='body2'>
        <Text> ${item.price.toLocaleString()}</Text>
        <Text> +{item.increase}%</Text>
      </BrandFlex>
    </Stack>
  ));

  return (
    <ColumnFlex w={{ base: 'full', sm: '488px' }} layerStyle='boxed'>
      <SharedTitle
        title='Top Platform'
        onClick={() => setAddMore(!addMore)}
        isMore={addMore}
      />

      <Stack flex='1' gap='8'>
        {renderPlatforms}
      </Stack>
    </ColumnFlex>
  );
};
