import { PaymentStatus } from 'models/table';
import { colors } from 'styles/theme/colors';

export const formatTableColor = (status: PaymentStatus) => {
  let color: string;

  switch (status) {
    case 'paid':
      color = colors.brandGreen[50];
      break;
    case 'refund':
      color = colors.error[100];
      break;
  }

  return color;
};
