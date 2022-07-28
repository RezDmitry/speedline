import React from 'react';

import styles from './Header.module.scss';
import AdminContainer from '../AdminContainer/AdminContainer';
import SearchInput from '../../../common/inputs/SearchInput/SearchInput';

const Header = () => (
  <header className={styles.header}>
    <AdminContainer>
      <div className={styles.content}>
        <SearchInput />
        <ul>
          <li>
            <span>x</span>
          </li>
          <li>
            <span>x</span>
          </li>
          <li>
            <span>x</span>
          </li>
        </ul>
      </div>
    </AdminContainer>
  </header>
);

export default Header;
