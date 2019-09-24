import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Slider from 'rc-slider';
import { motion, useAnimation } from 'framer-motion';
import {
  usePlayer,
  PLAYER_OPEN,
  PLAYER_EXPAND,
  PLAYER_TOGGLE_PLAYING
} from '../../context/player';
import { Flex, Box } from '../Util';
import { Heading } from '../Typography';
import { Pause, Skip, Play, Podcast, Video } from '../Icons';

const StyledMinimizedPlayer = styled(motion.div)`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  > ${Box} {
    background-color: ${({ theme }) => theme.colors.grey};
  }
  z-index: 100;
`;

const MediaPlayer = styled.div`
  display: block;
  width: 40vw;
  height: 40vw;
  max-width: 300px;
  max-height: 300px;
`;

const Controls = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  button {
    height: 100%;

    display: flex;
    align-items: center;
    border: none;
    background: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

const MinimizedPlayer = React.forwardRef(
  ({ currentTime, setReady, ready }, ref) => {
    const {
      state: { playing, minimized, open, currentMedia },
      dispatch
    } = usePlayer();
    const anim = useAnimation();

    useEffect(() => {
      if (minimized) {
        anim.start({
          y: '0%',
          transition: {
            delay: 0.3,
            duration: 0.3,
            ease: 'easeOut'
          }
        });
      } else {
        anim.start({
          y: '100%',
          transition: {
            duration: 0.3,
            ease: 'easeOut'
          }
        });
      }
    }, [minimized]);
    return (
      <StyledMinimizedPlayer animate={anim}>
        <MediaPlayer
          onClick={() => {
            dispatch({ type: PLAYER_OPEN });
            dispatch({ type: PLAYER_EXPAND });
          }}
        >
          <ReactPlayer
            ref={ref}
            width="100%"
            height="100%"
            muted={open}
            url={currentMedia.url}
            playing={ready.main && ready.minimized && playing}
            config={{
              youtube: {
                playerVars: { modestbranding: 1 }
              }
            }}
            onReady={setReady}
          />
        </MediaPlayer>
        <Box height="80px">
          <Slider
            max={currentMedia.duration}
            min={0}
            defaultValue={0}
            disabled
            value={currentTime}
            style={{ padding: 0, height: 4 }}
            trackStyle={{
              backgroundColor: '#EC733F',
              borderRadius: 0
            }}
            railStyle={{
              backgroundColor: '#474747',
              borderRadius: 0
            }}
            handleStyle={{
              display: 'none'
            }}
          />
          <Flex
            px="3"
            justifyContent="flex-start"
            alignItems="center"
            height="100%"
          >
            <Flex flex="1" alignItems="center">
              <Flex alignItems="center">
                {currentMedia.type === 'PODCAST' ? (
                  <Podcast color="#fff" />
                ) : (
                  <Video color="#fff" />
                )}
                <Heading ml="3" fontSize="16px" fontWeight="500" color="#fff">
                  {currentMedia.title}
                </Heading>
              </Flex>
            </Flex>
            <Controls>
              <button onClick={() => {}} type="button">
                <Skip height="20px" color="#fff" />
              </button>
              <button
                onClick={() => dispatch({ type: PLAYER_TOGGLE_PLAYING })}
                type="button"
              >
                {playing ? <Pause /> : <Play />}
              </button>
              <button onClick={() => {}} type="button">
                <Skip height="20px" color="#fff" forward />
              </button>
            </Controls>
          </Flex>
        </Box>
      </StyledMinimizedPlayer>
    );
  }
);

export default MinimizedPlayer;
