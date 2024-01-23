'use client';
import { ProfileBar } from 'components/dashboard/nav/ProfileBar';
import { SideBar } from 'components/dashboard/nav/SideBar';
import { BrandFlex } from 'components/shared/BrandFlex';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { LayoutProps } from 'models/shared';

export const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <BrandFlex
      pos='relative'
      minH='100vh'
      bg='brandGray.50'
      _dark={{ bg: '#111' }}
    >
      <ProfileBar />
      <SideBar />

      <ColumnFlex
        w='full'
        minH='100vh'
        flex='1'
        pt='90px'
        pb='12'
        ml={{ base: '0', xl: '70px' }}
        px={{ base: '2', xl: '5' }}
        alignItems='center'
        zIndex={1}
        overflow='auto'
        _dark={{ bg: '#111' }}
      >
        {children}
      </ColumnFlex>
    </BrandFlex>
  );
};
