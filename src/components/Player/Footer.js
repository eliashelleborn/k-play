import React from 'react';
import styled from 'styled-components';
import { Devices, Share } from '../Icons';
import { Text } from '../Typography';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${({ theme }) => theme.space[3]}px;

  ${({ theme }) => theme.mediaQueries.desktop} {
    display: none;
  }

  button {
    padding: ${({ theme }) => theme.space[3]}px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <button type="button">
        <Devices />
        <Text m="0" ml="3">
          Air Pods
        </Text>
      </button>
      <button type="button">
        <Share />
      </button>
    </StyledFooter>
  );
};

export default Footer;
