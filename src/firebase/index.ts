import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import 'firebase/compat/auth'

import { ACTION_TYPES as AUTH_ACTION_TYPES, handleError } from '@/context/AuthContext'
import { REQUEST_STATUS } from '@/types'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.AVE_N_MAVE_API_KEY,
//   authDomain: process.env.AVE_N_MAVE_AUTH_DOMAIN,
//   projectId: process.env.AVE_N_MAVE_PROJECT_ID,
//   storageBucket: process.env.AVE_N_MAVE_STORAGE_BUCKET,
//   messagingSenderId: process.env.AVE_N_MAVE_MESSAGE_SENDER_ID,
//   appId: process.env.AVE_N_MAVE_APP_ID,
//   measurementId: process.env.AVE_N_MAVE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyC6LaSlwHWgPC4_HRafwxWEjk-relExDvE',
  authDomain: 'ave-n-mave--alpha.firebaseapp.com',
  projectId: 'ave-n-mave--alpha',
  storageBucket: 'ave-n-mave--alpha.appspot.com',
  messagingSenderId: '423415757719',
  appId: '1:423415757719:web:466d9c62f0af718583a2d2',
  measurementId: 'G-1P775SR9Q4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

/** Google Auth */
export const handleGoogleSignIn = async (handleSuccess: Function, handleError: Function) => {
  try {
    await setPersistence(auth, browserSessionPersistence)

    const providerGoogle = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, providerGoogle)

    handleSuccess(result)
  } catch (error) {
    handleError(error)
  }
}

export const handleGoogleSignOut = async (dispatch: Function) => {
  try {
    await signOut(auth)
    dispatch({ type: AUTH_ACTION_TYPES.LOGOUT, payload: { state: null, status: REQUEST_STATUS.SUCCESS } })
  } catch (error) {
    dispatch({ type: AUTH_ACTION_TYPES.ERROR, payload: { state: error, status: REQUEST_STATUS.FAILED } })
    console.error(error)
  }
}

export const handleGoogleAuthStateChange = (dispatch: Function) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (!user) handleError(dispatch, { message: 'No user Found' })
      dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: { state: user, status: REQUEST_STATUS.SUCCESS } })
    })
  } catch (error) {
    handleError(dispatch, error)
  }
}
/** End Google Auth */
