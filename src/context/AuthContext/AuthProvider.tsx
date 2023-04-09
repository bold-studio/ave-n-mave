import { ComponentProps, FC, useEffect, useReducer } from 'react'

import { startLoading, AuthReducer, AuthContext } from '@/context/AuthContext/'
import { handleGoogleAuthStateChange } from '@/firebase'

const AuthProvider: FC<ComponentProps<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, null)

  useEffect(() => {
    startLoading(dispatch)

    handleGoogleAuthStateChange(dispatch)
  }, [])

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
}

export default AuthProvider
