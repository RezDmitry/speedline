import React from 'react';

import { ReactComponent as Logotype } from '../../../content/images/logo.svg';

import styles from './Logo.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <Logotype />
    <p>Speedline</p>
  </div>
);

export default Logo;
