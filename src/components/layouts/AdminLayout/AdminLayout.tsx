import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../pages/admin/Header/Header';
import NavBar from '../../pages/admin/NavBar/NavBar';
import AdminContainer from '../../pages/admin/AdminContainer/AdminContainer';

import styles from './AdminLayout.module.scss';

const AdminLayout = () => (
  <div className={styles.layout}>
    <NavBar />
    <div className={styles.workplace}>
      <Header />
      <main>
        <AdminContainer>
          <div className={styles.content}>
            <Outlet />
          </div>
        </AdminContainer>
      </main>
    </div>
  </div>
);

export default AdminLayout;
