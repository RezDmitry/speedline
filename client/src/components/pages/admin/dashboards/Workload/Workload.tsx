import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

import { useAppDispatch, useAppSelector } from '../../../../../hooks/useStore';
import { fetchWarehouses } from '../../../../../store/slices/actionCreators/warehouse';

import styles from './Workload.module.scss';

const Workload = () => {
  const dispatch = useAppDispatch();
  const { warehouses } = useAppSelector((state) => state.warehouseReducer);
  const option = {
    title: {
      text: 'Workload',
      x: 'center',
      textStyle: {
        fontFamily: 'Inter',
        color: '#3E4C59',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    dataset: [
      {
        source: [
          ['Warehouse', 'Quantity'], ...warehouses.map((warehouse) => [warehouse.name, warehouse.products.length]),
        ],
      },
      {
        transform: {
          type: 'filter',
          config: { dimension: 'Quantity', '!=': 0 },
        },
      },
    ],
    series: [
      {
        name: 'Warehouses workload',
        type: 'pie',
        datasetIndex: 1,
        radius: '50%',
        center: ['50%', '50%'],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  useEffect(() => {
    dispatch(fetchWarehouses({}));
  }, []);
  return (
    <div className={styles.workload}>
      <ReactECharts
        key={option.title.text}
        option={option}
        style={{ width: '100%', height: 400 }}
      />
    </div>
  );
};

export default Workload;
