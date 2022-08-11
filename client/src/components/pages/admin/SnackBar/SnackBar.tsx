import React from 'react';

import Button from '../../../common/Button/Button';

import styles from './SnackBar.module.scss';
import { ReactComponent as ListIcon } from '../../../../content/icons/list.svg';
import { ReactComponent as ChangeIcon } from '../../../../content/icons/change.svg';

interface ISnackBarProps {
  selectedLength: number,
  deleteAction: () => void
  openModal?: () => void,
  isBlocked?: boolean,
}

const SnackBar = ({
  selectedLength, deleteAction, openModal, isBlocked,
}: ISnackBarProps) => (
  <div className={styles.snackBar}>
    <div className={styles.selected}>
      <ListIcon />
      Selected:
      {' '}
      {selectedLength}
    </div>
    <div className={styles.buttons}>
      <Button
        small
        outlined
        error
        click={deleteAction}
      >
        Delete
      </Button>
      {openModal && (
        <Button
          small
          blocked={isBlocked}
          icon={<ChangeIcon />}
          click={isBlocked ? () => null : openModal}
        >
          Move
        </Button>
      )}
    </div>
  </div>
);

export default SnackBar;
