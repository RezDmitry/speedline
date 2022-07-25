import React from 'react';
import styles from "./HomeLayout.module.scss";
import {Outlet} from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Outlet />
      </div>
      <div className={styles.background}>
        <div className={styles.left} />
        <div className={styles.right} />
      </div>
    </div>
  );
};

export default HomeLayout;