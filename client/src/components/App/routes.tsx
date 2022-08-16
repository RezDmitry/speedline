import React from 'react';

import StartPage from '../pages/home/StartPage/StartPage';
import Service from '../pages/home/Service/Service';
import Clients from '../pages/home/Clients/Clients';
import Contact from '../pages/home/Contact/Contact';
import AdminHome from '../pages/admin/AdminHome/AdminHome';
import Contacts from '../pages/admin/Contacts/Contacts';
import Chat from '../pages/admin/Chat/Chat';
import Warehouses from '../pages/admin/Warehouses/Warehouses';
import Accounts from '../pages/admin/Accounts/Accounts';
import Cards from '../pages/admin/Cards/Cards';
import Warehouse from '../pages/admin/Warehouses/Warehouse/Warehouse';
import Workload from '../pages/admin/dashboards/Workload/Workload';
import Quantity from '../pages/admin/dashboards/Quantity/Quantity';

interface IRoute {
  component: React.ReactNode,
  path: string,
}

export const homeRoutes: IRoute [] = [
  {
    component: <StartPage />,
    path: '',
  },
  {
    component: <Service />,
    path: 'service',
  },
  {
    component: <Clients />,
    path: 'clients',
  },
  {
    component: <Contact />,
    path: 'contact',
  },
];

export const adminRoutes: IRoute [] = [
  {
    component: <AdminHome />,
    path: '',
  },
  {
    component: <Warehouses />,
    path: 'warehouses',
  },
  {
    component: <Warehouse />,
    path: 'warehouses/:id',
  },
  {
    component: <Accounts />,
    path: 'accounts',
  },
  {
    component: <Cards />,
    path: 'cards',
  },
  {
    component: <Contacts />,
    path: 'contacts',
  },
  {
    component: <Chat />,
    path: 'chat',
  },
];

export const dashboardRoutes: IRoute [] = [
  {
    component: <Workload />,
    path: 'workload',
  },
  {
    component: <Quantity />,
    path: 'quantity',
  },
];
