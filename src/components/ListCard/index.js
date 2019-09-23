import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Heading, Text } from '../Typography';
import Heart from '../Icons/Heart';
import { Person } from '../Icons';

const StyledListCard = styled(Link)`
  position: relative;
  width: 100%;
  padding-top: 100%;
  cursor: pointer;

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
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

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div {
    flex: 1;
    display: flex;
    align-items: flex-end;
    padding-bottom: 16px;
    p {
    }
  }
  h3 {
    width: 100%;
    text-align: center;
    padding: 0 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    max-height: 100px;
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

const ListCard = ({ image, title, to, isOwner, tracksNum = null, ...rest }) => {
  return (
    <StyledListCard to={to} {...rest}>
      {isOwner ? <Person /> : <Heart />}

      <Content>
        {tracksNum !== null && <div />}
        <Heading as="h3">{title}</Heading>
        {tracksNum !== null && (
          <div>
            <Text color="#fff" m="0">{`${tracksNum} st spår`}</Text>
          </div>
        )}
      </Content>

      <Tint />
      {image && <img src={image} alt="" />}
    </StyledListCard>
  );
};

export default ListCard;
