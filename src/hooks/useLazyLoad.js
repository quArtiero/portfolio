import { useEffect } from 'react';

export function useLazyLoad(callback) {
  useEffect(() => {
    let mounted = true;
    requestIdleCallback(() => {
      if (mounted) callback();
    });
    return () => { mounted = false; };
  }, [callback]);
}
