import Image from 'next/image';
import boxTick from 'assets/tickbox.svg';
import { Center, Circle, Grid, Text } from '@chakra-ui/react';
import { BrandFlex } from 'components/shared/BrandFlex';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { colors } from 'styles/theme/colors';
import { IProps, ImageModel } from 'models/shared';

export const Stats = () => {
  return (
    <Grid
      w={{ base: 'full', xl: '488px' }}
      gap='4'
      templateColumns={{
        base: '1fr',
        sm: 'repeat(2,1fr)',
        lg: 'repeat(4,1fr)',
        xl: 'repeat(2,1fr)',
      }}
    >
      <StatsCard img={boxTick} isPositive title='350' desc='Total Order' />

      <StatsCard
        img={boxTick}
        isPositive={false}
        title='270'
        desc='Total Refund'
      />

      <StatsCard
        img={boxTick}
        isPositive={false}
        title='1567'
        desc='Average Sales'
      />

      <StatsCard
        img={boxTick}
        isPositive
        title='$350.000'
        desc='Total income'
      />
    </Grid>
  );
};

interface StatsCardProps extends ImageModel, IProps {
  isPositive: boolean;
}

export const StatsCard = ({ img, title, desc, isPositive }: StatsCardProps) => {
  const bg = isPositive ? '#34CAA51F' : '#ED544E1F';
  const color = isPositive ? colors.brandGreen[50] : colors.error['100'];

  return (
    <ColumnFlex layerStyle='boxed' py='5' gap='4'>
      <BrandFlex>
        <Circle
          minW='2rem'
          minH='2rem'
          border='1px solid'
          borderColor='gray.200'
          p='1.5'
        >
          <Image src={img} alt='' priority quality={100} />
        </Circle>
      </BrandFlex>

      <ColumnFlex>
        <Text color='#898989' textStyle='body2'>
          {desc}
        </Text>

        <Text textStyle='subHeader' color='#3A3F51'>
          {title}
        </Text>
      </ColumnFlex>

      <BrandFlex gap='1'>
        <Center bg={bg} p='1' gap='1' rounded='10'>
          {isPositive ? (
            <TrendingUp size={12} color={colors.brandGreen[50]} />
          ) : (
            <TrendingDown size={12} color={colors.error[100]} />
          )}
          <Text
            textStyle='desc'
            color={color}
            _dark={{
              color,
            }}
          >
            23.5%
          </Text>
        </Center>

        <Text textStyle='desc' color='#606060'>
          vs. previous month
        </Text>
      </BrandFlex>
    </ColumnFlex>
  );
};
