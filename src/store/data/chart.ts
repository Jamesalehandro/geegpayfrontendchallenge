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

export type FilterKeys = 'daily' | 'weekly' | 'monthly' | 'yearly';

export const filterKeys: FilterKeys[] = [
  'daily',
  'weekly',
  'monthly',
  'yearly',
];

export const randomData: Record<FilterKeys, number[]> = {
  daily: [
    4500, 5000, 5000, 15000, 25000, 45000, 20000, 35000, 30000, 25000, 20000,
    34400,
  ],
  weekly: [
    12000, 22000, 8000, 42000, 15000, 30000, 18000, 28000, 5000, 32000, 47000,
    10000,
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
