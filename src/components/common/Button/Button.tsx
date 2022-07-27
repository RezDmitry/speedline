import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode,
  transparent?: boolean,
  large?: boolean,
  click?: () => void,
  // eslint-disable-next-line no-unused-vars
  keyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void,
}

const Button = ({
  children, transparent, large, click, keyDown,
}: IButtonProps) => (
  <button
    type="button"
    className={`${styles.button} ${transparent ? styles.transparent : ''} ${large ? styles.large : ''}`}
    onClick={click}
    onKeyDown={keyDown}
  >
    {children}
  </button>
);

export default Button;
