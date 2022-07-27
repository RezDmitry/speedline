import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../pages/home/Header/Header';
import Footer from '../../pages/home/Footer/Footer';

import styles from './HomeLayout.module.scss';

const HomeLayout = () => (
  <div className={styles.layout}>
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
    <div className={styles.background}>
      <div />
      <div />
    </div>
  </div>
);

export default HomeLayout;
