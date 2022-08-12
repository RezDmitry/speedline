import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

import { useAppDispatch, useAppSelector } from '../../../../../hooks/useStore';
import { fetchProducts } from '../../../../../store/slices/actionCreators/product';

import styles from './Quantity.module.scss';

const Quantity = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productReducer);
  const setWeekArray = (): Date [] => {
    const today = new Date(Date.now());
    today.setHours(0, 0, 0, 0);
    const lastWeek = [];
    for (let i = 0; i < 6; i++) {
      const day = new Date(today.setHours(0, 0, 0, 0) - i * 86400000);
      lastWeek.push(day);
    }
    return lastWeek.reverse();
  };
  const option = {
    title: {
      text: 'Products quantity',
      x: 'center',
      textStyle: {
        fontFamily: 'Inter',
        color: '#3E4C59',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      type: 'category',
      data: setWeekArray().map((day) => format(day, 'dd/MM/yyyy')),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'line',
        data: setWeekArray().map((day: Date) => products
          .filter((product) => new Date(Date.parse(product.createdAt)).getDate() === day.getDate()).length),
      },
    ],
  };
  useEffect(() => {
    dispatch(fetchProducts({}));
    setWeekArray();
  }, []);
  return (
    <div className={styles.dimensions}>
      <ReactECharts
        key={option.title.text}
        option={option}
        style={{ width: '100%', height: 400 }}
      />
    </div>
  );
};

export default Quantity;
