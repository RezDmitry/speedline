import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { setTheme } from '../../../store/slices/ThemeSlice';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeReducer);
  return (
    <div className={styles.switcher}>
      <div
        className={`${styles.toggler} ${theme === 'dark' ? styles.isActive : ''}`}
        onClick={() => dispatch(setTheme())}
      />
    </div>
  );
};

export default ThemeSwitcher;
