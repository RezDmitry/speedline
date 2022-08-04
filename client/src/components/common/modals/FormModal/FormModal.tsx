import React, { useRef } from 'react';

import { useCloseModal } from '../../../../hooks/useCloseModal';
import { useOutside } from '../../../../hooks/useClickOutside';
import Stepper from '../../Stepper/Stepper';

import styles from './FormModal.module.scss';
import { ReactComponent as Cross } from '../../../../content/icons/cross.svg';

interface IFormModalProps {
  children: React.ReactNode,
  title: string,
  pic?: React.ReactNode,
  description?: React.ReactNode,
  close: () => void,
  step?: number,
  stepArray?: any [],
  changeStep?: (elem: any) => void,
}

const FormModal = ({
  children, title, pic, description, close, step, stepArray, changeStep,
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
      <div className={styles.window} ref={wrapperRef}>
        {pic}
        <h2 className={`${pic ? styles.withPic : ''}`}>{title}</h2>
        <div className={styles.container}>
          <div className={styles.content}>
            {step && <Stepper className={styles.stepper} step={step} arr={stepArray!} changeStep={changeStep!} />}
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
