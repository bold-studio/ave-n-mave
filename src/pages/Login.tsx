import React from 'react';
import { useNavigate } from 'react-router-dom';

import { makeLogin, useAuth } from '@/context/AuthContext';

const Login = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await makeLogin(dispatch);
    navigate('/wallets');
  };

  return (
    <>
      <h2 className="mt-40 mb-6 text-2xl text-center">You got here because</h2>
      <p className="text-center">You probably wasn't logged in. Just use the button bellow to continue.</p>
      <button className="block mx-auto mt-5 mb-0" onClick={handleLogin}>
        Log in
      </button>
    </>
  );
};

export default Login;
