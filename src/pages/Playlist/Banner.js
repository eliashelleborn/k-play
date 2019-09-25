import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import { Heading } from '../../components/Typography';
import { More, Plus, Filter } from '../../components/Icons';

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
    background-color: transparent;
    border: none;
  }

  button:last-child {
    background-color: transparent;
    border: none;
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    display: none;
  }
`;

const StyledBanner = styled(Banner)`
  ${({ theme }) => theme.mediaQueries.large} {
    height: 190px;
    display: flex;
    align-items: center;
    padding: 0 64px;

    > div div h5 {
      font-size: 24px;
      font-weight: 500;
    }

    > div h3 {
      font-size: 56px;
      font-weight: 600;
    }
  }
`;

const DesktopSettings = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.desktop} {
    display: initial;
    margin-top: 50px;
  }
  > button {
    background-color: transparent;
    border: none;
    font-size: 24px;
    font-weight: 500;
    color: white;
    margin-right: 48px;
    height: 50px;

    > svg {
      width: 30px;
      height: 30px;
      margin-bottom: -7px;
      margin-left: 20px;
    }
  }

  > button:last-child {
    margin-right: 0px;

  }
`;


const PlaylistBanner = ({ name, context, image, openModal }) => {
  return (
    <StyledBanner
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

      <DesktopSettings>
        <button type="button">
          Filter
          <Filter color="#fff" />
        </button>
        <button onClick={openModal} type="button">
          Redigera lista
          <More color="#fff" />
        </button>
        <button type="button">
          Lägg till objekt i lista
          <Plus color="#fff" />
        </button>
      </DesktopSettings>


      <Buttons>
        <button onClick={openModal} type="button">
          <More color="#fff" />
        </button>
        <button type="button">
          <Plus />
        </button>
      </Buttons>
    </StyledBanner>
  );
};

export default PlaylistBanner;
