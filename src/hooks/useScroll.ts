import { useCallback, useEffect, useState } from 'react';

export const useScroll = (threshold: number = 10) => {
  const [scroll, setScroll] = useState(false);

  const scrollHandler = useCallback(() => {
    if (window.scrollY >= threshold) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler, threshold]);

  return scroll;
};
