import React from 'react';
import { createPortal } from 'react-dom';

import Button from '../../../common/Button/Button';
import Select from '../../../common/inputs/Select/Select';
import SnackBar from '../SnackBar/SnackBar';

import styles from './TableSample.module.scss';
import { ReactComponent as PlusIcon } from '../../../../content/icons/plus.svg';

interface ITableSampleProps {
  children: React.ReactNode,
  title: string,
  filterList: string [],
  buttonText: string,
  filterValue: string,
  // eslint-disable-next-line no-unused-vars
  clickFilter: (e: React.MouseEvent<HTMLInputElement>) => void,
  toggleModal?: () => void,
  modal?: React.ReactNode,
  isModalOpened?: boolean,
  selected?: any [],
}

const TableSample = ({
  children, title, filterList, buttonText, filterValue, clickFilter, toggleModal, modal, isModalOpened, selected,
}: ITableSampleProps) => (
  <div className={styles.layout}>
    <div className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.control}>
        <Select list={filterList} value={filterValue} click={clickFilter} />
        <Button small icon={<PlusIcon />} click={toggleModal}>
          {buttonText}
        </Button>
      </div>
    </div>
    <div className={styles.table}>
      {children}
    </div>
    {isModalOpened && createPortal(
      modal,
      document.getElementById('root')!,
    )}
    {selected && createPortal(
      <SnackBar selected={selected} />,
      document.getElementById('root')!,
    )}
  </div>
);

export default TableSample;
