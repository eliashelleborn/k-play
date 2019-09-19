import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
import { Hamburger, ArrowBack, Kplay, Search } from '../Icons';

import Menu from '../Menu';

const StyledNavigation = styled.nav`
  box-shadow: 0px 4px 8px rgba(54, 54, 54, 0.08);
  height: 65px;
  padding: 0 24px 0 16px;
  display: flex;
  align-items: center;

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
    justify-content: flex-end;
  }
`;

const StyledHamburger = styled(Hamburger)`
  margin-left: 16px;
  z-index: 4;
  transition: 0.3s;
`;

class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: true,
    }
  }

  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }
  render() {
    // console.log(this.props.authUser)

    let ShowMenu = !this.state.showMenu ? (
      <Menu authUser={this.props.authUser}/>
    ) : '';

    // console.log(this.state.color)

    return(
      <div>
        {ShowMenu}
        <StyledNavigation>
          <div>
            <div>
            <NavLink to="/">
              <ArrowBack/>
            </NavLink>
            </div>

            <div>
            <NavLink to="/bibliotek">
              <Kplay/>
            </NavLink>
            </div>

            <div>
              <NavLink to="/sök">
                <Search/>
              </NavLink>
              <StyledHamburger onClick={this.showMenu.bind(this)} transform={!this.state.showMenu ? 'rotate(45)' : 'rotate(0)'} color={!this.state.showMenu ? '#ffffff' : '#363636'}/>
            </div>
          </div>
        </StyledNavigation>
      </div>
    )
  }
}

export default Navigation;
