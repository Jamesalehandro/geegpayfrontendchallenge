import { ImageModel } from 'models/shared';

export interface NavItemProps extends Partial<ImageModel> {
  pathname: string;
  path?: string;
  id: string;
  children?: NavItemProps[];
}
