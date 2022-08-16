import React from 'react';

import Button from '../../../common/Button/Button';

import styles from './StartPage.module.scss';
import truck from '../../../../content/images/truck.png';

const StartPage = () => (
  <main className={styles.start}>
    <div>
      <p className={styles.target}>
        We will deliver your cargo exactly on time
      </p>
      <p className={styles.mission}>
        For us, goods are our most valuable assets.
        So that with certainty we can provide the best service for your goods
      </p>
      <Button large>
        Get Started
      </Button>
    </div>
    <img src={truck} alt="cargo truck" />
  </main>
);

export default StartPage;
