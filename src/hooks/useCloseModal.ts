import { useEffect } from 'react';

export const useCloseModal = (isOpened: boolean, close: () => void): void => {
  useEffect(() => {
    if (!isOpened) return;
    const closeModal = (e: any): void => {
      if (e.code === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', closeModal);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('keydown', closeModal);
  }, [isOpened]);
};
