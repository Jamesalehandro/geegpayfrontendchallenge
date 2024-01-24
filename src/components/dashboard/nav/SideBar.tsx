import { BrandFlex } from 'components/shared/BrandFlex';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { Logo } from 'components/shared/Logo';
import { useDefaultContext } from 'context/DefaultContext';
import { navItemFooter, navItems } from 'store/data/nav';
import { DEFAULT_STYLES } from 'styles/globalStyles';
import { NavItem } from './NavItem';
import { ToggleColorMode } from '../toggle/ColorModeToggle';

export const SideBar = () => {
  const { mediaQuery, updateDefaultProps } = useDefaultContext();

  const renderTopNavItems = navItems.map((item) => (
    <NavItem key={item.id} {...item} />
  ));

  const renderBottomNavItems = navItemFooter.map((item) => (
    <NavItem key={item.id} {...item} />
  ));

  return (
    <BrandFlex
      w={{ base: '100%', xl: 'max-content' }}
      height='100vh'
      pos='fixed'
      id='side-bar'
      zIndex={5}
      top='0'
      onClick={(e: any) => {
        if (e.target.id !== 'side-bar') return;
        updateDefaultProps(false, 'media');
      }}
      transform={{
        base: `translate( ${mediaQuery ? '0%' : '-300%'})`,
        xl: 'translate(0px)',
      }}
    >
      <ColumnFlex
        w={{ base: mediaQuery ? '60px' : '0', xl: '60px' }}
        height='full'
        position='fixed'
        transition={DEFAULT_STYLES.transition}
        pb='20'
        pt='4'
        align='center'
        bg='brandGray.50'
        borderRight='1px solid'
        borderColor='gray.200'
        _dark={{
          bg: '#111',
          borderRight: '1px solid',
          borderColor: 'whiteAlpha.400',
        }}
      >
        <Logo />

        <ColumnFlex
          w='100%'
          flex='1'
          mt='5'
          overflowY='auto'
          overflowX='hidden'
          align='center'
          gap='7'
          mb='20'
        >
          {renderTopNavItems}

          <ToggleColorMode />
        </ColumnFlex>

        <ColumnFlex w='full' align='center' gap='7' mb='10'>
          {renderBottomNavItems}
        </ColumnFlex>
      </ColumnFlex>
    </BrandFlex>
  );
};
