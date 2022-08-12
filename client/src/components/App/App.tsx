import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import RequireAuth from '../common/RequireAuth/RequireAuth';
import { adminRoutes, dashboardRoutes, homeRoutes } from './routes';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {homeRoutes.map((route) => (
          route.path
            ? <Route key={route.path} path={route.path} element={route.component} />
            : <Route key={route.path} index element={route.component} />))}
      </Route>
      <Route
        path="/admin"
        element={(
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        )}
      >
        {adminRoutes.map((route) => (
          route.path
            ? <Route key={route.path} path={route.path} element={route.component} />
            : <Route key={route.path} index element={route.component} />))}
        <Route path="dashboard" element={<DashboardLayout />}>
          {dashboardRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />))}
        </Route>
      </Route>
    </Routes>
  </div>
);

export default App;
