import { Flex } from '@chakra-ui/react';
import { ColumnFlexProps } from 'models/shared';

export const BrandFlex = ({ children, ...r }: ColumnFlexProps) => {
  return (
    <Flex layerStyle={r.layerStyle ?? 'flex'} {...r}>
      {children}
    </Flex>
  );
};
