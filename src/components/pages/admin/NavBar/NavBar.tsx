import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../common/Logo/Logo';
import { useOutside } from '../../../../hooks/useClickOutside';
import { menuList } from './menu-list';

import styles from './NavBar.module.scss';

interface INavBarProps {
  isOpened: boolean,
  toggleMenu: () => void,
  toggleMenuByKey: (e: React.KeyboardEvent<HTMLSpanElement>) => void,
}

const NavBar = ({ isOpened, toggleMenu, toggleMenuByKey }: INavBarProps) => {
  const wrappedRef = useRef(null);
  const closeMenu = () => {
    if (isOpened) {
      toggleMenu();
    }
  };
  useOutside(wrappedRef, closeMenu);
  return (
    <div className={`${styles.navBar} ${isOpened ? styles.isOpened : ''}`} ref={wrappedRef}>
      <Logo className={styles.logo} />
      <ul>
        {menuList.map((item) => (
          <li key={item.text} className={styles.item}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? styles.activeLink : styles.inActiveLink)}
              onClick={toggleMenu}
              onKeyDown={toggleMenuByKey}
            >
              {item.icon}
              <span>{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
