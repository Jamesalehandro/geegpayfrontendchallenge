import { ImageModel } from 'models/shared';

export interface NavItemProps extends ImageModel {
  path?: string;
  id: string;
}
