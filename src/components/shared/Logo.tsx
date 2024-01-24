import Image from 'next/image';
import logo from 'assets/logo.svg';
import { Link, LinkProps } from '@chakra-ui/next-js';
import { Routes } from 'utils/routes';
import { useDefaultContext } from 'context/DefaultContext';

interface LogoProps extends Partial<LinkProps> {}

export const Logo = ({ ...r }: LogoProps) => {
  const { updateDefaultProps } = useDefaultContext();

  return (
    <Link
      href={Routes.home}
      {...r}
      onClick={() => updateDefaultProps(false, 'media')}
    >
      <Image src={logo} alt='' priority quality={100} />
    </Link>
  );
};
