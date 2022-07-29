import React from 'react';

import styles from './Logo.module.scss';

import { ReactComponent as Logotype } from '../../../content/images/logo.svg';

interface ILogoProps {
  className?: string,
}

const Logo = ({ className }: ILogoProps) => (
  <div className={`${styles.logo} ${className}`}>
    <Logotype />
    <p>Speedline</p>
  </div>
);

export default Logo;
