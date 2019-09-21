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

  > div {
    top: 0;
    left: ${props => (props.type === 'video' ? 0 : '16px')};
    width: calc(100% - ${props => (props.type === 'video' ? '0px' : '32px')});
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
  ({ playing, url, type, onReady, onProgress }, ref) => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    return (
      <StyledMediaBox type={type}>
        <div>
          <Overlay>
            <TypeIndicator>
              {type === 'podcast' ? <Podcast /> : <Video />}
            </TypeIndicator>

            {type === 'podcast' && (
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

                <Text m="0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, praesentium dolore consequuntur dicta esse pariatur
                  placeat, dolorum eveniet voluptas non error fugiat molestiae
                  aliquam eos aut minus. Distinctio, doloribus non!
                </Text>
              </Drawer>
            )}
          </Overlay>
          <ReactPlayer
            ref={ref}
            width="100%"
            height="100%"
            url={url}
            playing={playing}
            config={{
              youtube: {
                playerVars: { modestbranding: 1 }
              }
            }}
            onReady={onReady}
            onProgress={onProgress}
          />
          {type === 'podcast' && (
            <img
              src="https://images.unsplash.com/photo-1562887106-0ba63ac82e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
              alt=""
            />
          )}
        </div>
      </StyledMediaBox>
    );
  }
);

export default MediaBox;
