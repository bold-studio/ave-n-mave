import { ComponentProps, createContext, FC, useContext, useEffect, useReducer } from 'react';
import { handleGoogleSignIn } from '@/firebase';
import { Action, Dispatch } from '@/context/types';
import { User } from '@firebase/auth-types';
import firebase from 'firebase/compat/app';

const AuthContext = createContext<{ state: User | null; dispatch: Dispatch } | undefined>(undefined);

const AuthReducer = (state: User | Error, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return null;
    case 'ERROR':
      return { message: action.payload };
    default:
      throw new Error(`Unable action type: ${action.type}`);
  }
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a AuthProvider');
  }

  return context;
};

const AuthProvider: FC<ComponentProps<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: 'LOGIN', payload: user });
      }
    });
  }, []);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

const makeLogin = async (dispatch: Dispatch) => {
  const loginSuccess = async (user: User) => dispatch({ type: 'LOGIN', payload: user });
  const loginFailed = async () => dispatch({ type: 'ERROR', payload: 'Login failed' });

  await handleGoogleSignIn(loginSuccess, loginFailed);
};

const makeLogout = async (dispatch: Dispatch) => {
  await firebase.auth().signOut();
  dispatch({ type: 'LOGOUT' });
};

export { AuthProvider, useAuth, makeLogin, makeLogout };
