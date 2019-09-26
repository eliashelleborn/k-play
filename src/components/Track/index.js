import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import { Play, Video, More as MoreIcon, Podcast, Snippet } from '../Icons';
import { useAppModals } from '../../context/modals';
import {
  usePlayer,
  PLAYER_EXPAND,
  PLAYER_SET_CURRENT_MEDIA,
  PLAYER_OPEN
} from '../../context/player';

const StyledTrack = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
`;

const Cover = styled.div`
  position: relative;
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  ${({ theme }) => theme.mediaQueries.large} {
    width: 125px;
    height: 125px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({ theme }) => theme.space[2]}px;
  min-width: 0;

  ${({ theme }) => theme.mediaQueries.large} {
    background-color: #F3F3F3;
    height: 125px;
    padding-left: ${({ theme }) => theme.space[4]}px;
    > h5 {
      padding: 2px 0;
      font-size: 24px;
    }
    > p {
      font-size: 16px;
    }
  }

  ${Text}, ${Heading} {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  > div:first-child {
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;

    ${({ theme }) => theme.mediaQueries.large} {
      font-size: 16px;
    }
  }
`;

const More = styled.div`
  padding: 0 ${({ theme }) => theme.space[3]}px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.large} {
    background-color: #f3f3f3;

    > svg {
      width: 37px;
      height: 10px;
    }
  }
`;

const Track = ({ track, onPlay }) => {
  const { toggleOpen, setContent } = useAppModals();
  const { dispatch } = usePlayer();

  return (
    <StyledTrack>
      <Cover
        onClick={() => {
          onPlay && onPlay()
          dispatch({ type: PLAYER_OPEN });
          dispatch({ type: PLAYER_EXPAND });
          dispatch({
            type: PLAYER_SET_CURRENT_MEDIA,
            payload: track
          });
        }}
      >
        <Play />
        <img src={track.image} alt="" />
      </Cover>
      <Info>
        <div>
          {track.snippet ? (
            <Snippet width="20px" />
          ) : track.type === 'VIDEO' ? (
            <Video />
          ) : (
            <Podcast />
          )}
          <Text ml="2" as="span">
            {Math.floor(track.duration / 60)} min
          </Text>
          <Text ml="2" as="span">
            {track.episode} {track.type === 'VIDEO' && 'Avsnitt'}
          </Text>
        </div>

        <Heading as="h5" m="0" mt="1" fontSize="20px" fontWeight="400">
          {track.title}
        </Heading>
        <Text fontSize="12px" m="0" mt="1">
          {track.description}
        </Text>
      </Info>
      <More
        onClick={() => {
          setContent(track);
          toggleOpen('trackActions');
        }}
      >
        <MoreIcon />
      </More>
    </StyledTrack>
  );
};

export default Track;
