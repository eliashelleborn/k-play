import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Amplify, { Hub, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

import Navigation from '../Navigation';

import Home from '../../pages/Home';
import Library from '../../pages/Library';
import Play from '../../pages/Play';
import Search from '../../pages/Search';
import AuthPage from '../../pages/Auth';
import Error from '../../pages/Error';
import theme from '../../style/theme';
import Global from '../../style/global';
import MyPlaylists from '../../pages/MyPlaylists';
import Playlist from '../../pages/Playlist';
/* import Player from '../Player'; */

import bglogo from '../../images/k-play-logo-02.png';

Amplify.configure(awsconfig);

const Background = styled.img`
  position: fixed;
  top: 32px;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -10;
`;

const App = () => {
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
  console.log(authenticatedUser);

  return (
    <>
      <Global />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Background src={bglogo} />

            <Navigation authUser={authenticatedUser} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bibliotek" component={Library} />
              <Route path="/spela-upp" component={Play} />
              <Route path="/sök" component={Search} />
              <Route path="/auth" component={AuthPage} />
              <Route path="/mina-listor" component={MyPlaylists} />
              <Route path="/spellista" component={Playlist} />
              <Route component={Error} />
            </Switch>

            {/* <Player /> */}
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
