import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { getAnalytics } from 'firebase/analytics';

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
};
const { GoogleAuthProvider } = firebase.auth;

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/** Google Auth */
export const handleGoogleSignIn = async (handleSuccess: Function, handleError: Function) => {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const providerGoogle = new GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(providerGoogle);
    handleSuccess(result);
  } catch (error) {
    handleError(error);
  }
};
/** End Google Auth */
