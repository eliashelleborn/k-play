import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Typography';

const StyledListCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
  }

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
      <Heading as="h3">{title}</Heading>
      <Tint />
      {image && <img src={image} alt="" />}
    </StyledListCard>
  );
};

export default ListCard;
