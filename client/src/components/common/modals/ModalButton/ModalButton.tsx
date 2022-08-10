import React from 'react';

import Button from '../../Button/Button';

import styles from './ModalButton.module.scss';

interface IModalButtonProps {
  children: React.ReactNode,
  action?: () => void,
  loading?: boolean,
  blocked?: boolean,
}

const ModalButton = (
  {
    children, action, loading, blocked,
  }: IModalButtonProps,
) => (
  <Button
    className={styles.button}
    click={action}
    type="submit"
    fullWidth
    loading={loading}
    blocked={blocked}
  >
    {children}
  </Button>
);

export default ModalButton;
