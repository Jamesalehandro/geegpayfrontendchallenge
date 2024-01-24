import { ColumnFlex } from 'components/shared/ColumnFlex';
import { monthsAbbreviations } from 'store/data/chart';
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

  return (
    <ColumnFlex flex='1' layerStyle='boxed' overflowX='auto'>
      <div>
        <Bar
          data={{
            datasets: [
              {
                data: [
                  4500, 5000, 5000, 15000, 25000, 45000, 20000, 35000, 30000,
                  25000, 20000, 34400,
                ],
                borderWidth: 0,
                backgroundColor: Array(12).fill('#34CAA51A'),
                borderRadius: {
                  topLeft: 30,
                  topRight: 30,
                },
                barThickness: 30,
                hoverBackgroundColor: '#34CAA5',
                hoverBorderColor: '#34CAA500',
              },
            ],
            labels: monthsAbbreviations,
          }}
          options={options}
          style={{ width: '100%', maxHeight: '374px', height: '374px' }}
        />
      </div>
    </ColumnFlex>
  );
};
