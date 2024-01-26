export const monthsAbbreviations = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const yearsAbbreviations = [
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
];

export const daysAbbreviations = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export type FilterKeys = 'weekly' | 'monthly' | 'yearly';

export const filterKeys: FilterKeys[] = ['weekly', 'monthly', 'yearly'];

export const randomData: Record<FilterKeys, number[]> = {
  weekly: [
    4500, 5000, 5000, 15000, 25000, 45000, 20000, 35000, 30000, 25000, 20000,
    34400,
  ],
  monthly: [
    37000, 2000, 48000, 22000, 38000, 12000, 9000, 43000, 25000, 10000, 16000,
    42000,
  ],
  yearly: [
    32000, 28000, 15000, 10000, 42000, 35000, 18000, 5000, 30000, 24000, 17000,
    44000,
  ],
};

export const randomLabelData: Record<FilterKeys, string[]> = {
  weekly: daysAbbreviations,
  monthly: monthsAbbreviations,
  yearly: yearsAbbreviations,
};
