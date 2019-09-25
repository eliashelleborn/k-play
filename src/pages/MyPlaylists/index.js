import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import { Heading, Text } from '../../components/Typography';
import { Grid, Box, Flex } from '../../components/Util';
import ListCard from '../../components/ListCard';
import Plus from '../../components/Icons/Plus';
import Loading from '../../components/Loading';
import Modal from '../../components/Modals';
import Dialog from '../../components/Dialog';
import useModal from '../../hooks/useModal';
import useMyPlaylists from '../../hooks/useMyPlaylists';
import styled from 'styled-components';

const StyledBanner = styled(Banner)`
  ${({ theme }) => theme.mediaQueries.large} {
    height: 190px;
    display: flex;
    align-items: center;
    padding: 0 64px;

    > h3 {
      font-size: 56px;
      font-weight: 600;
    }

    > svg {
      width: 42px;
      height: 42px;
    }
  }
`;

const StyledGrid = styled(Grid)`
  ${({ theme }) => theme.mediaQueries.large} {
    padding: 50px 64px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;

    > a div h3 {
      font-size: 35px;
    }

    > a svg {
      margin: 8px;
      width: 24px;
      height: 24px;
    }
  }
`;

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

const MyPlaylists = ({ location }) => {
  const {
    playlists,
    loading,
    fetchPlaylists,
    createPlaylist,
    addTrack
  } = useMyPlaylists();
  const [createInput, setCreateInput] = useState('');
  const createModal = useModal();

  const onCreatePlaylist = () => {
    if (createInput !== '') {
      createModal.toggle();

      createPlaylist(createInput).then(doc => {
        const queryParams = new URLSearchParams(location.search);
        const trackToAdd = queryParams.get('track');

        if (trackToAdd) {
          addTrack(doc.id, trackToAdd).then(() => {
            fetchPlaylists();
          });
        } else {
          fetchPlaylists();
        }
      });
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('create')) {
      createModal.toggle();
    }
  }, []);

  return (
    <>
      <StyledBanner
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
        <StyledGrid p="3" gridTemplateColumns="1fr 1fr" gridGap="2">
          {playlists.map(p => (
            <ListCard
              as={Link}
              key={p.id}
              title={p.name}
              image={p.image}
              tracksNum={p.tracks.length}
              isOwner
              to={`/spellista/${p.id}`}
            />
          ))}
        </StyledGrid>
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
          onConfirm={onCreatePlaylist}
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

export default withRouter(MyPlaylists);
