import React, { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

import Button from '../../../common/Button/Button';
import Select from '../../../common/inputs/Select/Select';
import SnackBar from '../SnackBar/SnackBar';
import { IModalType } from '../../../../typings/modalType';

import styles from './TableSample.module.scss';
import { ReactComponent as PlusIcon } from '../../../../content/icons/plus.svg';
import { IFilterItem } from '../../../../typings/IFilterItem';

interface ITableSampleProps {
  children: React.ReactNode,
  title: string,
  filterList: IFilterItem [],
  buttonText: string,
  filterValue: IFilterItem,
  clickFilter: Dispatch<SetStateAction<IFilterItem>>,
  addItemModal?: IModalType,
  moveItemModal?: IModalType,
  selected?: any [],
  deleteItems?: () => void,
}

const TableSample = ({
  children, title, filterList, buttonText, filterValue,
  clickFilter, addItemModal, moveItemModal, selected, deleteItems,
}: ITableSampleProps) => (
  <div className={styles.layout}>
    <div className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.control}>
        <Select list={filterList} value={filterValue} click={clickFilter} name="filter" />
        <Button small icon={<PlusIcon />} click={addItemModal?.toggleOpened}>
          {buttonText}
        </Button>
      </div>
    </div>
    <div className={styles.table}>
      {children}
    </div>
    {addItemModal?.isOpened && createPortal(
      addItemModal.content,
      document.getElementById('root')!,
    )}
    {moveItemModal?.isOpened && createPortal(
      moveItemModal.content,
      document.getElementById('root')!,
    )}
    {!!selected?.length && createPortal(
      <SnackBar selected={selected} deleteAction={deleteItems!} openModal={moveItemModal?.toggleOpened!} />,
      document.getElementById('root')!,
    )}
  </div>
);

export default TableSample;
