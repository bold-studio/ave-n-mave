import React from 'react';
import { useRoutes } from 'react-router-dom';

import { routes } from '@/routes/route-list';

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
