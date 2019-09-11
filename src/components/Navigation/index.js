import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

const TextMenu = styled.p`
  color: red;
`;

const Navigation = ({ authUser }) => {
  return (
    <div>
      <NavLink to="/k-play">
        <TextMenu>K-play</TextMenu>
      </NavLink>

      <NavLink to="/bibliotek">Mitt bibliotek</NavLink>
      <NavLink to="/sök">Sök</NavLink>

      {authUser ? (
        <button type="button" onClick={() => Auth.signOut()}>
          Logga ut
        </button>
      ) : (
        <NavLink to="/logga-in">Logga in</NavLink>
      )}
    </div>
  );
};

export default Navigation;
