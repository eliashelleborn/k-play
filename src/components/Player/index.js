import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import { Box } from '../Util';
import MediaBox from './MediaBox';
import Controls from './Controls';

const StyledPlayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const media = [
  'https://www.youtube.com/watch?v=Nmf2V55mlgw',
  'https://soundcloud.com/user-994747535/129-eeva-bolin-nya-organisation-for-kultur-i-grundskola-och-forskola'
];

const Player = () => {
  const [mediaUrl, setMediaUrl] = useState(media[0]);
  const [mediaType, setMediaType] = useState(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const { hostname } = new URL(mediaUrl);
    if (hostname.includes('youtube')) setMediaType('video');
    if (hostname.includes('soundcloud')) setMediaType('podcast');
  }, [mediaUrl]);

  const next = () => {
    let nextIndex = 0;
    const currentIndex = media.indexOf(mediaUrl);

    if (currentIndex < media.length - 1) nextIndex = currentIndex + 1;
    setMediaUrl(media[nextIndex]);
  };

  return (
    <StyledPlayer>
      <Box px="3">
        <Heading fontSize="24px" fontWeight="400">
          Dansare - oavsett vilkor?
        </Heading>
        <Text fontSize="12px" m="0" color="#AEAEAE">
          Inspelad 2019-05-15
        </Text>
        <Text fontSize="12px" m="0" color="#AEAEAE">
          I samarbete med Teaterförbundets dansavd.
        </Text>
      </Box>

      <MediaBox url={mediaUrl} playing={playing} type={mediaType} />
      <Controls next={next} togglePlaying={() => setPlaying(!playing)} />
    </StyledPlayer>
  );
};

export default Player;
