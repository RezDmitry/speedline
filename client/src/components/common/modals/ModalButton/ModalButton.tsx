import React from 'react';

import Button from '../../Button/Button';

import styles from './ModalButton.module.scss';

interface IModalButtonProps {
  children: React.ReactNode,
  click?: (e: React.MouseEvent) => void,
  loading?: boolean,
  blocked?: boolean,
  type?: 'submit' | 'button' | 'reset',
}

const ModalButton = (
  {
    children, click, loading, blocked, type = 'submit',
  }: IModalButtonProps,
) => (
  <Button
    className={styles.button}
    click={click}
    type={type}
    fullWidth
    loading={loading}
    blocked={blocked}
  >
    {children}
  </Button>
);

export default ModalButton;
