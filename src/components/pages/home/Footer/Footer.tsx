import React from 'react';

import styles from './Footer.module.scss';
import { ReactComponent as Arrow } from '../../../../content/icons/arrow-down.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.button}>
      <Arrow />
    </div>
    <p>
      Scroll down
    </p>
  </footer>
);

export default Footer;
