import React from 'react';

import Button from '../../Button/Button';

import styles from './ModalButton.module.scss';

interface IModalButtonProps {
  children: React.ReactNode,
  action?: () => void,
  loading?: boolean,
  blocked?: boolean,
  type?: 'submit' | 'button',
}

const ModalButton = (
  {
    children, action, loading, blocked, type = 'submit',
  }: IModalButtonProps,
) => (
  <Button
    className={styles.button}
    click={action}
    type={type}
    fullWidth
    loading={loading}
    blocked={blocked}
  >
    {children}
  </Button>
);

export default ModalButton;
