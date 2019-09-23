import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import { List, Item as BaseItem } from '../List';
import { Share2, Remove, EditList } from '../Icons';

const StyledPlaylistActions = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ theme }) => theme.space[3]}px;
`;

const Image = styled.div`
  width: 100%;
  padding-bottom: 90%;
  position: relative;
  margin-bottom: 16px;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

const Item = styled(BaseItem)`
  justify-content: flex-start;
  padding: ${({ theme }) => theme.space[4]}px 0;
`;

const Close = styled.button`
  color: ${({ theme }) => theme.colors.orange};
  background: none;
  border: none;
  outline: 0ch;
  -webkit-tap-highlight-color: transparent;
  margin-top: auto;
  padding: ${({ theme }) => theme.space[3]}px 0;
`;

const PlaylistActions = ({ playlist, hide }) => {
  return (
    <StyledPlaylistActions>
      <Image>
        <img src={playlist.image} alt="" />
      </Image>
      <Heading as="h3" fontWeight="500" m="0">
        {playlist.name}
      </Heading>
      <Text m="0" mt="1">
        {playlist.tracksNum} poddar/videos
      </Text>

      <List onClick={hide}>
        <Item>
          <Share2 />
          <Text m="0" ml="3">
            Dela lista
          </Text>
        </Item>
        <Item>
          <EditList />
          <Text m="0" ml="3">
            Redigera lista
          </Text>
        </Item>
        <Item>
          <Remove />
          <Text m="0" ml="3">
            Ta bort lista
          </Text>
        </Item>
      </List>
      <Close onClick={hide}>Stäng</Close>
    </StyledPlaylistActions>
  );
};

export default PlaylistActions;
