import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import AppProvider from '../../context';
import Navigation from '../Navigation';
import Home from '../../pages/Home';
import Play from '../../pages/Play';
import Search from '../../pages/Search';
import AuthPage from '../../pages/Auth';
import Error from '../../pages/Error';
import MyPlaylists from '../../pages/MyPlaylists';
import Playlist from '../../pages/Playlist';
import Global from '../../style/global';
import Settings from '../../pages/Settings';
import ChangePassword from '../../pages/ChangePassword'
import Player from '../Player';
import PlayerText from '../PlayerText';

import bglogo from '../../images/k-play-logo-02.png';
import { useAuth } from '../../context/auth';
import Loading from '../Loading';

const Background = styled.img`
  position: fixed;
  top: 32px;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -10;
`;

const LoadingContainer = styled.div`
  height: 100vh;
  padding-top: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = () => {
  const { authLoading } = useAuth();

  return (
    <BrowserRouter>
      <>
        <Background src={bglogo} />
        <Navigation />
        {authLoading && (
          <LoadingContainer>
            <Loading color="#363636" />
          </LoadingContainer>
        )}

        {!authLoading && (
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/spela-upp" component={Play} />
            <Route path="/sök" component={Search} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/mina-listor" component={MyPlaylists} />
            <Route path="/spellista" component={Playlist} />
            <Route path="/inställningar" component={Settings} />
            <Route path="/ändra-lösenord" component={ChangePassword} />

            <Route path="/player-text" component={PlayerText} />
            <Route path="/player" component={Player} />

            <Route component={Error} />
          </Switch>
        )}

        {/* <Player /> */}
      </>
    </BrowserRouter>
  );
};

const App = () => (
  <>
    <Global />
    <AppProvider>
      <Layout />
    </AppProvider>
  </>
);

export default App;
