import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

import { useAppDispatch, useAppSelector } from '../../../../../hooks/useStore';
import { fetchProducts } from '../../../../../store/slices/actionCreators/product';
import format from '../../../../../helpers/format';
import {
  checkDate, lineChartOption, setFormat, setIntervalByButton,
} from './chartOptions';

import styles from './Quantity.module.scss';

const Quantity = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productReducer);
  const [timeInterval, setTimeInterval] = useState('week');
  const option = { ...lineChartOption };
  option.dataset = [
    {
      source: [
        ['Date', 'Products'],
        ...setIntervalByButton(timeInterval).map((date) => [
          format(date, setFormat(timeInterval)),
          products.filter((product) => checkDate(date, product, timeInterval)).length,
        ]),
      ],
    },
  ];
  useEffect(() => {
    dispatch(fetchProducts({}));
  }, []);
  return (
    <div className={styles.dimensions}>
      <div className={styles.control}>
        {['week', 'month', 'year'].map((str) => (
          <button
            onClick={() => setTimeInterval(str)}
            className={timeInterval === str ? styles.active : ''}
            key={str}
          >
            {str}
          </button>
        ))}
      </div>
      <ReactECharts
        key={option.title.text}
        option={option}
        style={{ width: '100%', height: 400 }}
      />
    </div>
  );
};

export default Quantity;
