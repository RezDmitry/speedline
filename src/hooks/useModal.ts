import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
export const useModal = (): [boolean, () => void] => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const toggleClickModal = () => {
    setIsModalOpened(!isModalOpened);
  };
  return [isModalOpened, toggleClickModal];
};
