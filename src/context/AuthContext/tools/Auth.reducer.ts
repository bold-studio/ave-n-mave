import { User } from '@firebase/auth-types'
import { Action } from '@/context/types'
import { ACTION_TYPES as AUTH_ACTION_TYPES } from '@/context/AuthContext'
import { REQUEST_STATUS } from '@/types'

const AuthReducer = (state: User | Error, action: Action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.LOGIN:
      return action.payload
    case AUTH_ACTION_TYPES.LOGOUT:
      return { state: null, status: REQUEST_STATUS.SUCCESS }
    case AUTH_ACTION_TYPES.ERROR:
      return { message: action.payload, status: REQUEST_STATUS.FAILED }
    default:
      throw new Error(`Unable action type: ${action.type}`)
  }
}

export default AuthReducer
