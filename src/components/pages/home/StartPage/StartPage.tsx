import React from 'react';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

import styles from './StartPage.module.scss';

const StartPage = () => (
  <div className={styles.start}>
    <Header />
    <Content />
    <Footer />
  </div>
);

export default StartPage;
