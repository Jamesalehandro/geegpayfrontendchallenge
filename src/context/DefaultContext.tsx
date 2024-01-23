'use client';
import { LayoutProps } from 'models/shared';
import { usePathname } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type ToUpdate = 'media';

interface DefaultContextProps {
  mediaQuery: boolean;
  expand?: boolean;
  updateDefaultProps: (b: boolean, type: ToUpdate) => void;
}

const DefaultContext = createContext<DefaultContextProps | null>(null);

export const DefaultContextProvider = ({ children }: LayoutProps) => {
  const [mediaQuery, setMediaQuery] = useState(false);

  const pathname = usePathname();

  const updateDefaultProps = useCallback((b: boolean, type: ToUpdate) => {
    switch (type) {
      case 'media':
        setMediaQuery(b);
        break;
    }
  }, []);

  useEffect(() => {
    updateDefaultProps(false, 'media');
  }, [pathname, updateDefaultProps]);

  return (
    <DefaultContext.Provider value={{ mediaQuery, updateDefaultProps }}>
      {children}
    </DefaultContext.Provider>
  );
};

export function useDefaultContext() {
  const defaultContext = useContext(DefaultContext);
  if (defaultContext) return defaultContext;

  throw new Error('User not not in the default context');
}
