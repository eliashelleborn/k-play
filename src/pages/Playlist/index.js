/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import Banner from './Banner';
import Track from '../../components/Track';
import Modal from '../../components/Modals';
import useModal from '../../hooks/useModal';
import PlaylistActions from '../../components/Modals/PlaylistActions';
import ListCard from '../../components/ListCard';
import { Grid, Flex, Box } from '../../components/Util';

import Dialog from '../../components/Dialog';
import { Heading, Text } from '../../components/Typography';

import Loading from '../../components/Loading';
import firebase from '../../firebase';
import {
  usePlayer,
  PLAYER_SET_QUEUE,
  PLAYER_SET_PREVIOUS
} from '../../context/player';
import { useAppModals } from '../../context/modals';

const StyledPlaylist = styled.div`
  height: calc(100vh - 65px);
`;

const ContentWrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.large} {
    display: flex;
    flex-direction: row;
    margin: 36px 52px;
  }
`;

const DesktopPlaylist = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.large} {
    display: grid;
    width: 470px;
    height: 480px;
  }
`;

const TrackList = styled.div`
  ${({ theme }) => theme.mediaQueries.large} {
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.large} {
    width: 68%;
  }
`;

const Playlist = ({ match, history }) => {
  const { dispatch } = usePlayer();
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const actionsModal = useModal();
  const deleteModal = useModal();
  const { setContent } = useAppModals();

  const fetchPlaylist = () => {
    setLoading(true);
    const tracksArr = [];
    firebase
      .firestore()
      .collection('playlists')
      .doc(match.params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          const promises = [];
          setPlaylist({ id: doc.id, ...doc.data() });

          doc.data().tracks.forEach(t => {
            promises.push(
              t.ref.get().then(trackDoc => {
                tracksArr.push({
                  id: trackDoc.id,
                  ...trackDoc.data(),
                  snippet: t.snippet
                });
              })
            );
          });

          Promise.all(promises).then(() => {
            setTracks(tracksArr);
            setLoading(false);
          });
        }
      });
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  const deletePlaylist = () => {
    firebase
      .firestore()
      .collection('playlists')
      .doc(match.params.id)
      .delete()
      .then(() => {
        history.push('/mina-listor');
      });
  };

  return (
    <StyledPlaylist>
      {loading && (
        <Flex
          position="absolute"
          top="0"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Loading color="#363636" />
        </Flex>
      )}
      {!loading && !playlist && (
        <Flex
          position="absolute"
          top="0"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Text m="0">Kunde inte hitta spellistan</Text>
        </Flex>
      )}
      {playlist && !loading && (
        <>
          <Banner
            openModal={() => {
              setContent(playlist);
              actionsModal.toggle();
            }}
            name={playlist.name}
            context="Mina Listor"
            image={playlist.image}
          />

          <ContentWrapper>
            <DesktopPlaylist>
              <Grid p="12px" gridTemplateColumns="1fr">
                <ListCard
                  key={playlist.name}
                  title={playlist.name}
                  image="https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  to="/spellista"
                />
              </Grid>
            </DesktopPlaylist>
            <TrackList>
              {tracks.length > 0 ? (
                tracks.map((t, i) => (
                  <Track
                    key={t.id + i}
                    onPlay={() => {
                      dispatch({
                        type: PLAYER_SET_QUEUE,
                        payload: tracks.slice(i + 1)
                      });
                      dispatch({
                        type: PLAYER_SET_PREVIOUS,
                        payload: tracks.slice(0, i).reverse()
                      });
                    }}
                    track={t}
                  />
                ))
              ) : (
                <Box>
                  <Text mt="5" textAlign="center">
                    Denna spellistan är tom
                  </Text>
                </Box>
              )}
            </TrackList>
          </ContentWrapper>

          <Modal isShowing={actionsModal.isShowing} hide={actionsModal.toggle}>
            <PlaylistActions
              playlist={{
                name: playlist.name,
                tracksNum: tracks.length,
                image: playlist.image
              }}
              isShowing={actionsModal.isShowing}
              hide={actionsModal.toggle}
              onRemove={() => {
                actionsModal.toggle();
                deleteModal.toggle();
              }}
            />
          </Modal>

          <Modal isShowing={deleteModal.isShowing} hide={deleteModal.toggle}>
            <Dialog
              mainButton="cancel"
              onConfirm={deletePlaylist}
              confirm="Ta bort"
              onCancel={deleteModal.toggle}
            >
              <Heading
                textAlign="center"
                as="h3"
                fontSize="20px"
                fontWeight="600"
                m="0"
                mb="2"
              >
                Är du säker?
              </Heading>
              <Text m="0" mb="6" textAlign="center">
                Vill du radera listan “{playlist.name}”?
              </Text>
            </Dialog>
          </Modal>
        </>
      )}
    </StyledPlaylist>
  );
};

export default withRouter(Playlist);
