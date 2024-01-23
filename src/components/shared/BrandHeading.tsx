import { Heading, HeadingProps } from '@chakra-ui/react';
import { plusJakarta } from 'styles/fonts';

export const BrandHeading = ({ children, ...r }: HeadingProps) => {
  return (
    <Heading className={r.className ?? plusJakarta.className} {...r}>
      {children}
    </Heading>
  );
};
