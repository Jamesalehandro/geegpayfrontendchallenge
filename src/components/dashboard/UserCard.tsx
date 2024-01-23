import Image from 'next/image';
import profileUser from 'assets/profileuser.svg';
import { BrandFlex } from 'components/shared/BrandFlex';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { Text, useMediaQuery } from '@chakra-ui/react';
import { ChevronDownIcon } from 'lucide-react';

export const UserCard = () => {
  const [isLessThan768] = useMediaQuery('(max-width: 768px)', {
    ssr: true,
    fallback: false,
  });

  const size = isLessThan768 ? 30 : undefined;

  return (
    <BrandFlex gap={{ base: '1', md: '3' }}>
      <Image
        src={profileUser}
        alt=''
        priority
        quality={100}
        width={size}
        height={size}
      />
      <ColumnFlex align='flex-start' display={{ base: 'none', md: 'flex' }}>
        <Text color='#26282C' _dark={{ color: 'white' }} textStyle='desc'>
          Justin Bergson
        </Text>
        <Text color='#26282C' _dark={{ color: 'white' }} textStyle='desc'>
          Justin@gmail.com
        </Text>
      </ColumnFlex>

      <ChevronDownIcon />
    </BrandFlex>
  );
};
