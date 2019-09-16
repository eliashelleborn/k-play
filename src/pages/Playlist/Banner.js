import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import { Heading } from '../../components/Typography';
import { More, Plus } from '../../components/Icons';

const Info = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg:first-child {
    margin-bottom: ${({ theme }) => theme.space[5]}px;
  }
`;

const PlaylistBanner = ({ name, context, image }) => {
  return (
    <Banner
      tint="rgba(0,0,0,.85)"
      color="white"
      image={image}
      justifyContent="space-between"
      px="3"
      py="3"
    >
      <Info>
        <div>
          <Heading as="h5" m="0">
            {context}
          </Heading>
        </div>
        <Heading as="h3" m="0">
          {name}
        </Heading>
        <div />
      </Info>
      <Buttons>
        <More color="#fff" />
        <Plus />
      </Buttons>
    </Banner>
  );
};

export default PlaylistBanner;
