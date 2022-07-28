import React from 'react';

import styles from './SearchInput.module.scss';

const SearchInput = () => (
  <input
    type="search"
    className={styles.input}
    placeholder="Search..."
  />
);

export default SearchInput;
