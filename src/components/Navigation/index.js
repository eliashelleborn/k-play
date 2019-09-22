/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
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
  z-index: 200;
  transition: 0.3s;
  position: fixed;
`;

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: true
    };
  }

  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    const ShowMenu = !this.state.showMenu ? (
      <Menu authUser={this.props.authUser} />
    ) : (
      ''
    );

    // transform={!this.state.showMenu ? 'rotate(45)' : 'rotate(0)'}

    return (
      <div>
        {ShowMenu}
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
            onClick={this.showMenu.bind(this)}
            color={!this.state.showMenu ? '#ffffff' : '#363636'}
          />
        </HamburgerWrapper>
      </div>
    );
  }
}

export default Navigation;
