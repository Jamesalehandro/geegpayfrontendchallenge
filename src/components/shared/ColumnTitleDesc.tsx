import { HeadingProps, Text, TextProps } from '@chakra-ui/react';
import { BrandHeading } from 'components/shared/BrandHeading';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { ColumnFlexProps, IProps } from 'models/shared';
import { textStyles } from 'styles/theme/text';

interface ColumnTitleDescProps extends IProps {
  containerProps?: ColumnFlexProps;
  headingProps?: HeadingProps;
  textProps?: TextProps;
}

export const ColumnTitleDesc = ({
  containerProps,
  headingProps,
  textProps,
  title,
  desc,
}: ColumnTitleDescProps) => {
  return (
    <ColumnFlex {...containerProps}>
      <BrandHeading
        {...textStyles.body2}
        fontWeight={700}
        color='brandBlue.900'
        {...headingProps}
      >
        {title}
      </BrandHeading>

      {desc && (
        <Text textStyle='body2' color='brandBlue.900' {...textProps}>
          {desc}
        </Text>
      )}
    </ColumnFlex>
  );
};
