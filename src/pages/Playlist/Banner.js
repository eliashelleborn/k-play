import React from 'react';
import { Link } from 'react-router-dom';

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

  button:first-child {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
    padding: 5px;
  }
`;

const PlaylistBanner = ({ name, context, image, openModal }) => {
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
          <Heading as="h5" color="white" m="0">
            {context}
          </Heading>
        </div>
        <Heading as="h3" color="white" m="0">
          {name}
        </Heading>
        <div />
      </Info>
      <Buttons>
        <button onClick={openModal} type="button">
          <More color="#fff" />
        </button>
        <Link to="/sök">
          <Plus />
        </Link>
      </Buttons>
    </Banner>
  );
};

export default PlaylistBanner;
