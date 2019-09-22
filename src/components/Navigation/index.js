/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Hamburger, ArrowBack, Kplay, Search } from '../Icons';

import Menu from '../Menu';

const StyledNavigation = styled.nav`
  box-shadow: 0px 4px 8px rgba(54, 54, 54, 0.08);
  background-color: #fff;
  height: 65px;
  padding: 0 24px 0 16px;
  display: flex;
  align-items: center;
  z-index: 2;
  position: fixed;
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div div {
    display: flex;
    align-items: center;
    width: 33%;
  }

  > div div:nth-child(2) {
    justify-content: center;
  }

  > div div:nth-child(3) {
    justify-content: center;
  }
`;

const HamburgerWrapper = styled.div`
  display: flex;
  width: calc(100% - 24px);
  height: 65px;
  justify-content: flex-end;
  align-items: center;
`;

const StyledHamburger = styled(Hamburger)`
  z-index: 10;
  transition: 0.3s;
  position: fixed;
`;

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {showMenu && <Menu />}
      <StyledNavigation>
        <div>
          <div>
            <NavLink to="/">
              <ArrowBack />
            </NavLink>
          </div>
          <div>
            <NavLink to="/">
              <Kplay />
            </NavLink>
          </div>
          <div>
            <NavLink to="/sök">
              <Search />
            </NavLink>
          </div>
        </div>
      </StyledNavigation>
      <HamburgerWrapper>
        <StyledHamburger
          onClick={() => setShowMenu(!showMenu)}
          color={showMenu ? '#ffffff' : '#363636'}
        />
      </HamburgerWrapper>
    </div>
  );
};

export default Navigation;
