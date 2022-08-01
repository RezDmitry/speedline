import React from 'react';

import Button from '../../../common/Button/Button';
import Select from '../../../common/inputs/Select/Select';

import styles from './TableSample.module.scss';

import { ReactComponent as PlusIcon } from '../../../../content/icons/plus.svg';

interface ITableSampleProps {
  children: React.ReactNode,
  title: string
  filterList: string [],
  buttonText: string,
  filterValue: string,
  // eslint-disable-next-line no-unused-vars
  clickFilter: (e: React.MouseEvent<HTMLInputElement>) => void,
}

const TableSample = ({
  children, title, filterList, buttonText, filterValue, clickFilter,
}: ITableSampleProps) => (
  <div className={styles.layout}>
    <div className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.control}>
        <Select list={filterList} value={filterValue} click={clickFilter} />
        <Button small icon={<PlusIcon />}>
          {buttonText}
        </Button>
      </div>
    </div>
    <div className={styles.table}>
      {children}
    </div>
  </div>
);

export default TableSample;
