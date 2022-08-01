import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../pages/admin/Header/Header';
import NavBar from '../../pages/admin/NavBar/NavBar';
import AdminContainer from '../../pages/admin/AdminContainer/AdminContainer';

import styles from './AdminLayout.module.scss';

import { useMenu } from '../../../hooks/useMenu';

const AdminLayout = () => {
  // eslint-disable-next-line no-unused-vars
  const [isMenuActive, toggleMenu, toggleMenuByKey] = useMenu();
  return (
    <div className={styles.layout}>
      <NavBar
        isOpened={isMenuActive}
        toggleMenu={toggleMenu}
        toggleMenuByKey={toggleMenuByKey}
      />
      <div className={styles.workplace}>
        <Header toggleMenu={toggleMenu} toggleMenuByKey={toggleMenuByKey} />
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
};

export default AdminLayout;
