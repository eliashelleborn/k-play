import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

const TextMenu = styled.p`
  color: red;
`;

const Navigation = ({ authUser }) => {
  return (
    <StyledNavigation>
      <div>
        <NavLink to="/">
          <TextMenu>K-play</TextMenu>
        </NavLink>

        <NavLink to="/bibliotek">Mitt bibliotek</NavLink>
        <NavLink to="/sök">Sök</NavLink>
      </div>

      {authUser ? (
        <div>
          <button type="button" onClick={() => Auth.signOut()}>
            Logga ut
          </button>
          <p>{authUser.attributes.email}</p>
        </div>
      ) : (
        <div>
          <NavLink to="/logga-in">Logga in</NavLink>
          <NavLink to="/skapa-konto">Skapa konto</NavLink>
        </div>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
