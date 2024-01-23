import { Flex } from '@chakra-ui/react';
import { ColumnFlexProps } from 'models/shared';

export const ColumnFlex = ({ children, ...r }: ColumnFlexProps) => {
  return (
    <Flex direction={r.direction ?? 'column'} {...r}>
      {children}
    </Flex>
  );
};
