// src/App.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <>
          <h2>Welcome, {user.name}</h2>
          <img src={user.picture} alt={user.name} />
          <p>{user.email}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </>
      )}
    </div>
  );
}

export default App;
