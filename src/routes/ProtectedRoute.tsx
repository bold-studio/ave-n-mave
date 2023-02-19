import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext/'
import { REQUEST_STATUS } from '@/types'
import { Spinner } from '@/components'

const ProtectedRoute = ({ children }: any) => {
  const { state: user, status } = useAuth()

  if (status === REQUEST_STATUS.LOADING)
    return (
      <main className="py-8 prose dark:prose-invert flex items-center justify-center flex-col">
        <h2>Loading...</h2>
        <Spinner />
      </main>
    )

  if (status === REQUEST_STATUS.SUCCESS) {
    return user ? children : <Navigate to={'/login'} />
  }

  if (status === REQUEST_STATUS.FAILED) {
    throw new Error('Login failed')
  }
}

export default ProtectedRoute
