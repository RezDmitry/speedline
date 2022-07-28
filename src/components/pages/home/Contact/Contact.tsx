import React from 'react';

import Button from '../../../common/Button/Button';

import styles from './Contact.module.scss';
import truck from '../../../../content/images/truck.png';

const Contact = () => (
  <main className={styles.start}>
    <div>
      <p className={styles.target}>
        Our contacts
      </p>
      <p className={styles.mission}>
        Or not
      </p>
      <Button large>
        Get Started
      </Button>
    </div>
    <img src={truck} alt="cargo truck" />
  </main>
);

export default Contact;
