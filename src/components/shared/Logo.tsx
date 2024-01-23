import Image from 'next/image';
import logo from 'assets/logo.svg';
import { Link, LinkProps } from '@chakra-ui/next-js';
import { Routes } from 'utils/routes';

interface LogoProps extends Partial<LinkProps> {}

export const Logo = ({ ...r }: LogoProps) => {
  return (
    <Link href={Routes.home} {...r}>
      <Image src={logo} alt='' priority quality={100} />
    </Link>
  );
};
