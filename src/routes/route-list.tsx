import React from 'react'
import { RouteObject } from 'react-router-dom'

import { Home, Login, NotFound } from '@/pages'
import { Layout } from '@/components'
import ProtectedRoute from '@/routes/ProtectedRoute'
import Wallets from '@/pages/Wallets'

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
        element: <Login />,
      },
      {
        path: 'wallets',
        element: (
          <ProtectedRoute>
            <Wallets />
          </ProtectedRoute>
        ),
      },
      {
        path: 'wallets/:id',
        element: (
          <ProtectedRoute>
            <div>Wallet with id</div>
          </ProtectedRoute>
        ),
      },
      {
        path: 'wallets/:id/logs',
        element: (
          <ProtectedRoute>
            <div>Wallet Logs</div>
          </ProtectedRoute>
        ),
      },
      {
        path: 'spend',
        element: (
          <ProtectedRoute>
            <div>Spend</div>
          </ProtectedRoute>
        ),
      },
      {
        path: 'earn',
        element: (
          <ProtectedRoute>
            <div>Earn</div>
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]
