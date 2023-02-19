import React from 'react'
import { Outlet } from 'react-router-dom'

import { ErrorBoundary, NavBar } from '@/components'

const Layout = () => {
  return (
    <>
      <NavBar />

      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  )
}

export default Layout
