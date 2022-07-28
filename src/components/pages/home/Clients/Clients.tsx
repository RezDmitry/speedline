import React from 'react';

import Button from '../../../common/Button/Button';

import styles from './Clients.module.scss';
import truck from '../../../../content/images/truck.png';

const Clients = () => (
  <main className={styles.start}>
    <div>
      <p className={styles.target}>
        Our clients
      </p>
      <p className={styles.mission}>
        Clients list
      </p>
      <Button large>
        Get Started
      </Button>
    </div>
    <img src={truck} alt="cargo truck" />
  </main>
);

export default Clients;
