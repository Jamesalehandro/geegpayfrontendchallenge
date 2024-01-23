import dashboard from 'assets/dashboard.svg';
import trend from 'assets/trend.svg';
import profile from 'assets/profile.svg';
import box from 'assets/box.svg';
import discount from 'assets/discount.svg';
import info from 'assets/info.svg';
import arrow from 'assets/arrow.svg';
import setting from 'assets/setting.svg';
import logout from 'assets/logout.svg';
import { NavItemProps } from 'models/nav';
import { nanoid } from 'nanoid';
import { Routes } from 'utils/routes';
import { LucideIcon, Sun, MoonStar } from 'lucide-react';

export const navItems: NavItemProps[] = [
  { id: nanoid(12), path: Routes.home, img: dashboard },
  { id: nanoid(12), path: Routes.trend, img: trend },
  { id: nanoid(12), path: Routes.profile, img: profile },
  { id: nanoid(12), path: Routes.box, img: box },
  { id: nanoid(12), path: Routes.discount, img: discount },
  { id: nanoid(12), path: Routes.info, img: info },
];

export const navItemFooter: NavItemProps[] = [
  { id: nanoid(12), img: arrow },
  { id: nanoid(12), path: Routes.settings, img: setting },
  { id: nanoid(12), img: logout },
];

export const colorModeItems: { icon: LucideIcon; value: 'light' | 'dark' }[] = [
  {
    icon: Sun,
    value: 'light',
  },
  {
    icon: MoonStar,
    value: 'dark',
  },
];
