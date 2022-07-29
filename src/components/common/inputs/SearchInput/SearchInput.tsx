import React from 'react';

import styles from './SearchInput.module.scss';
import { ReactComponent as SearchIcon } from '../../../../content/icons/search.svg';

const SearchInput = () => (
  <div className={styles.wrapper}>
    <input
      type="search"
      className={styles.input}
      placeholder="Search..."
    />
    <SearchIcon className={styles.icon} />
  </div>
);

export default SearchInput;
