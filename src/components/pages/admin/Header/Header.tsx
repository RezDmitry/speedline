import React from 'react';

import AdminContainer from '../AdminContainer/AdminContainer';
import SearchInput from '../../../common/inputs/SearchInput/SearchInput';

import styles from './Header.module.scss';
import { ReactComponent as ProfileIcon } from '../../../../content/icons/profile.svg';
import { ReactComponent as SettingsIcon } from '../../../../content/icons/settings.svg';
import { ReactComponent as NotificationIcon } from '../../../../content/icons/notification.svg';
import { ReactComponent as StickerIcon } from '../../../../content/icons/sticker.svg';

const Header = () => (
  <header className={styles.header}>
    <AdminContainer>
      <div className={styles.content}>
        <SearchInput />
        <ul className={styles.controlPanel}>
          <li>
            <ProfileIcon />
          </li>
          <li>
            <SettingsIcon />
          </li>
          <li>
            <NotificationIcon />
            <StickerIcon className={styles.sticker} />
          </li>
        </ul>
      </div>
    </AdminContainer>
  </header>
);

export default Header;
