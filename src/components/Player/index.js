import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import { Box } from '../Util';
import MediaBox from './MediaBox';
import Controls from './Controls';
import MiscControls from './MiscControls';
import Progress from './Progress';
import Footer from './Footer';
import {
  usePlayer,
  PLAYER_TOGGLE_PLAYING,
  PLAYER_TOGGLE_MINIMIZED,
  PLAYER_TOGGLE_OPEN
} from '../../context/player';

const StyledPlayer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${props => (props.minimized ? '65px' : 'calc(100vh - 65px)')};
  width: 100%;
  background-color: ${props => (props.minimized ? '#363636' : '#fff')};
  display: flex;
  flex-direction: column;
  z-index: 900;

  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  opacity: ${props => (props.open ? 1 : 0)};
  transition: visibility 0.3s linear, opacity 0.3s ease;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const Player = () => {
  const {
    state: { playing, minimized, open, currentMedia },
    dispatch
  } = usePlayer();
  const [mediaCurrentTime, setMediaCurrentTime] = useState(0);
  const playerRef = useRef(null);

  const handleProgress = e => {
    setMediaCurrentTime(e.playedSeconds);
  };

  const handleSliderInteraction = e => {
    playerRef.current.seekTo(e, 'seconds');
    setMediaCurrentTime(e);
  };

  /*   const next = () => {
    let nextIndex = 0;
    const currentIndex = media.indexOf(mediaUrl);
    if (currentIndex < media.length - 1) nextIndex = currentIndex + 1;
    setMediaUrl(media[nextIndex]);
  };

  const previous = () => {
    let nextIndex = media.length - 1;
    const currentIndex = media.indexOf(mediaUrl);
    if (currentIndex > 0) nextIndex = currentIndex - 1;
    setMediaUrl(media[nextIndex]);
  }; */

  const jumpTenSeconds = direction => {
    const currentTime = playerRef.current.getCurrentTime();
    setMediaCurrentTime(currentTime + 10 * direction);
    playerRef.current.seekTo(currentTime + 10 * direction, 'seconds');
  };

  return (
    <StyledPlayer open={open} minimized={minimized}>
      <Box px="3" my="3">
        <button type="button" onClick={() => dispatch(PLAYER_TOGGLE_MINIMIZED)}>
          Minimize
        </button>
        <button type="button" onClick={() => dispatch(PLAYER_TOGGLE_OPEN)}>
          Close
        </button>
        <Heading fontSize="24px" fontWeight="400" m="0" mb="3">
          {currentMedia.title}
        </Heading>
        <Text fontSize="12px" m="0" mb="1" color="#AEAEAE">
          Inspelad {currentMedia.createdAt}
        </Text>
        <Text fontSize="12px" m="0" color="#AEAEAE">
          I samarbete med Teaterförbundets dansavd.
        </Text>
      </Box>

      <MediaBox
        ref={playerRef}
        url={currentMedia.url}
        type={currentMedia.type}
        playing={playing}
        onProgress={handleProgress}
      />

      <ControlsContainer>
        <MiscControls />
        <Progress
          duration={currentMedia.duration}
          current={mediaCurrentTime}
          onChange={handleSliderInteraction}
        />
        <Controls
          next={() => {}}
          previous={() => {}}
          playing={playing}
          jump={jumpTenSeconds}
          togglePlaying={() => dispatch(PLAYER_TOGGLE_PLAYING)}
        />
        <Footer />
      </ControlsContainer>
    </StyledPlayer>
  );
};

export default Player;
