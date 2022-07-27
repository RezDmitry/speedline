import React from 'react';

import styles from './FormModal.module.scss';
import { ReactComponent as Cross } from '../../../../content/icons/cross.svg';
import Button from '../../Button/Button';

interface IFormModalProps {
  children: React.ReactNode,
  isOpened: boolean,
  title: string,
  buttonText: string,
  description?: React.ReactNode,
  close: () => void
}

const FormModal = ({
  children, isOpened, title, buttonText, description, close,
}: IFormModalProps) => (
  <div className={`${styles.modal} ${isOpened ? styles.opened : ''}`}>
    <div className={styles.window}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.content} />
        {children}
        <div className={styles.button}>
          <Button fullWidth>{buttonText}</Button>
        </div>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <span
        className={styles.close}
        onClick={close}
      >
        <Cross />
      </span>
    </div>
  </div>
);

export default FormModal;
