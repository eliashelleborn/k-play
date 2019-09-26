import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { Text } from '../Typography';
import { Podcast, Video } from '../Icons';

const StyledMediaBox = styled.div`
  width: 100%;
  flex: 1;
  max-height: 300px;
  position: relative;

  ${({ theme }) => theme.mediaQueries.large} {
    max-height: 100%;
  }

  > div {
    top: 0;
    left: ${props => (props.type === 'VIDEO' ? 0 : '16px')};
    width: calc(100% - ${props => (props.type === 'VIDEO' ? '0px' : '32px')});
    height: 100%;
    position: absolute;
  }

  img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (orientation: landscape) and (max-width: 900px) {
    height: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(54, 54, 54, 0.1);
`;

const Drawer = styled(motion.div)`
  width: 70%;
  height: 100%;
  background-color: #fff;
  padding: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[6]}px;
  font-size: 16px;
  position: relative;
  line-height: 27px;

  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 16px;
    border: none;
    background-color: transparent;

    svg {
      transform: rotateZ(${props => (props.open ? '0deg' : '180deg')});
    }
  }
`;

const TypeIndicator = styled.div`
  padding: ${({ theme }) => theme.space[3]}px;
  right: 24px;
  top: 0;
  position: absolute;
  background-color: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const drawerVariants = {
  open: { x: 0 },
  closed: { x: 'calc(-100% + 44px)' }
};

const MediaBox = forwardRef(
  (
    {
      playing,
      url,
      type,
      image,
      description,
      onReady,
      onProgress,
      open,
      onStart,
      onPause
    },
    ref
  ) => {
    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
      <StyledMediaBox type={type}>
        <div>
          <Overlay>
            <TypeIndicator>
              {type === 'PODD' ? <Podcast /> : <Video />}
            </TypeIndicator>

            {type === 'PODD' && (
              <Drawer
                open={drawerOpen}
                animate={drawerOpen ? 'open' : 'closed'}
                variants={drawerVariants}
                transition={{ ease: 'easeInOut' }}
              >
                <button
                  type="button"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                >
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                      fill="#363636"
                    />
                  </svg>
                </button>

                <Text m="0">{description}</Text>
              </Drawer>
            )}
          </Overlay>
          <ReactPlayer
            ref={ref}
            width="100%"
            height="100%"
            url={url}
            playing={playing}
            muted={!open && type === 'VIDEO'}
            style={{ pointerEvents: 'none' }}
            config={{
              soundcloud: {
                options: {
                  auto_play: true
                }
              },
              youtube: {
                playerVars: { modestbranding: 1 }
              }
            }}
            onPause={onPause}
            onReady={onReady}
            onProgress={onProgress}
            onStart={onStart}
          />
          {false === 'PODD' && <img src={image} alt="" />}
        </div>
      </StyledMediaBox>
    );
  }
);

export default MediaBox;
