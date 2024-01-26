import { Button } from '@chakra-ui/react';
import { textStyles } from 'styles/theme/text';
import { BrandFlex } from './BrandFlex';
import { BrandHeading } from './BrandHeading';

interface SharedTitleProps {
  title: string;
  onClick?: () => void;
  isMore: boolean;
}

export const SharedTitle = ({ title, onClick, isMore }: SharedTitleProps) => {
  return (
    <BrandFlex layerStyle='spaced'>
      <BrandHeading {...textStyles.title}>{title}</BrandHeading>
      <Button variant='text' onClick={onClick}>
        {isMore ? 'See less' : 'See all'}
      </Button>
    </BrandFlex>
  );
};
