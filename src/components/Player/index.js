import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAnimation, motion } from 'framer-motion';
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
  PLAYER_CURRENT_TIME_UPDATE
} from '../../context/player';
import MinimizedPlayer from '../MinimizedPlayer';

const StyledPlayer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: calc(100vh - 65px);
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 900;

  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  opacity: 0;
  transition: visibility 0.3s linear;
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
  const playerRef = useRef(null);
  const [ready, setReady] = useState({
    main: false,
    minimized: false
  });
  const [currentTime, setCurrentTime] = useState(0);

  const anim = useAnimation();

  useEffect(() => {
    if (open) {
      anim.start({
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.3,
          ease: 'easeOut'
        }
      });
    } else {
      anim.start({
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: 'easeOut'
        }
      });
    }
  }, [open]);

  const handleProgress = e => {
    setCurrentTime(e.playedSeconds);
  };

  const handleSliderInteraction = e => {
    playerRef.current.seekTo(e, 'seconds');
    dispatch({
      type: PLAYER_CURRENT_TIME_UPDATE,
      payload: e
    });
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
    /*  const onClickCurrentTime = playerRef.current.getCurrentTime(); */
    dispatch({
      type: PLAYER_CURRENT_TIME_UPDATE,
      payload: currentTime + 10 * direction
    });
    playerRef.current.seekTo(currentTime + 10 * direction, 'seconds');
  };

  return (
    <>
      <StyledPlayer animate={anim} open={open && !minimized}>
        <Box px="3" my="3">
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
          minimized={minimized}
          open={open}
          ref={playerRef}
          url={currentMedia.url}
          type={currentMedia.type}
          playing={ready.main && ready.minimized && playing}
          onProgress={handleProgress}
          onReady={() => setReady({ ...ready, main: true })}
        />

        <ControlsContainer>
          <MiscControls />
          <Progress
            duration={currentMedia.duration}
            current={currentTime}
            onChange={handleSliderInteraction}
          />
          <Controls
            next={() => {}}
            previous={() => {}}
            playing={playing}
            jump={jumpTenSeconds}
            togglePlaying={() => dispatch({ type: PLAYER_TOGGLE_PLAYING })}
          />
          <Footer />
        </ControlsContainer>
      </StyledPlayer>
      <MinimizedPlayer
        currentTime={currentTime}
        ready={ready}
        setReady={() =>
          setReady({
            ...ready,
            minimized: true
          })
        }
      />
    </>
  );
};

export default Player;
