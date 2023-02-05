import React from 'react';

import './App.css';
import NavBar from '@/components/NavBar';
import { AuthProvider } from '@/context/AuthContext';
import AppRoutes from '@/routes';

// TODO: BUG - we throw user to login screen after reloading a page.
// Add loader before firebase auth responds in order to get user first and only then make a decision.
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
