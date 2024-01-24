'use client';
import { Spinner, Text, TextProps } from '@chakra-ui/react';
import { ColumnFlexProps } from 'models/shared';
import { ColumnFlex } from './ColumnFlex';

interface Props extends ColumnFlexProps {
  loadingText?: string;
  textProp?: TextProps;
}

const LoadingComponent = ({ loadingText, textProp, ...r }: Props) => {
  return (
    <ColumnFlex w='full' layerStyle='centered' gap='5' {...r}>
      <Spinner size='xl' label='Loading...' speed='1s' thickness='3px' />

      {loadingText && (
        <Text textStyle='body2' color='brandGray.600' {...textProp}>
          {loadingText}
        </Text>
      )}
    </ColumnFlex>
  );
};

export default LoadingComponent;
