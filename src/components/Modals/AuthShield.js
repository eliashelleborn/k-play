import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import { usePlayer, PLAYER_CLOSE } from '../../context/player';

const StyledAuthShield = styled.div`
  text-align: center;
  margin: 0 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: relative;

  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    max-width: 300px;
  }

  button,
  a {
    max-width: 150px;
  }
`;

const Back = styled.button`
  color: ${({ theme }) => theme.colors.hideGrey};
  span {
    text-decoration: underline;
  }
`;

const AuthShield = ({ hide }) => {
  const { dispatch } = usePlayer();
  return (
    <StyledAuthShield>
      <p>För att komma åt denna funktion behöver du vara inloggad.</p>
      <Button
        onClick={() => {
          hide();
          dispatch({ type: PLAYER_CLOSE });
        }}
        mb="3"
        as={Link}
        to="/auth"
      >
        Logga in
      </Button>
      <Back onClick={hide} type="button">
        {'<'}
        <span>Tillbaka</span>
      </Back>
    </StyledAuthShield>
  );
};

export default AuthShield;
