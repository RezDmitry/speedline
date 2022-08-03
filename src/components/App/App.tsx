import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import RequireAuth from '../common/RequireAuth/RequireAuth';

import styles from './App.module.scss';
import { adminRoutes, homeRoutes } from './routes';

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
      </Route>
    </Routes>
  </div>
);

export default App;
