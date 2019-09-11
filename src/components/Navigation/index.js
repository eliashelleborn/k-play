import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TextMenu = styled.p`
  color: red;
`;

const Navigation = () => {
  return (
    <div>
      <NavLink to="/k-play">
        <TextMenu>K-play</TextMenu>
      </NavLink>

      <NavLink to="/bibliotek">Mitt bibliotek</NavLink>
      <NavLink to="/sök">Sök</NavLink>

      <NavLink to="/logga-in">Logga in</NavLink>
    </div>
  );
};

export default Navigation;
