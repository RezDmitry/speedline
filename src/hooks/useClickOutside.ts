import React, { useEffect } from 'react';

export const useOutside = (
  isOpened: boolean,
  ref: React.RefObject<HTMLDivElement>,
  close: () => void,
) => {
  useEffect(() => {
    if (!isOpened) return;
    const handleClickOutside = (e: any) => {
      if (e.target === ref.current) {
        close();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpened]);
};
