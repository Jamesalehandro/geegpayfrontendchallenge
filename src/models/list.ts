import { IProps } from './shared';

export interface ListDetails extends Pick<IProps, 'title'> {
  color: string;
  price: number;
  percentage: number;
  id: string;
  increase: number;
}
