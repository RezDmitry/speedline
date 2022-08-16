import React from 'react';

import Button from '../../../common/Button/Button';

import styles from './Service.module.scss';
import truck from '../../../../content/images/truck.png';

const Service = () => (
  <main className={styles.start}>
    <div>
      <p className={styles.target}>
        Some important information about service
      </p>
      <p className={styles.mission}>
        We can do it!
      </p>
      <Button large>
        Get Started
      </Button>
    </div>
    <img src={truck} alt="cargo truck" />
  </main>
);

export default Service;
