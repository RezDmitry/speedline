import React from 'react';

import Logo from '../../../common/Logo/Logo';
import Button from '../../../common/Button/Button';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Logo />
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
  </header>
);

export default Header;
