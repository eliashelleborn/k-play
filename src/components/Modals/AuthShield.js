import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const StyledAuthShield = styled.div`
  text-align: center;
  margin: 0 16px;
  padding: 24px 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: relative;

  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
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
  return (
    <StyledAuthShield>
      <p>För att kunna spara behöver du vara inloggad.</p>
      <Button mb="3" as={Link} to="/auth">
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
