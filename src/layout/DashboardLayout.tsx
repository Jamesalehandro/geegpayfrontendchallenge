'use client';

import { BrandFlex } from 'components/shared/BrandFlex';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { LayoutProps } from 'models/shared';

export const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <BrandFlex pos='relative' minH='100vh' bg='brandPurple.20'>
      <ColumnFlex
        w='full'
        minH='100vh'
        flex='1'
        pt='90px'
        pb='12'
        ml={{ base: '0' }}
        px={{ base: '2', xl: '0' }}
        alignItems='center'
        zIndex={1}
        overflow='auto'
      >
        {children}
      </ColumnFlex>
    </BrandFlex>
  );
};
