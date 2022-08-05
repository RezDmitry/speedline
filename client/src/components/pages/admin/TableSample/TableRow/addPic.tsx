import React from 'react';

import { ReactComponent as AirIcon } from '../../../../../content/icons/air.svg';
import { ReactComponent as SeaIcon } from '../../../../../content/icons/sea.svg';
import { ReactComponent as TruckIcon } from '../../../../../content/icons/truck.svg';

import styles from './TableRow.module.scss';

export const addPic = (str: string) => {
  switch (str) {
    case 'AIR': {
      return (
        <span className={styles.withPic}>
          <AirIcon />
          {str}
        </span>
      );
    }
    case 'SEA': {
      return (
        <span className={styles.withPic}>
          <SeaIcon />
          {str}
        </span>
      );
    }
    case 'TRUCK': {
      return (
        <span className={styles.withPic}>
          <TruckIcon />
          {str}
        </span>
      );
    }
    default: {
      return str;
    }
  }
};
