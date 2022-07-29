import React from 'react';

import styles from './TableRow.module.scss';

interface ITableRowProps {
  array: any [],
  id: string,
}

const TableRow = ({ array, id }: ITableRowProps) => (
  <label className={styles.row} htmlFor={id}>
    <div>
      <input id={id} type="checkbox" />
    </div>
    {array.map((elem, i) => (i !== 0) && <div key={Math.random()}>{elem.toString()}</div>)}
  </label>
);

export default TableRow;
