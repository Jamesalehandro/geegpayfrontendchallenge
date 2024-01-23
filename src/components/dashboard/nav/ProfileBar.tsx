import { BrandFlex } from 'components/shared/BrandFlex';
import { useDefaultContext } from 'context/DefaultContext';
import { useScroll } from 'hooks/useScroll';

export function ProfileBar() {
  const scroll = useScroll(20);
  const { updateDefaultProps } = useDefaultContext();

  return (
    <BrandFlex
      w='full'
      pos='fixed'
      zIndex={2}
      minH='70px'
      maxH='80px'
      top='0'
      pl={{ base: '0', xl: '199px' }}
      px={{ base: '2', xl: '5' }}
      justify={{ base: 'space-between', xl: 'flex-end' }}
      shadow={scroll ? '0px 1px 15px 0px #0000000D' : 'none'}
      backdropFilter={scroll ? 'saturate(200%) blur(30px)' : 'none'}
      bg='brandGray.50'
      borderBottom='1px solid'
      borderColor='gray.200'
      onClick={() => {
        updateDefaultProps(true, 'media');
      }}
    ></BrandFlex>
  );
}
