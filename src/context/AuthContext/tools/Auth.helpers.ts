import { REQUEST_STATUS } from '@/types'
import { ACTION_TYPES } from '@/context/AuthContext'

export const startLoading = (dispatch: Function, state: any = null) =>
  dispatch({ type: ACTION_TYPES.LOGIN, payload: { status: REQUEST_STATUS.LOADING, state } })

export const handleError = (dispatch: Function, payload?: any) =>
  dispatch({ type: ACTION_TYPES.ERROR, payload: { status: REQUEST_STATUS.FAILED, state: payload || null } })
