import React from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';

import Logo from '../../../common/Logo/Logo';
import Button from '../../../common/Button/Button';
import BurgerButton from '../../../common/BurgerButton/BurgerButton';
import Login from '../../../common/modals/Login/Login';
import SignUp from '../../../common/modals/SignUp/SignUp';
import { useModal } from '../../../../hooks/useModal';
import { useMenu } from '../../../../hooks/useMenu';

import styles from './Header.module.scss';

const Header = () => {
  const [isLoginModalOpened, toggleLoginModal] = useModal();
  const [isSignUpModalOpened, toggleSignUpModal] = useModal();
  const [isMenuActive, toggleMenu, toggleMenuByKey] = useMenu();

  return (
    <header className={styles.header}>
      <Logo className={isMenuActive ? `${styles.logo} ${styles.active}` : styles.logo} />
      <div className={isMenuActive ? `${styles.menu} ${styles.active}` : styles.menu}>
        <nav>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.activeLink : styles.inActiveLink)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) => (isActive ? styles.activeLink : styles.inActiveLink)}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) => (isActive ? styles.activeLink : styles.inActiveLink)}
            >
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.activeLink : styles.inActiveLink)}
            >
              Contact
            </NavLink>
          </li>
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
        click={toggleMenu}
        keyDown={toggleMenuByKey}
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
