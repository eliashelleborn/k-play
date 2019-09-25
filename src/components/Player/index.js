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
import { usePlayer, PLAYER_TOGGLE_PLAYING } from '../../context/player';
import MinimizedPlayer from '../MinimizedPlayer';
import Modal from '../Modals';
import Snippet from '../Modals/Snippet';
import useModal from '../../hooks/useModal';
import { useAppModals } from '../../context/modals';

const StyledPlayer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: calc(100vh - 65px);
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 90;

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
  const appModals = useAppModals();
  const snippetModal = useModal();
  const [snippet, setSnippet] = useState([0, 0]);
  const [ready, setReady] = useState({
    main: false,
    minimized: false
  });
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef(null);
  const minimizedPlayerRef = useRef(null);
  const anim = useAnimation();

  const handleStart = () => {
    setCurrentTime(currentMedia.snippet ? currentMedia.snippet.start : 0);
    playerRef.current.seekTo(
      currentMedia.snippet ? currentMedia.snippet.start : 0,
      'seconds'
    );
    minimizedPlayerRef.current.seekTo(
      currentMedia.snippet ? currentMedia.snippet.start : 0,
      'seconds'
    );
  };

  useEffect(() => {
    if (currentMedia) {
      handleStart();
    }
  }, [currentMedia]);

  useEffect(() => {
    if (currentMedia && snippetModal.isShowing) {
      playerRef.current.seekTo(snippet[0], 'seconds');
      minimizedPlayerRef.current.seekTo(snippet[0], 'seconds');
    }
  }, [snippet, snippetModal.isShowing]);

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
    if (!snippetModal.isShowing) setCurrentTime(e.playedSeconds);
  };

  const handleSliderInteraction = e => {
    playerRef.current.seekTo(e, 'seconds');
    minimizedPlayerRef.current.seekTo(e, 'seconds');
    setCurrentTime(e);
  };

  const jumpTenSeconds = direction => {
    setCurrentTime(currentTime + 10 * direction);
    playerRef.current.seekTo(currentTime + 10 * direction, 'seconds');
    minimizedPlayerRef.current.seekTo(currentTime + 10 * direction, 'seconds');
  };

  if (!currentMedia) return null;

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
          onStart={handleStart}
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
          <MiscControls onCreateSnippet={snippetModal.toggle} />
          <Progress
            snippet={currentMedia.snippet}
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
        ref={minimizedPlayerRef}
        currentTime={currentTime}
        ready={ready}
        setReady={() =>
          setReady({
            ...ready,
            minimized: true
          })
        }
      />

      <Modal isShowing={snippetModal.isShowing} hide={snippetModal.toggle}>
        <Snippet
          hide={snippetModal.toggle}
          onChange={setSnippet}
          max={currentMedia.duration}
          value={snippet}
          onFinished={() => {
            snippetModal.toggle();
            appModals.setContent({
              ...currentMedia,
              snippet: { start: snippet[0], end: snippet[1] }
            });
            appModals.toggleOpen('addToList');
          }}
        />
      </Modal>
    </>
  );
};

export default Player;
