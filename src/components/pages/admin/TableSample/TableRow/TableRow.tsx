import React from 'react';

import styles from './TableRow.module.scss';

interface ITableRowProps {
  array: any [],
  id: string,
}

const TableRow = ({ array, id }: ITableRowProps) => (
  <div className={styles.wrapper}>
    <input id={id} type="checkbox" className={styles.checkbox} />
    <label className={styles.row} style={{ gridTemplateColumns: `repeat(${array.length - 1}, 1fr)` }} htmlFor={id}>
      {array.map((elem, i) => (i !== 0) && <div key={Math.random()}>{elem.toString()}</div>)}
    </label>
  </div>
);

export default TableRow;
