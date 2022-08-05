import React from 'react';

import Button from '../../../common/Button/Button';

import styles from './SnackBar.module.scss';
import { ReactComponent as ListIcon } from '../../../../content/icons/list.svg';
import { ReactComponent as ChangeIcon } from '../../../../content/icons/change.svg';

interface ISnackBarProps {
  selected: any [],
  deleteAction: () => void
  openModal: () => void,
}

const SnackBar = ({ selected, deleteAction, openModal }: ISnackBarProps) => (
  <div className={styles.snackBar}>
    <div className={styles.selected}>
      <ListIcon />
      Selected:
      {' '}
      {selected.length}
    </div>
    <div className={styles.buttons}>
      <Button small outlined error click={deleteAction}>Delete</Button>
      <Button small icon={<ChangeIcon />} click={openModal}>Move</Button>
    </div>
  </div>
);

export default SnackBar;
