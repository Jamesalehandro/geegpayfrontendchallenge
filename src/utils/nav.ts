import { NavItemProps } from 'models/nav';

export const returnValidPaths = (navProps: NavItemProps[]) => {
  const paths: string[] = [];

  navProps.forEach((navProp) => {
    if (navProp.children) {
      const childPaths = returnValidPaths(navProp.children);
      paths.push(...childPaths);
    }

    if (navProp.path) {
      paths.push(navProp.path.split('?')[0]);
    }
  });

  return paths;
};

export const activePath = (route: string, path: string) => {
  const splitRoute = route.split('/').slice(1);
  const splitPath = path?.split('/').slice(1);

  if (splitPath && splitRoute) {
    const pathStr = splitPath.join('');
    const routeStr = splitRoute.join('');

    if (splitRoute.length > 1 && splitPath.length > 1) {
      return routeStr.includes(pathStr);
    } else if (splitPath.length <= 1 && splitRoute.length <= 1) {
      return pathStr.includes(routeStr);
    } else if (splitPath.length <= 1 && splitRoute.length > 1) {
      return splitRoute.includes(pathStr);
    }
  }

  return false;
};

export const pathnameContainsPath = (paths: string[], pathname: string) =>
  paths.filter((e) => pathname.includes(e)).length >= 1;
