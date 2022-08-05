import React from 'react';

import Button from '../../Button/Button';

import styles from './ModalButton.module.scss';

interface IModalButtonProps {
  children: React.ReactNode,
  action?: () => void,
  loading?: boolean,
}

const ModalButton = ({ children, action, loading }: IModalButtonProps) => (
  <Button
    className={styles.button}
    click={action}
    type="submit"
    fullWidth
    loading={loading}
  >
    {children}
  </Button>
);

export default ModalButton;
