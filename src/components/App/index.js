import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import ChangePassword from '../../pages/ChangePassword';
import Player from '../Player';

import bglogo from '../../images/k-play-logo-02.png';
import { useAuth } from '../../context/auth';
import Loading from '../Loading';
import CustomRouter from '../CustomRouter';
import Modal from '../Modals';
import AddToList from '../Modals/AddToList';
import { useAppModals } from '../../context/modals';


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
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = () => {
  const { authLoading } = useAuth();
  const {
    open: modalsOpen,
    toggleOpen: modalsToggleOpen,
    content: modalContent
  } = useAppModals();

  return (
    <CustomRouter>
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

            <Route component={Error} />
          </Switch>
        )}

        <Player />

        {/* MODALS */}
        <Modal
          isShowing={modalsOpen.addToList}
          hide={() => modalsToggleOpen('addToList')}
        >
          <AddToList
            content={modalContent}
            hide={() => modalsToggleOpen('addToList')}
          />
        </Modal>
      </>
    </CustomRouter>
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
