import { Dispatch } from '@/context/types'
import { User } from '@firebase/auth-types'
import firebase from 'firebase/compat/app'

import { handleGoogleSignIn } from '@/firebase'
import { REQUEST_STATUS } from '@/types'
import { ACTION_TYPES as AUTH_ACTION_TYPES, startLoading } from '@/context/AuthContext'

export const makeLogin = async (dispatch: Dispatch) => {
  startLoading(dispatch)
  const loginSuccess = async (user: User) =>
    dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: { state: user, status: REQUEST_STATUS.SUCCESS } })
  const loginFailed = async () =>
    dispatch({ type: AUTH_ACTION_TYPES.ERROR, payload: { state: 'Login failed', status: REQUEST_STATUS.FAILED } })

  await handleGoogleSignIn(loginSuccess, loginFailed)
}

export const makeLogout = async (dispatch: Dispatch) => {
  await firebase.auth().signOut()
  dispatch({ type: AUTH_ACTION_TYPES.LOGOUT, payload: { state: null, status: REQUEST_STATUS.SUCCESS } })
}
