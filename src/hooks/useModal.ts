import { useState } from 'react';

export const useModal = (): [boolean, () => void] => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };
  return [isModalOpened, toggleModal];
};
