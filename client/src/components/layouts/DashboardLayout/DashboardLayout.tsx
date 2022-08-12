import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import TableSample from '../../pages/admin/TableSample/TableSample';
import { charts, IChart } from './charts';

import styles from './DashboardLayout.module.scss';

const DashboardLayout = () => {
  const [, setActiveChart] = useState<IChart>(charts[0]);
  const setActiveChartByKey = (e: React.KeyboardEvent<HTMLSpanElement>, chart: IChart): void => {
    if (e.code === 'Enter') {
      setActiveChart(chart);
    }
  };
  return (
    <TableSample title="Dashboard">
      <div className={styles.menu}>
        <ul>
          {charts.map((chart) => (
            <li key={chart.text} className={styles.chart}>
              <NavLink
                to={chart.path}
                className={({ isActive }) => (isActive ? styles.activeLink : styles.inActiveLink)}
                onClick={() => setActiveChart(chart)}
                onKeyDown={(e) => setActiveChartByKey(e, chart)}
              >
                <span>{chart.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </TableSample>
  );
};

export default DashboardLayout;
