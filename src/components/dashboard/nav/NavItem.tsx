import Image from 'next/image';
import Link from 'next/link';
import active from 'assets/active.svg';
import { Center } from '@chakra-ui/react';
import { NavItemProps } from 'models/nav';
import { usePathname } from 'next/navigation';

export const NavItem = ({ img, path }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = path === pathname;

  const item = (
    <Center pos='relative' width='100%'>
      <Image
        src={img}
        alt=''
        priority
        quality={100}
        style={{
          cursor: 'pointer',
        }}
      />

      {isActive && (
        <Image
          src={active}
          alt=''
          style={{
            position: 'absolute',
            right: '0',
            top: '0',
          }}
        />
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
