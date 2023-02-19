import { createContext } from 'react'
import { User } from '@firebase/auth-types'
import { Dispatch } from '@/context/types'
import { REQUEST_STATUS } from '@/types'

const AuthContext = createContext<{ state: User | null; dispatch: Dispatch; status: REQUEST_STATUS } | undefined>(
  undefined,
)

export default AuthContext
