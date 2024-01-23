import { IconNames, ImageModel } from 'models/shared';

export interface NavItemProps extends ImageModel {
  path?: string;
  id: string;
  name: IconNames;
}
