import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
export const useBurger = (): [boolean, () => void, (e: React.KeyboardEvent<HTMLSpanElement>) => void] => {
  const [active, setActive] = useState<boolean>(false);

  const clickHandler = (): void => {
    setActive(!active);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (e.code === 'Enter') {
      setActive(!active);
    }
  };
  return [active, clickHandler, keyDownHandler];
};

