'use client';
import { Box, Button, Text } from '@chakra-ui/react';
import { BrandHeading } from './BrandHeading';
import { ColumnFlex } from './ColumnFlex';
import { textStyles } from 'styles/theme/text';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const { back } = useRouter();

  return (
    <ColumnFlex w='full' layerStyle='centered' gap='3' px='8px' flex='1'>
      <BrandHeading {...textStyles.header}>404! Page not found</BrandHeading>

      <Text textStyle='body' textAlign='center'>
        This page might have been moved or deleted
      </Text>

      <Box width='188px' pt='6'>
        <Button w='full' bg='black' onClick={back}>
          Go Back
        </Button>
      </Box>
    </ColumnFlex>
  );
};

export default NotFound;
