import Image from 'next/image';
import { Box, BoxProps, HeadingProps } from '@chakra-ui/react';
import { BrandFlex } from 'components/shared/BrandFlex';
import { BrandHeading } from 'components/shared/BrandHeading';
import { ColumnFlexProps, IProps, ImageModel } from 'models/shared';
import { textStyles } from 'styles/theme/text';

interface ImageTextProps extends IProps, ImageModel {
  headingProps?: HeadingProps;
  containerProps?: ColumnFlexProps;
  boxProps?: BoxProps;
  fill?: boolean;
}

export const ImageText = ({
  img,
  title,
  headingProps,
  containerProps,
  boxProps,
  fill,
}: ImageTextProps) => {
  return (
    <BrandFlex gap='1' {...containerProps}>
      <Box position='relative' {...boxProps}>
        <Image src={img} alt='' priority quality={100} fill={fill} />
      </Box>

      <BrandHeading {...textStyles.desc} fontWeight={700} {...headingProps}>
        {title}
      </BrandHeading>
    </BrandFlex>
  );
};
