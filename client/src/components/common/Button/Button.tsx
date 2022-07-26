import React from 'react';

import Loader from '../Loader/Loader';

import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode,
  className?: string,
  transparent?: boolean,
  fullWidth?: boolean,
  small?: boolean,
  large?: boolean,
  outlined?: boolean,
  loading?: boolean,
  blocked?: boolean,
  error?: boolean,
  click?: (e: React.MouseEvent) => void,
  keyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void,
  type?: 'submit' | 'reset' | 'button',
  icon?: React.ReactNode,
}

const Button = ({
  children, className, transparent, fullWidth, small,
  large, outlined, loading, blocked, error, click, keyDown, type = 'button', icon,
}: IButtonProps) => {
  const tp = transparent ? styles.transparent : '';
  const fw = fullWidth ? styles.fullWidth : '';
  const sm = small ? styles.small : '';
  const lg = large ? styles.large : '';
  const ol = outlined ? styles.outlined : '';
  const bl = blocked ? styles.blocked : '';
  const er = error ? styles.error : '';
  return (
    <button
      type={type}
      className={`${styles.button} ${tp} ${fw} ${sm} ${lg} ${ol} ${bl} ${er} ${className}`}
      onClick={click}
      onKeyDown={keyDown}
    >
      {loading
        ? <Loader />
        : (
          <>
            {children}
            {icon}
          </>
        )}
    </button>
  );
};

export default Button;
