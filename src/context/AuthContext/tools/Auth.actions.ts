import { Dispatch } from '@/context/types'
import { User } from '@firebase/auth-types'

import { handleGoogleSignIn, handleGoogleSignOut } from '@/firebase'
import { REQUEST_STATUS } from '@/types'
import { ACTION_TYPES as AUTH_ACTION_TYPES, handleError, startLoading } from '@/context/AuthContext'

export const makeLogin = async (dispatch: Dispatch) => {
  startLoading(dispatch)
  const loginSuccess = async (user: User) =>
    dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: { state: user, status: REQUEST_STATUS.SUCCESS } })
  const loginFailed = async (err: Error) => handleError(dispatch, err)

  await handleGoogleSignIn(loginSuccess, loginFailed)
}

export const makeLogout = async (dispatch: Dispatch) => {
  await handleGoogleSignOut(dispatch)
}
