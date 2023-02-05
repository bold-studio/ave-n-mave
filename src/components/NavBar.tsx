import React from 'react';
import Logo from '@/svg/Logo';
import Google from '@/svg/Google';
import { makeLogin, makeLogout, useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';

//TODO: add balance and/or capital at the middle
const NavBar = () => {
  const { state: user, dispatch } = useAuth();

  return (
    <header className="w-full h-10 overflow-hidden p-2 flex flex-row justify-between">
      <Link to={'/'}>
        <Logo />
      </Link>

      <Link className="text-xs" to={'/wallets'}>
        Wallets
      </Link>
      <Link className="text-xs" to={'/wallets/1'}>
        first wallet
      </Link>
      <Link className="text-xs" to={'/wallets/1/logs'}>
        logs
      </Link>

      {user ? (
        <button className="flex items-center text-xs" onClick={() => makeLogout(dispatch)}>
          logout
        </button>
      ) : (
        <button className="flex items-center gap-1 text-xs" onClick={() => makeLogin(dispatch)}>
          login
          <Google />
        </button>
      )}
    </header>
  );
};

export default NavBar;
