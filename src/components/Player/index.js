import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import { Box } from '../Util';
import MediaBox from './MediaBox';
import Controls from './Controls';
import MiscControls from './MiscControls';
import Progress from './Progress';

const StyledPlayer = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  height: calc(100vh - 65px);
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const media = [
  'https://www.youtube.com/watch?v=Nmf2V55mlgw',
  'https://soundcloud.com/user-994747535/129-eeva-bolin-nya-organisation-for-kultur-i-grundskola-och-forskola'
];

const Player = () => {
  const [mediaUrl, setMediaUrl] = useState(media[0]);
  const [mediaType, setMediaType] = useState(null);
  const [mediaDuration, setMediaDuration] = useState(null);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    // Determine media type
    const { hostname } = new URL(mediaUrl);
    if (hostname.includes('youtube')) setMediaType('video');
    if (hostname.includes('soundcloud')) setMediaType('podcast');
  }, [mediaUrl]);

  const handleReady = () => {
    setMediaDuration(playerRef.current.getDuration());
  };

  const next = () => {
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
  };

  const jumpTenSeconds = direction => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + 10 * direction, 'seconds');
  };

  return (
    <StyledPlayer>
      <Box px="3" my="3">
        <Heading fontSize="24px" fontWeight="400" m="0" mb="3">
          Dansare - oavsett vilkor?
        </Heading>
        <Text fontSize="12px" m="0" mb="1" color="#AEAEAE">
          Inspelad 2019-05-15
        </Text>
        <Text fontSize="12px" m="0" color="#AEAEAE">
          I samarbete med Teaterförbundets dansavd.
        </Text>
      </Box>

      <MediaBox
        ref={playerRef}
        url={mediaUrl}
        playing={playing}
        onReady={handleReady}
        type={mediaType}
      />

      <ControlsContainer>
        <MiscControls />
        <Progress duration={mediaDuration} />
        <Controls
          next={next}
          previous={previous}
          playing={playing}
          jump={jumpTenSeconds}
          togglePlaying={() => setPlaying(!playing)}
        />
      </ControlsContainer>
    </StyledPlayer>
  );
};

export default Player;
