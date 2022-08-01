import React, { useRef } from 'react';

import { useCloseModal } from '../../../../hooks/useCloseModal';
import { useOutside } from '../../../../hooks/useClickOutside';

import styles from './FormModal.module.scss';
import { ReactComponent as Cross } from '../../../../content/icons/cross.svg';

interface IFormModalProps {
  children: React.ReactNode,
  title: string,
  pic?: React.ReactNode,
  description?: React.ReactNode,
  close: () => void,
}

const FormModal = ({
  children, title, pic, description, close,
}: IFormModalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeByKey = (e: any) => {
    if (e.code === 'Enter') {
      close();
    }
  };
  useCloseModal(close);
  useOutside(wrapperRef, close);
  return (
    <div className={styles.modal}>
      <div className={styles.window}>
        {pic}
        <h2 className={`${pic ? styles.withPic : ''}`}>{title}</h2>
        <div className={styles.container} ref={wrapperRef}>
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
