import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

import { useAppDispatch, useAppSelector } from '../../../../../hooks/useStore';
import { fetchWarehouses } from '../../../../../store/slices/actionCreators/warehouse';
import { pieOption } from './chartOptions';

import styles from './Workload.module.scss';

const Workload = () => {
  const dispatch = useAppDispatch();
  const { warehouses } = useAppSelector((state) => state.warehouseReducer);
  const { theme } = useAppSelector((state) => state.themeReducer);
  const option = { ...pieOption };
  option.dataset = [
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
  ];
  option.backgroundColor = theme === 'dark' ? '#001E3C' : '#FFF';
  useEffect(() => {
    dispatch(fetchWarehouses({}));
  }, []);
  return (
    <div className={styles.workload}>
      <ReactECharts
        key={option.title.text}
        option={option}
        style={{ width: '100%', height: 400 }}
        theme={theme}
      />
    </div>
  );
};

export default Workload;
