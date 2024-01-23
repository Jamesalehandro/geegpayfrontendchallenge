import { FlexProps, BoxProps, ResponsiveValue } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { textStyles } from 'styles/theme/text';

export type ImageModel = { img: StaticImageData | string };

export interface LayoutProps {
  children?: ReactNode;
}

export interface IProps {
  title?: string;
  desc?: ReactNode;
}

export interface Reset {
  reset: () => void;
}

export type UpdateActions<P> = {
  update: <T>(key: keyof P, value: T) => void;
};

export enum PortalId {
  id = 'portal_div',
}

export interface ColumnFlexProps extends FlexProps, BoxProps {}

export type TextStyle = keyof typeof textStyles;

export type ResponsiveTextStyle = ResponsiveValue<TextStyle>;
