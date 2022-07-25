import React from 'react';
import styles from "./Button.module.scss";

interface IButtonProps {
  children: React.ReactNode,
  transparent?: boolean,
}

const Button = ({children, transparent}: IButtonProps) => {
  return (
    <button className={`${styles.button} ${transparent ? styles.transparent : ''}`}>
      {children}
    </button>
  );
};

export default Button;