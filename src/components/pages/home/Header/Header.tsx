import React from 'react';

import Logo from '../../../common/Logo/Logo';
import Button from '../../../common/Button/Button';
import BurgerButton from '../../../common/BurgerButton/BurgerButton';
import Login from '../../../common/modals/Login/Login';
import { useModal } from '../../../../hooks/useModal';
import { useBurger } from '../../../../hooks/useBurger';

import styles from './Header.module.scss';

const Header = () => {
  const [isOpened, toggleModal] = useModal();
  const [isMenuActive, openMenu, closeMenu] = useBurger();

  return (
    <header className={styles.header}>
      <Logo className={isMenuActive ? `${styles.logo} ${styles.active}` : styles.logo} />
      <div className={isMenuActive ? `${styles.menu} ${styles.active}` : styles.menu}>
        <nav>
          <li>Home</li>
          <li>Service</li>
          <li>Clients</li>
          <li>Contact</li>
        </nav>
        <div className={styles.buttonGroup}>
          <Button
            transparent
            click={toggleModal}
          >
            Log in
          </Button>
          <Button>
            Sign up
          </Button>
        </div>
      </div>
      <BurgerButton
        className={styles.burger}
        active={isMenuActive}
        click={openMenu}
        keyDown={closeMenu}
      />
      <Login isOpened={isOpened} close={toggleModal} />
    </header>
  );
};

export default Header;
