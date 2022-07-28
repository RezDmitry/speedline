import { useEffect } from 'react';

export const useCloseModal = (close: () => void): void => {
  useEffect(() => {
    const closeModal = (e: any): void => {
      if (e.code === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', closeModal);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('keydown', closeModal);
  }, []);
};
