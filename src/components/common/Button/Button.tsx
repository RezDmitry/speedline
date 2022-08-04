import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode,
  className?: string,
  transparent?: boolean,
  fullWidth?: boolean,
  small?: boolean,
  large?: boolean,
  outlined?: boolean,
  error?: boolean,
  click?: () => void,
  keyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void,
  type?: 'submit' | 'reset' | 'button',
  icon?: React.ReactNode,
}

const Button = ({
  children, className, transparent, fullWidth, small, large, outlined, error, click, keyDown, type = 'button', icon,
}: IButtonProps) => {
  const tp = transparent ? styles.transparent : '';
  const fw = fullWidth ? styles.fullWidth : '';
  const sm = small ? styles.small : '';
  const lg = large ? styles.large : '';
  const ol = outlined ? styles.outlined : '';
  const er = error ? styles.error : '';
  return (
    <button
      type={type}
      className={`${styles.button} ${tp} ${fw} ${sm} ${lg} ${ol} ${er} ${className}`}
      onClick={click}
      onKeyDown={keyDown}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
