import { CustomIconProps, IconNames } from 'models/shared';

export interface BrandIconProps extends CustomIconProps {
  name?: IconNames;
}
export const BrandIcon = ({ name, ...rest }: BrandIconProps) => {
  if (!name) return null;
  // @ts-ignore
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const Icon = require(`components/shared/icons/${name}.tsx`).default;
  if (!Icon) return null;
  return <Icon {...rest} />;
};
