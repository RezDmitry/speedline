import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../common/Logo/Logo';

import styles from './NavBar.module.scss';

import { menuList } from './menu-list';

const NavBar = () => (
  <div className={styles.navBar}>
    <Logo className={styles.logo} />
    <ul>
      {menuList.map((item) => (
        <li key={item.text} className={styles.item}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? styles.activeLink : styles.inActiveLink)}
          >
            {item.icon}
            <span>{item.text}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
