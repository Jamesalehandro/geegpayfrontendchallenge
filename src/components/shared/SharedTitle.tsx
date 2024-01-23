import { Button } from '@chakra-ui/react';
import { textStyles } from 'styles/theme/text';
import { BrandFlex } from './BrandFlex';
import { BrandHeading } from './BrandHeading';

interface SharedTitleProps {
  title: string;
}

export const SharedTitle = ({ title }: SharedTitleProps) => {
  return (
    <BrandFlex layerStyle='spaced'>
      <BrandHeading {...textStyles.title}>{title}</BrandHeading>
      <Button variant='text'>See all</Button>
    </BrandFlex>
  );
};
