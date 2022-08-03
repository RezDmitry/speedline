import React from 'react';
import { useNavigate } from 'react-router-dom';

import { addPic } from './addPic';

import styles from './TableRow.module.scss';

interface ITableRowProps {
  array: any [],
  id: string,
  link?: string,
  selectRow?: () => void,
  // eslint-disable-next-line no-unused-vars
  selectAllRows?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  isSelected?: boolean,
}

const TableRow = ({
  array, id, link, selectRow, isSelected, selectAllRows,
}: ITableRowProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        type="checkbox"
        className={styles.checkbox}
        checked={isSelected}
        onChange={selectAllRows || selectRow}
      />
      <label className={styles.row} style={{ gridTemplateColumns: `repeat(${array.length - 1}, 1fr)` }} htmlFor={id}>
        {array.map((elem, i) => (i !== 0) && (
          (i === 1 && link)
            ? <div key={elem + i} onClick={() => navigate(link)} className={styles.link}>{elem.toString()}</div>
            : <div key={elem + i}>{addPic(elem)}</div>))}
      </label>
    </div>
  );
};

export default TableRow;
