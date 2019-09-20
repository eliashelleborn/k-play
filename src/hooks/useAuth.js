import { useState, useEffect } from 'react';
import { Hub, Auth } from 'aws-amplify';

const useAuth = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const getCurrentAuthenticatedUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setAuthenticatedUser(user);
  };

  const handleAuthEvent = event => {
    if (event.payload.event === 'signIn') {
      setAuthenticatedUser(event.payload.data);
    }
    if (event.payload.event === 'signOut') {
      setAuthenticatedUser(null);
    }
  };

  useEffect(() => {
    getCurrentAuthenticatedUser();
    Hub.listen('auth', handleAuthEvent);
  }, []);

  return authenticatedUser;
};

export default useAuth;
