import { useState } from 'react';

export const useSelectRows = (): [any [], (element: any) => void, () => void] => {
  const [selected, setSelected] = useState<any []>([]);
  const toggleRow = (element: any) => {
    if (selected.some((elem) => element._id === elem._id)) {
      setSelected((prev) => prev.filter((elem) => element._id !== elem._id));
    } else {
      setSelected((prev) => prev.concat(element));
    }
  };
  const clearSelected = () => {
    setSelected([]);
  };
  return [selected, toggleRow, clearSelected];
};
