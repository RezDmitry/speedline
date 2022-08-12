import React from 'react';

import { ReactComponent as Home } from '../../../../content/icons/home.svg';
import { ReactComponent as Warehouses } from '../../../../content/icons/document.svg';
import { ReactComponent as Accounts } from '../../../../content/icons/category.svg';
import { ReactComponent as Contacts } from '../../../../content/icons/2user.svg';
import { ReactComponent as Cards } from '../../../../content/icons/chart.svg';
import { ReactComponent as Chat } from '../../../../content/icons/chat.svg';

export const menuList: {icon: React.ReactNode, text: string, path: string} [] = [
  {
    icon: <Home />,
    text: 'Home',
    path: '/admin/',
  },
  {
    icon: <Warehouses />,
    text: 'Warehouses',
    path: 'warehouses',
  },
  {
    icon: <Accounts />,
    text: 'Accounts',
    path: 'accounts',
  },
  {
    icon: <Cards />,
    text: 'Cards',
    path: 'cards',
  }, {
    icon: <Contacts />,
    text: 'Contacts',
    path: 'contacts',
  }, {
    icon: <Chat />,
    text: 'Chat',
    path: 'chat',
  },
  {
    icon: <Cards />,
    text: 'Dashboard',
    path: 'dashboard/workload',
  },
];
