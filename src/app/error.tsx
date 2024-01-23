'use client';
import { Button, Text } from '@chakra-ui/react';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { capitalize } from 'utils/text';

export default function GlobalError({
  reset,
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <ColumnFlex w='full' h='100vh' layerStyle='centered' gap='4'>
      <ColumnFlex align='center' maxW='400px' gap='2'>
        <Text textStyle='boldBody'>Something went wrong!</Text>

        <Text textStyle='desc' color='error.200' textAlign='center'>
          {capitalize(error.message)}
        </Text>

        <Button
          onClick={reset}
          color='white'
          size='sm'
          w='full'
          bg='brandBlue.800'
          maxW='120px'
          fontWeight={400}
        >
          Refresh
        </Button>
      </ColumnFlex>
    </ColumnFlex>
  );
}
