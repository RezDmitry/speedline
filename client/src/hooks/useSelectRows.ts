import React, { useState } from 'react';

import { IEntity } from '../typings/IEntity';

export const useSelectRows = (): [
  IEntity [], (element: IEntity) => void, (e: React.ChangeEvent<HTMLInputElement>,
  array: IEntity []) => void, () => void,
] => {
  const [selected, setSelected] = useState<IEntity []>([]);
  const toggleRow = (element: IEntity) => {
    if (selected.some((elem) => element._id === elem._id)) {
      setSelected((prev) => prev.filter((elem) => element._id !== elem._id));
    } else {
      setSelected((prev) => prev.concat(element));
    }
  };
  const toggleAllRows = (e: React.ChangeEvent<HTMLInputElement>, array: IEntity []) => {
    if (e.currentTarget.checked) {
      setSelected(array);
    } else {
      setSelected([]);
    }
  };
  const clearSelected = () => {
    setSelected([]);
  };
  return [selected, toggleRow, toggleAllRows, clearSelected];
};
