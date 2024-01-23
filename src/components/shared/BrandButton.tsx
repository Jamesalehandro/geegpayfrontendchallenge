import { Button, ButtonProps } from '@chakra-ui/react';

interface BrandButtonProps extends ButtonProps {}

export const BrandButton = ({ children, ...r }: BrandButtonProps) => {
  return <Button {...r}>{children}</Button>;
};
