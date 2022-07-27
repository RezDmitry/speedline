import React, { useRef } from 'react';

import styles from './FormModal.module.scss';
import { ReactComponent as Cross } from '../../../../content/icons/cross.svg';

import { useCloseModal } from '../../../../hooks/useCloseModal';
import { useOutside } from '../../../../hooks/useClickOutside';

interface IFormModalProps {
  children: React.ReactNode,
  isOpened: boolean,
  title: string,
  description?: React.ReactNode,
  close: () => void,
}

const FormModal = ({
  children, isOpened, title, description, close,
}: IFormModalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeByKey = (e: any) => {
    if (e.code === 'Enter') {
      close();
    }
  };
  useCloseModal(isOpened, close);
  useOutside(isOpened, wrapperRef, close);
  return (
    <div className={`${styles.modal} ${isOpened ? styles.opened : ''}`} ref={wrapperRef}>
      <div className={styles.window}>
        <div className={styles.container}>
          <h2>{title}</h2>
          <div className={styles.content}>
            {children}
          </div>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <span
          className={styles.close}
          onClick={close}
          onKeyDown={closeByKey}
          tabIndex={0}
          role="button"
        >
          <Cross />
        </span>
      </div>
    </div>
  );
};

export default FormModal;
