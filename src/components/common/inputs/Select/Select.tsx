import React, { useRef, useState } from 'react';

import styles from './Select.module.scss';

import { ReactComponent as ArrowIcon } from '../../../../content/icons/arrow-down.svg';

import { useOutside } from '../../../../hooks/useClickOutside';

interface ISelectProps {
  list: string [],
  value: string,
  // eslint-disable-next-line no-unused-vars
  click: (e: React.MouseEvent<HTMLInputElement>) => void,
}

const Select = ({ list, value, click }: ISelectProps) => {
  const [active, setActive] = useState<boolean>(false);
  const wrappedRef = useRef(null);
  const clickOption = (e: React.MouseEvent<HTMLLabelElement>) => {
    setActive(false);
    e.stopPropagation();
  };
  useOutside(wrappedRef, () => setActive(false));
  return (
    <div
      className={styles.select}
      onClick={() => setActive(!active)}
      tabIndex={0}
      role="button"
      ref={wrappedRef}
    >
      {value}
      <div
        className={`${styles.list} ${active ? styles.active : ''}`}
      >
        {list.map((elem) => (
          <label
            key={elem}
            htmlFor={elem}
            className={styles.option}
            onClick={clickOption}
          >
            <input
              name="filter"
              type="radio"
              id={elem}
              value={elem}
              onClick={click}
            />
            {elem}
          </label>
        ))}
      </div>
      <ArrowIcon className={`${styles.icon} ${active ? styles.active : ''}`} />
    </div>
  );
};

export default Select;
