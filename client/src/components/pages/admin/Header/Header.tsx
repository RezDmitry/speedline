import React from 'react';

import AdminContainer from '../AdminContainer/AdminContainer';
import SearchInput from '../../../common/inputs/SearchInput/SearchInput';
import BurgerButton from '../../../common/BurgerButton/BurgerButton';
import Controls from '../Controls/Controls';

import styles from './Header.module.scss';

interface IHeaderProps {
  toggleMenu: () => void,
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
        <Controls />
      </div>
    </AdminContainer>
  </header>
);

export default Header;
