import React from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
const loggedIn = true;
function App() {
  return (
    <div>
      <h1>App</h1>

      {loggedIn ? <h1>Logged in</h1> : <h1>Not logged in</h1>}
    </div>
  );
}

export default withAuthenticator(App, true);
