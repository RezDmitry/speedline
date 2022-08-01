import React from 'react';

import AdminContainer from '../AdminContainer/AdminContainer';
import SearchInput from '../../../common/inputs/SearchInput/SearchInput';
import BurgerButton from '../../../common/BurgerButton/BurgerButton';

import styles from './Header.module.scss';

import { ReactComponent as ProfileIcon } from '../../../../content/icons/profile.svg';
import { ReactComponent as SettingsIcon } from '../../../../content/icons/settings.svg';
import { ReactComponent as NotificationIcon } from '../../../../content/icons/notification.svg';
import { ReactComponent as StickerIcon } from '../../../../content/icons/sticker.svg';

interface IHeaderProps {
  toggleMenu: () => void,
  // eslint-disable-next-line no-unused-vars
  toggleMenuByKey: (e: React.KeyboardEvent<HTMLSpanElement>) => void,
}

const Header = ({ toggleMenu, toggleMenuByKey }: IHeaderProps) => (
  <header className={styles.header}>
    <AdminContainer>
      <div className={styles.content}>
        <div className={styles.left}>
          <BurgerButton
            className={styles.burger}
            click={toggleMenu}
            keyDown={toggleMenuByKey}
          />
          <SearchInput className={styles.input} />
        </div>
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
