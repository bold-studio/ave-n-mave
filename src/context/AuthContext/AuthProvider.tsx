import { ComponentProps, FC, useEffect, useReducer } from 'react'
import firebase from 'firebase/compat/app'

import { REQUEST_STATUS } from '@/types'
import { ACTION_TYPES as AUTH_ACTION_TYPES, startLoading, AuthReducer, AuthContext } from '@/context/AuthContext/'

const AuthProvider: FC<ComponentProps<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, null)

  useEffect(() => {
    startLoading(dispatch)
    const handleSuccess = (user: firebase.User | null) => {
      if (user) {
        dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: { state: user, status: REQUEST_STATUS.SUCCESS } })
      }
    }
    const handleError = () =>
      dispatch({ type: AUTH_ACTION_TYPES.ERROR, payload: { state: null, status: REQUEST_STATUS.FAILED } })

    firebase.auth().onAuthStateChanged(handleSuccess, handleError)
  }, [])

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
}

export default AuthProvider
