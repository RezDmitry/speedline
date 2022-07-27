import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode,
  className?: string,
  transparent?: boolean,
  fullWidth?: boolean,
  large?: boolean,
  click?: () => void,
  // eslint-disable-next-line no-unused-vars
  keyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void,
}

const Button = ({
  children, className, transparent, fullWidth, large, click, keyDown,
}: IButtonProps) => {
  const tp = transparent ? styles.transparent : '';
  const lg = large ? styles.large : '';
  const fw = fullWidth ? styles.fullWidth : '';
  return (
    <button
      type="button"
      className={`${styles.button} ${tp} ${lg} ${fw} ${className}`}
      onClick={click}
      onKeyDown={keyDown}
    >
      {children}
    </button>
  );
};

export default Button;
