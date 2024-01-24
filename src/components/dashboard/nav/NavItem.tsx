import Link from 'next/link';
import { Box, Center, useColorModeValue } from '@chakra-ui/react';
import { NavItemProps } from 'models/nav';
import { usePathname } from 'next/navigation';
import { BrandIcon } from 'components/shared/icons';

export const NavItem = ({ path, name }: NavItemProps) => {
  const pathname = usePathname();
  const color = useColorModeValue('#0D062D', 'white');
  const isActive = path === pathname;

  const item = (
    <Center pos='relative' width='100%'>
      <BrandIcon name={name} pathFill={isActive ? color : undefined} />

      {isActive && (
        <Box pos='absolute' right='0' top='0'>
          <BrandIcon name='active' pathFill={color} />
        </Box>
      )}
    </Center>
  );

  return (
    <>
      {path ? (
        <Link
          href={path}
          style={{
            width: '100%',
          }}
        >
          {item}
        </Link>
      ) : (
        item
      )}
    </>
  );
};
