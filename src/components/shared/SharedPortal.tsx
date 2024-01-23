import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DEFAULT_STYLES } from 'styles/globalStyles';
import { ColumnFlex } from './ColumnFlex';
import { FlexProps, BoxProps } from '@chakra-ui/react';
import { PortalId } from 'models/shared';

interface Props extends FlexProps, BoxProps {
  show?: boolean;
  onClose?: () => void;
}

export const SharedPortal = ({ children, show, onClose, ...r }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const html = document.querySelector('html') as HTMLElement;
    ref.current = document.querySelector<HTMLDivElement>('#portal');

    if (ref.current && ref.current.children.length > 0 && show) {
      html.style.height = '100%';
      html.style.overflowY = 'hidden';
    } else {
      html.style.height = 'auto';
      html.style.overflowY = 'auto';
    }

    return () => {
      ref.current = null;
    };
  }, [show]);

  return show && ref.current
    ? createPortal(
        <ColumnFlex
          w='full'
          h='full'
          overflow='hidden'
          position='fixed'
          left='0'
          top='0'
          id={PortalId.id}
          bg='transparent'
          backdropFilter='blur(2px)'
          onClick={(e: any) => {
            if (e.target.id !== PortalId.id) return;
            onClose?.();
          }}
          zIndex={r.zIndex ?? 10}
          transition={DEFAULT_STYLES.transition}
          {...r}
        >
          {children}
        </ColumnFlex>,
        ref.current
      )
    : null;
};
