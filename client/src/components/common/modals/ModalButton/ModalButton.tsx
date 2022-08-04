import React from 'react';

import Button from '../../Button/Button';

import styles from './ModalButton.module.scss';

interface IModalButtonProps {
  children: React.ReactNode,
  action?: () => void
}

const ModalButton = ({ children, action }: IModalButtonProps) => (
  <Button
    className={styles.button}
    click={action}
    type="submit"
    fullWidth
  >
    {children}
  </Button>
);

export default ModalButton;
