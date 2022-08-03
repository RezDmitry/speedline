import React from 'react';

import Button from '../../../common/Button/Button';

import styles from './SnackBar.module.scss';
import { ReactComponent as ListIcon } from '../../../../content/icons/list.svg';
import { ReactComponent as ChangeIcon } from '../../../../content/icons/change.svg';

interface ISnackBarProps {
  selected: any [],
}

const SnackBar = ({ selected }: ISnackBarProps) => (
  <div className={styles.snackBar}>
    <div className={styles.selected}>
      <ListIcon />
      Selected:
      {' '}
      {selected.length}
    </div>
    <div className={styles.buttons}>
      <Button small outlined error>Delete</Button>
      <Button small icon={<ChangeIcon />}>Move</Button>
    </div>
  </div>
);

export default SnackBar;
