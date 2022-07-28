import React, { useEffect } from 'react';

export const useOutside = (
  ref: React.RefObject<HTMLDivElement>,
  close: () => void,
) => {
  useEffect(() => {
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
  }, []);
};
