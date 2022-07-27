import React, { useState } from 'react';

import Logo from '../../../common/Logo/Logo';
import Button from '../../../common/Button/Button';
import BurgerButton from '../../../common/BurgerButton/BurgerButton';

import styles from './Header.module.scss';

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  const clickHandler = (): void => {
    setActive(!active);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (e.code === 'Enter') {
      setActive(!active);
    }
  };

  return (
    <header className={styles.header}>
      <Logo className={active ? `${styles.logo} ${styles.active}` : styles.logo} />
      <div className={active ? `${styles.menu} ${styles.active}` : styles.menu}>
        <nav>
          <li>Home</li>
          <li>Service</li>
          <li>Clients</li>
          <li>Contact</li>
        </nav>
        <div className={styles.buttonGroup}>
          <Button transparent>Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
      <BurgerButton
        className={styles.burger}
        active={active}
        click={clickHandler}
        keyDown={keyDownHandler}
      />
    </header>
  );
};

export default Header;
