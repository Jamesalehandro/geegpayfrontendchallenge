import { ColumnFlex } from 'components/shared/ColumnFlex';
import {
  FilterKeys,
  filterKeys,
  randomData,
  randomLabelData,
} from 'store/data/chart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { plusJakarta } from 'styles/fonts';
import { BrandFlex } from 'components/shared/BrandFlex';
import { BrandHeading } from 'components/shared/BrandHeading';
import { textStyles } from 'styles/theme/text';
import { Select, Text, useMediaQuery } from '@chakra-ui/react';
import { pxToRem } from 'utils/stylesformatter/pxToRem';
import { capitalize } from 'utils/text';
import { useState } from 'react';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const MainChart = () => {
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        suggestedMax: 50000,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#090C2C',
        bodyFontFamily: plusJakarta.style.fontFamily,
        bodyFontSize: 14,
        bodyFontColor: '#fff',
        borderColor: 'transparent',
        borderWidth: 0,
        cornerRadius: 5,
        displayColors: false,
        yAlign: 'bottom' as any,
        callbacks: {
          label: (context: any) => {
            const value = context.parsed.y;
            return '$' + value.toLocaleString();
          },
          title: () => {
            return '';
          },
        },
      },
    },
  };
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const [filterKey, setFilterKey] = useState<FilterKeys>('weekly');

  const renderOptions = filterKeys.map((item) => (
    <option value={item} key={item}>
      {capitalize(item)}
    </option>
  ));

  return (
    <ColumnFlex flex='1' layerStyle='boxed' overflowX='auto'>
      <BrandFlex layerStyle='spaced' wrap='wrap'>
        <BrandHeading {...textStyles.title}>Sales Trends</BrandHeading>

        <BrandFlex gap='2'>
          <Text color='#3A3F51' textStyle='body2' flexShrink='0'>
            Sort by:
          </Text>

          <Select
            bg='white'
            size='sm'
            _dark={{ bg: '#222' }}
            rounded='24'
            fontSize={pxToRem(14)}
            _placeholder={{
              color: 'brandGray.400',
              _dark: { color: 'whiteAlpha.400' },
              fontSize: '14px',
            }}
            value={filterKey}
            onChange={(e) => setFilterKey(e.target.value as FilterKeys)}
          >
            {renderOptions}
          </Select>
        </BrandFlex>
      </BrandFlex>

      <div>
        <Bar
          data={{
            datasets: [
              {
                data: randomData[filterKey],
                borderWidth: 0,
                backgroundColor: Array(12).fill('#34CAA51A'),
                borderRadius: {
                  topLeft: 30,
                  topRight: 30,
                },
                hoverBackgroundColor: '#34CAA5',
                hoverBorderColor: '#34CAA500',
                barThickness: isLargerThan768 ? 30 : undefined,
              },
            ],
            labels: randomLabelData[filterKey],
          }}
          options={options}
          style={{ width: '100%', maxHeight: '374px', height: '374px' }}
        />
      </div>
    </ColumnFlex>
  );
};
