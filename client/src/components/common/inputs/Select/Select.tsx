import React, {
  Dispatch, SetStateAction, useRef, useState,
} from 'react';

import { useOutside } from '../../../../hooks/useClickOutside';

import styles from './Select.module.scss';
import { ReactComponent as ArrowIcon } from '../../../../content/icons/arrow-down.svg';
import { IFilterItem } from '../../../../typings/IFilterItem';

interface ISelectProps {
  list: IFilterItem [],
  name: string,
  value: IFilterItem,
  click: Dispatch<SetStateAction<IFilterItem>>,
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
      {value.text}
      <div
        className={`${styles.list} ${active ? styles.active : ''}`}
      >
        {list.map((elem) => (
          <label
            key={elem.value}
            htmlFor={elem.value}
            className={styles.option}
            onClick={clickOption}
          >
            <input
              name={name}
              type="radio"
              id={elem.value}
              value={elem.value}
              onClick={() => click(elem)}
            />
            {elem.text}
          </label>
        ))}
      </div>
      <ArrowIcon className={`${styles.icon} ${active ? styles.active : ''}`} />
    </div>
  );
};

export default Select;
