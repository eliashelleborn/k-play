import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Typography';

const StyledListCard = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -2;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Tint = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -1;
`;

const ListCard = ({ image, title }) => {
  return (
    <StyledListCard>
      <Content>
        <Heading as="h3">{title}</Heading>
      </Content>

      <Tint />
      {image && <img src={image} alt="" />}
    </StyledListCard>
  );
};

export default ListCard;
