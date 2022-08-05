import React from 'react';

import styles from './Stepper.module.scss';

interface IStepperProps {
  className?: string,
  step: number,
  arr: any [],
  changeStep: (elem: any) => void,
}

const Stepper = ({
  className, step, arr, changeStep,
}: IStepperProps) => (
  <div className={`${styles.wrapper}`}>
    <div className={`${styles.stepper} ${className}`}>
      {arr.map((elem, i) => (
        <div
          className={`${(step === i + 1) && styles.active}`}
          onClick={() => changeStep(elem)}
          key={elem}
        >
          {elem}
        </div>
      ))}
      <span />
    </div>
  </div>
);

export default Stepper;
