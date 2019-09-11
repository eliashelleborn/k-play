import React, { useEffect, useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  const getCurrentAuthenticatedUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setAuthenticatedUser(user);
    } catch (e) {
      setAuthError(e);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    getCurrentAuthenticatedUser();
  }, []);

  console.log(`loading: ${authLoading}`);
  console.log(`error: ${authError}`);
  console.log(authenticatedUser);

  const signIn = async () => {
    setAuthLoading(true);
    try {
      const user = await Auth.signIn({
        username: 'elias_johansson@hotmail.se',
        password: 'Kottbulle2'
      });
      setAuthenticatedUser(user);
    } catch (e) {
      setAuthError(e);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <div>
      <h1>App</h1>
      {authLoading && <p>Loading...</p>}
      {!authLoading &&
        (!authenticatedUser ? (
          <button type="button" onClick={signIn}>
            Login
          </button>
        ) : (
          <div>
            <p>Logged in as: {authenticatedUser.attributes.email}</p>
            <button
              type="button"
              onClick={() => {
                Auth.signOut();
                setAuthenticatedUser(null);
              }}
            >
              Logout
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
