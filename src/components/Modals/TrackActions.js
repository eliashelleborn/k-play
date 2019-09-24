import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import { List, Item as BaseItem } from '../List';
import { Share, AddToList, Rate, Heart, Podcast, Video } from '../Icons';
import { useAppModals } from '../../context/modals';

const StyledTrackActions = styled.div`
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
  padding-bottom: 20px;
  position: relative;
  margin-bottom: 16px;
  img {
    width: 100%;
    height: 270px;
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

const ContentType = styled.div`
  background-color: white;
  width: 47px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  margin-right: 16px;
  z-index: 100;
  border-bottom-left-radius: 3px;
`;

const TrackActions = ({ trackInfo, hide }) => {
  const { toggleOpen } = useAppModals();

  return (
    <StyledTrackActions>
      <ContentType>
        {trackInfo.contentType === 'podcast' ? <Podcast /> : <Video />}
      </ContentType>

      <Image>
        <img src={trackInfo.image} alt="" />
      </Image>
      <Heading as="h3" fontWeight="500" m="0">
        {trackInfo.title}
      </Heading>
      <Text m="0" mt="1">
        {trackInfo.subtitle}
      </Text>

      <List>
        <Item onClick={hide}>
          <Share />
          <Text m="0" ml="3">
            Dela
          </Text>
        </Item>

        <Item
          onClick={() => {
            toggleOpen('addToList');
          }}
        >
          <AddToList />
          <Text m="0" ml="3">
            Lägg till i Mina listor
          </Text>
        </Item>

        <Item onClick={hide}>
          <Rate />
          <Text m="0" ml="3">
            Betygsätt
          </Text>
        </Item>

        <Item onClick={hide}>
          <Heart color="#363636" />
          <Text m="0" ml="3">
            Spara kategori
          </Text>
        </Item>
      </List>
      <Close onClick={hide}>Stäng</Close>
    </StyledTrackActions>
  );
};

export default TrackActions;
