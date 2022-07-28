import React from 'react';
import { createPortal } from 'react-dom';

import Logo from '../../../common/Logo/Logo';
import Button from '../../../common/Button/Button';
import BurgerButton from '../../../common/BurgerButton/BurgerButton';
import Login from '../../../common/modals/Login/Login';
import SignUp from '../../../common/modals/SignUp/SignUp';

import styles from './Header.module.scss';

import { useModal } from '../../../../hooks/useModal';
import { useMenu } from '../../../../hooks/useMenu';

const Header = () => {
  const [isLoginModalOpened, toggleLoginModal] = useModal();
  const [isSignUpModalOpened, toggleSignUpModal] = useModal();
  const [isMenuActive, openMenu, closeMenu] = useMenu();

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
            click={toggleLoginModal}
          >
            Log in
          </Button>
          <Button
            click={toggleSignUpModal}
          >
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
      {isLoginModalOpened && createPortal(
        <Login close={toggleLoginModal} openSignUp={toggleSignUpModal} />,
        document.getElementById('root')!,
      )}
      {isSignUpModalOpened && createPortal(
        <SignUp close={toggleSignUpModal} openLogin={toggleLoginModal} />,
        document.getElementById('root')!,
      )}
    </header>
  );
};

export default Header;
