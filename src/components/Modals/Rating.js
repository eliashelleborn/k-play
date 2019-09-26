import React from 'react';

import styled from 'styled-components';

import { Heading, Text } from '../Typography';
import { Close, Podcast, Video } from '../Icons';
import { Image, ContentType } from './TrackActions';
import Star from '../Icons/Star';

const StyledRating = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.space[3]}px;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  padding: 16px;
  position: absolute;
  left: 16px;
  top: 20px;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;

  > svg {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Rating = ({ hide, content }) => {
  return (
    <StyledRating>
      <CloseButton onClick={hide}>
        <Close size="16px" color="#363636" />
      </CloseButton>
      {content && (
        <div>
          <Heading as="h3" m="0" mb="1" fontWeight="500">
            {content.title}
          </Heading>
          <Text m="0" mb="3">
            {content.subtitle}
          </Text>
          <Image>
            <ContentType>
              {content.type === 'PODD' ? <Podcast /> : <Video />}
            </ContentType>
            <img src={content.image} alt="" />
          </Image>
        </div>
      )}
      <div>
        <Text fontWeight="500" textAlign="center">
          Mitt betyg
        </Text>
        <Stars>
          <Star color="#EC733F" />
          <Star color="#EC733F" />
          <Star color="#EC733F" />
          <Star color="#EC733F" />
          <Star />
        </Stars>
        <Text textAlign="center" color="hideGrey">
          Snittbetyg 4.2
        </Text>
      </div>
    </StyledRating>
  );
};

export default Rating;
