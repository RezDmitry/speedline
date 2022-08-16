import { useEffect } from 'react';

export const useCloseModal = (close: () => void): void => {
  useEffect(() => {
    const closeModal = (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, []);
};
