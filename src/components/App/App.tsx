import React from 'react';
import { Route, Routes } from 'react-router-dom';

import StartPage from '../pages/home/StartPage/StartPage';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import AdminHome from '../pages/admin/AdminHome/AdminHome';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import RequireAuth from '../common/RequireAuth/RequireAuth';
import Service from '../pages/home/Service/Service';
import Clients from '../pages/home/Clients/Clients';
import Contact from '../pages/home/Contact/Contact';
import Contacts from '../pages/admin/Contacts/Contacts';
import Chat from '../pages/admin/Chat/Chat';
import Warehouses from '../pages/admin/Warehouses/Warehouses';
import Accounts from '../pages/admin/Accounts/Accounts';
import Cards from '../pages/admin/Cards/Cards';

import styles from './App.module.scss';
import Warehouse from '../pages/admin/Warehouses/Warehouse/Warehouse';

const App = () => (
  <div className={styles.app}>
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<StartPage />} />
        <Route path="service" element={<Service />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route
        path="/admin"
        element={(
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        )}
      >
        <Route index element={<AdminHome />} />
        <Route path="warehouses" element={<Warehouses />} />
        <Route path="warehouses/:id" element={<Warehouse />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="cards" element={<Cards />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  </div>
);

export default App;
