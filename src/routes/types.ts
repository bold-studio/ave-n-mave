import React from 'react';

export type SingleRoute = {
  path: string;
  element?: React.ReactNode;
  isProtected?: boolean;
  children?: SingleRoute[];
};
