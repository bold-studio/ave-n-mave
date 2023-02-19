import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext/index'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a AuthProvider')
  }

  return context
}
