import React from 'react';
import { Route, Routes } from "react-router-dom";

import StartPage from "../pages/home/StartPage/StartPage";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import AdminHome from "../pages/admin/AdminHome/AdminHome";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<StartPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
