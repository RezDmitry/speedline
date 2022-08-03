import React, { useEffect, useState } from 'react';

export const useSelectRows = (array: any [], filter: string, prepareData: () => void) => {
  const [selected, setSelected] = useState<any []>([]);
  const changeSelect = (item: any) => {
    if (selected.some((elem) => item.id === elem.id)) {
      setSelected((prev) => prev.filter((elem) => item.id !== elem.id));
    } else {
      setSelected((prev) => prev.concat(item));
    }
  };
  const selectAllRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.checked) {
      setSelected([]);
    } else {
      setSelected(array);
    }
  };
  const checkSelection = (item: any) => selected.some((elem: any) => item.id === elem.id);
  useEffect(() => {
    prepareData();
  }, [filter]);
  return [
    changeSelect,
    selectAllRows,
    checkSelection,
  ];
};
