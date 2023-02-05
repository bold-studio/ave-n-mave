import React from 'react';
import { useRoutes } from 'react-router-dom';

import { routes } from '@/routes/route-list';
import { SingleRoute } from '@/routes/types';
import ProtectedRoute from '@/routes/ProtectedRoute';

const AppRoutes = () => {
  return useRoutes(
    routes.map((route: SingleRoute) => ({
      ...route,
      element: route.isProtected ? <ProtectedRoute>{route.element}</ProtectedRoute> : route.element,
    })),
  );
};

export default AppRoutes;
