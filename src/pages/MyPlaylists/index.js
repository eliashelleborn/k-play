import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import { Heading, Text } from '../../components/Typography';
import { Grid, Box, Flex } from '../../components/Util';
import ListCard from '../../components/ListCard';
import Plus from '../../components/Icons/Plus';
import firebase from '../../firebase';
import Loading from '../../components/Loading';
import Modal from '../../components/Modals';
import Dialog from '../../components/Dialog';
import useModal from '../../hooks/useModal';

const CreateButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
`;

const CreateInput = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #aeaeae;
  height: 40px;
  padding: 0 16px;
`;

const MyPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createInput, setCreateInput] = useState('');
  const createModal = useModal();

  const fetchPlaylists = () => {
    setLoading(true);
    firebase
      .firestore()
      .collection('playlists')
      .where('owner', '==', firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        const data = [];
        snapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setLoading(false);
        setPlaylists(data);
      });
  };

  const createPlaylist = () => {
    if (createInput !== '') {
      createModal.toggle();
      firebase
        .firestore()
        .collection('playlists')
        .add({
          owner: firebase.auth().currentUser.uid,
          name: createInput,
          numberOfTracks: 0
        })
        .then(() => {
          fetchPlaylists();
        });
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <>
      <Banner
        tint="rgba(0,0,0,.85)"
        image="https://images.unsplash.com/photo-1475196045479-d7313ffcd5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        justifyContent="space-between"
        px="3"
      >
        <Heading m="0" color="white" as="h3">
          Mina Listor
        </Heading>
        <CreateButton onClick={createModal.toggle}>
          <Plus />
        </CreateButton>
      </Banner>
      {loading && (
        <Flex p="5" justifyContent="center">
          <Loading color="#363636" />
        </Flex>
      )}
      {playlists.length > 0 && (
        <Grid p="3" gridTemplateColumns="1fr 1fr" gridGap="2">
          {playlists.map(p => (
            <ListCard
              key={p.id}
              title={p.name}
              image={p.image}
              tracksNum={p.numberOfTracks}
              isOwner
              to={`/spellista/${p.id}`}
            />
          ))}
        </Grid>
      )}
      {!loading && playlists.length === 0 && (
        <Box p="5">
          <Text m="0" textAlign="center">
            Du har inga spellistor
          </Text>
        </Box>
      )}

      <Modal isShowing={createModal.isShowing} hide={createModal.toggle}>
        <Dialog
          onCancel={createModal.toggle}
          onConfirm={createPlaylist}
          mainButton="confirm"
        >
          <Heading
            textAlign="center"
            as="h3"
            fontSize="20px"
            fontWeight="600"
            mb="4"
          >
            Namnge din spellista.
          </Heading>
          <CreateInput
            value={createInput}
            onChange={e => setCreateInput(e.target.value)}
          />
        </Dialog>
      </Modal>
    </>
  );
};

export default MyPlaylists;
