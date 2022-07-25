import React from 'react';
import styles from "./Logo.module.scss";
import { ReactComponent as Logotype } from "../../../content/images/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Logotype />
      <p>Speedline</p>
    </div>
  );
};

export default Logo;