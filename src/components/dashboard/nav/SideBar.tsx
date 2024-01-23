import { BrandFlex } from 'components/shared/BrandFlex';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { useDefaultContext } from 'context/DefaultContext';
import { DEFAULT_STYLES } from 'styles/globalStyles';

export const SideBar = () => {
  const { mediaQuery, updateDefaultProps } = useDefaultContext();

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
      transition={DEFAULT_STYLES.transition}
      transform={{
        base: `translate( ${mediaQuery ? '0%' : '-300%'})`,
        xl: 'translate(0px)',
      }}
    >
      <ColumnFlex
        w='60px'
        height='full'
        position='fixed'
        transition={DEFAULT_STYLES.transition}
        pb='6'
        bg='brandGray.50'
        borderRight='1px solid'
        borderColor='gray.200'
      >
        <ColumnFlex
          w='100%'
          flex='1'
          overflowY='auto'
          overflowX='hidden'
          mt='8'
          className={DEFAULT_STYLES.hideScroll}
          align='center'
          alignSelf='center'
          gap='2'
        ></ColumnFlex>
      </ColumnFlex>
    </BrandFlex>
  );
};
