import React, {
  Dispatch, SetStateAction, useRef, useState,
} from 'react';

import { useOutside } from '../../../../hooks/useClickOutside';
import { IEntity } from '../../../../typings/IEntity';

import styles from './Select.module.scss';
import { ReactComponent as ArrowIcon } from '../../../../content/icons/arrow-down.svg';

interface ISelectProps {
  list: IEntity [],
  name: string,
  value: IEntity,
  click: Dispatch<SetStateAction<any>>,
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
      {value.name}
      <div
        className={`${styles.list} ${active ? styles.active : ''}`}
      >
        {list.map((elem) => (
          <label
            key={elem.name}
            htmlFor={elem._id + name}
            className={styles.option}
            onClick={clickOption}
          >
            <input
              name={name}
              type="radio"
              id={elem._id + name}
              value={elem.name}
              onClick={() => click(elem)}
            />
            {elem.name}
          </label>
        ))}
      </div>
      <ArrowIcon className={`${styles.icon} ${active ? styles.active : ''}`} />
    </div>
  );
};

export default Select;
