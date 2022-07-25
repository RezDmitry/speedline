import React from 'react';
import styles from "./Header.module.scss";
import Logo from "../../../common/Logo/Logo";
import Button from "../../../common/Button/Button";

const Header = () => {
  return (
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
};

export default Header;