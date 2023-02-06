import React from 'react';
import { RouteObject } from 'react-router-dom';

import Home from '@/pages/Home';
import Layout from '@/components/Layout';

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <div>Login</div>,
      },
      {
        path: 'wallets',
        element: <div>All Wallets</div>,
      },
      {
        path: 'wallets/:id',
        element: <div>Wallet with id</div>,
      },
      {
        path: 'wallets/:id/logs',
        element: <div>Wallet Logs</div>,
      },
      {
        path: 'spend',
        element: <div>Spend</div>,
      },
      {
        path: 'earn',
        element: <div>Earn</div>,
      },
    ],
  },
];
