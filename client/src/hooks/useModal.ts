import { useState } from 'react';

export const useModal = (): [boolean, () => void] => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const toggleClickModal = () => {
    setIsModalOpened(!isModalOpened);
  };
  return [isModalOpened, toggleClickModal];
};
