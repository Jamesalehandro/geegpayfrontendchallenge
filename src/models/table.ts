import { ImageModel } from './shared';

export type PaymentStatus = 'paid' | 'refund';

export interface TableData extends ImageModel {
  username: string;
  date: string;
  amount: number;
  status: PaymentStatus;
  id: string;
}
