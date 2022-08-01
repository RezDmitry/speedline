import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode,
  className?: string,
  transparent?: boolean,
  fullWidth?: boolean,
  small?: boolean,
  large?: boolean,
  click?: () => void,
  // eslint-disable-next-line no-unused-vars
  keyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void,
  type?: 'submit' | 'reset' | 'button',
  icon?: React.ReactNode,
}

const Button = ({
  children, className, transparent, fullWidth, small, large, click, keyDown, type = 'button', icon,
}: IButtonProps) => {
  const tp = transparent ? styles.transparent : '';
  const sm = small ? styles.small : '';
  const lg = large ? styles.large : '';
  const fw = fullWidth ? styles.fullWidth : '';
  return (
    <button
      type={type}
      className={`${styles.button} ${tp} ${sm} ${lg} ${fw} ${className}`}
      onClick={click}
      onKeyDown={keyDown}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
