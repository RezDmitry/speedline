import React from 'react';

import styles from './SearchInput.module.scss';
import { ReactComponent as SearchIcon } from '../../../../content/icons/search.svg';

interface ISearchInputProps {
  className?: string,
}

const SearchInput = ({ className }: ISearchInputProps) => (
  <div className={`${styles.wrapper} ${className}`}>
    <input
      type="search"
      className={styles.input}
      placeholder="Search..."
    />
    <SearchIcon className={styles.icon} />
  </div>
);

export default SearchInput;
