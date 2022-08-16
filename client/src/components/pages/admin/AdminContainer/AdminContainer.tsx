import React from 'react';

import styles from './AdminContainer.module.scss';

interface IAdminContainer {
  children: React.ReactNode,
}

const AdminContainer = ({ children }: IAdminContainer) => (
  <div className={styles.container}>
    { children }
  </div>
);

export default AdminContainer;
