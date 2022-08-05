import React, { useRef, useState } from 'react';

import { useOutside } from '../../../../hooks/useClickOutside';

import styles from './Select.module.scss';
import { ReactComponent as ArrowIcon } from '../../../../content/icons/arrow-down.svg';

interface ISelectProps {
  list: any [],
  name: string,
  value: string,
  click: (e: React.MouseEvent<HTMLInputElement>) => void,
  className?: string,
}

const Select = ({
  list, name, value, click, className,
}: ISelectProps) => {
  const [active, setActive] = useState<boolean>(false);
  const wrappedRef = useRef(null);
  const clickOption = (e: React.MouseEvent<HTMLLabelElement>) => {
    setActive(false);
    e.stopPropagation();
  };
  useOutside(wrappedRef, () => setActive(false));
  return (
    <div
      className={`${styles.select} ${className}`}
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
            htmlFor={elem + name}
            className={styles.option}
            onClick={clickOption}
          >
            <input
              name={name}
              type="radio"
              id={elem + name}
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
