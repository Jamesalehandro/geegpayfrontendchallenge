'use client';
import { Box, Button, Text } from '@chakra-ui/react';
import { BrandHeading } from './BrandHeading';
import { ColumnFlex } from './ColumnFlex';
import { textStyles } from 'styles/theme/text';
import { useRouter } from 'next/navigation';
import error404 from 'assets/error-404.gif';
import Image from 'next/image';

const NotFound = () => {
  const { back } = useRouter();

  return (
    <ColumnFlex w='full' layerStyle='centered' gap='3' px='8px' flex='1'>
      <Image src={error404} alt='' quality={100} />
      <BrandHeading {...textStyles.header}>404! Page not found</BrandHeading>

      <Text textStyle='body' textAlign='center'>
        This page might have been moved or deleted
      </Text>

      <Box width='188px' pt='6'>
        <Button w='full' bg='black' color='white' onClick={back}>
          Go Back
        </Button>
      </Box>
    </ColumnFlex>
  );
};

export default NotFound;
