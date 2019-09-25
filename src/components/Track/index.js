import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import { Play, Video, More as MoreIcon, Podcast } from '../Icons';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modals';

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

  ${Text} {
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

const Track = ({ type, image, title, description, duration, episode }) => {
  const modal = useModal();
  return (
    <StyledTrack>
      <Cover>
        <Play />
        <img src={image} alt="" />
      </Cover>
      <Info>
        <div>
          {type === 'VIDEO' && <Video />}
          {type === 'PODCAST' && <Podcast />}
          <Text ml="2" as="span">
            {duration}
          </Text>
          <Text ml="2" as="span">
            {episode} Avsnitt
          </Text>
        </div>

        <Heading as="h5" m="0" mt="1" fontSize="20px" fontWeight="400">
          {title}
        </Heading>
        <Text fontSize="12px" m="0" mt="1">
          {description}
        </Text>
      </Info>
      <More openModal={modal.toggle}>
        <MoreIcon />
      </More>
    </StyledTrack>
  );
};

export default Track;
