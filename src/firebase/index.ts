import { initializeApp } from 'firebase/app'
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore'
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import { ACTION_TYPES as AUTH_ACTION_TYPES, handleError } from '@/context/AuthContext'
import { REQUEST_STATUS } from '@/types'

// TODO: Replace the following with local env variables
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

/** Collection Setters */
export const getUserWallets = async () => {
  try {
    const db = getFirestore(app)
    const q = query(collection(db, 'wallets'), where('owner', '==', auth.currentUser?.uid))

    const querySnapshot = await getDocs(q)
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data())
    })
  } catch (error) {
    console.error(error)
  }
}
