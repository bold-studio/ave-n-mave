import React from 'react';
import Home from '@/pages/Home';
import { SingleRoute } from '@/routes/types';

export const routes: SingleRoute[] = [
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
    isProtected: true,
    children: [
      {
        path: ':id',
        element: <div>Wallet with id</div>,
        children: [{ path: 'logs', element: <div>Wallet Logs</div> }],
      },
    ],
  },
  // {
  //   path: '/wallet/:id',
  //   element: <div>Wallet</div>,
  //   isProtected: true,
  // },
  // {
  //   path: '/wallet/:id/logs',
  //   element: <div>Wallet logs</div>,
  //   isProtected: true,
  // },
  {
    path: 'spend',
    element: <div>Spend</div>,
    isProtected: true,
  },
  {
    path: 'earn',
    element: <div>Earn</div>,
    isProtected: true,
  },
];
