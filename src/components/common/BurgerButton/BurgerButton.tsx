import React from 'react';

import styles from './BurgerButton.module.scss';

interface IBurgerButtonProps {
  active?: boolean,
  className?: string,
  click: () => void,
  keyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => void,
}

const BurgerButton = ({
  active, className, click, keyDown,
}: IBurgerButtonProps) => (
  <div
    className={`${styles.burger} ${active ? styles.active : ''} ${className}`}
    role="button"
    tabIndex={0}
    onClick={click}
    onKeyDown={keyDown}
  >
    <span />
    <span />
    <span />
  </div>
);

export default BurgerButton;
