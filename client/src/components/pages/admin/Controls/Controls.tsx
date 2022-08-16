import React from 'react';

import ThemeSwitcher from '../../../common/ThemeSwitcher/ThemeSwitcher';

import styles from './Controls.module.scss';
import { ReactComponent as ProfileIcon } from '../../../../content/icons/profile.svg';
import { ReactComponent as SettingsIcon } from '../../../../content/icons/settings.svg';
import { ReactComponent as NotificationIcon } from '../../../../content/icons/notification.svg';
import { ReactComponent as StickerIcon } from '../../../../content/icons/sticker.svg';

const Controls = () => (
  <ul className={styles.controlPanel}>
    <li>
      <ThemeSwitcher />
    </li>
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
);

export default Controls;
