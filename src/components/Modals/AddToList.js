import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import { Heading, Text } from '../Typography';
import { Close, Plus } from '../Icons';
import { List, Item } from '../List';
import useMyPlaylists from '../../hooks/useMyPlaylists';
import { Flex } from '../Util';
import Loading from '../Loading';

const StyledAddToList = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ theme }) => theme.space[3]}px;

  ${({ theme }) => theme.mediaQueries.medium} {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 800px;

    > div div button {
      border: none;
      background-color: transparent;
    }
  }

  > div,
  a {
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }

    ${({ theme }) => theme.mediaQueries.medium} {
      width: 345px;
      margin: 20px auto;
    }
  }
`;

const Info = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space[5]}px 0;

  img {
    width: 20vw;
    height: 20vw;
    margin-right: ${({ theme }) => theme.space[3]}px;

    ${({ theme }) => theme.mediaQueries.medium} {
      width: 180px;
      height: 180px;
    }
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  padding: 16px;
  position: absolute;
  left: 0px;
  top: 20px;
`;

const AddToList = ({ hide, content }) => {
  const { playlists, loading, addTrack } = useMyPlaylists();
  return (
    <StyledAddToList>
      <CloseButton onClick={hide}>
        <Close size="16px" color="#363636" />
      </CloseButton>
      <Heading
        as="h2"
        textAlign="center"
        m="0"
        p="3"
        fontSize="20px"
        fontWeight="normal"
      >
        Lägg till i lista
      </Heading>

      {content && (
        <Info>
          <img src={content.image} alt="" />
          <div>
            <Heading as="h3" m="0" fontSize="20px" fontWeight="500">
              {content.title}
            </Heading>
            <Text m="0" mt="1" fontSize="16px" color="hideGrey">
              {content.subtitle}
            </Text>
          </div>
        </Info>
      )}

      <Button
        as={Link}
        onClick={hide}
        to={`/mina-listor?create=true&track=${content.id}`}
      >
        Skapa ny lista
      </Button>

      <List>
        {loading && (
          <Flex justifyContent="center" pt="5">
            <Loading color="#363636" />
          </Flex>
        )}
        {playlists.map(p => (
          <Item
            key={p.id}
            onClick={() => {
              addTrack(p.id, content.id, content.snippet);
              hide();
            }}
          >
            <Text fontWeight="500" m="0">
              {p.name}
            </Text>
            <button type="button">
              <Plus color="#AEAEAE" height="22px" width="22px" />
            </button>
          </Item>
        ))}
      </List>
    </StyledAddToList>
  );
};

export default AddToList;
