import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styled-system';
import {
  CreateAccount,
  Search,
  Settings,
  Home,
  Lists,
  Night,
  NightMode,
  FacebookMenu,
  Instagram,
  LinkedInMenu
} from '../Icons';

const StyledMenu = styled.div`
  ${color}
  <<<<<<< HEAD
  top: 0;
  =======>>>>>>>masterbackground-color: ${({ theme }) => theme.colors.grey};
  position: fixed;
  z-index: 110;
  width: 100%;
  height: 100vh;
  /* transition: 0.3s; */

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    margin-top: 92px;
  }

  > div div p {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 24px;
    margin: 0 0 24px 16px;
  }
`;

const MenuIcons = styled.div`
  display: flex;
  flex-direction: column;

  > svg {
    margin-bottom: 25px;
    margin-top: 2px;
    margin-left: 36px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 24px;
  margin-bottom: 24px;
  margin-left: 16px;
`;

const StyledNightMode = styled(NightMode)`
  margin: 208px 16px 0 0;
  position: absolute;
  right: 0;
`;

const SocialIconWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  > p {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 18px;
  }
`;

const SocialIcons = styled.div`
  > svg {
    margin: 0 11px 0 11px;
  }
`;

const Menu = ({ authUser }) => {
  return (
    <StyledMenu>
      <div>
        <MenuIcons>
          <Home />
          {authUser ? <Lists /> : <CreateAccount />}
          <Search fill="#ffffff" />
          <Settings />
          {authUser && <Night />}
        </MenuIcons>

        <MenuIcons>
          <StyledNavLink to="/"> Start </StyledNavLink>

          {authUser ? (
            <StyledNavLink to="/mina-listor"> Mina listor </StyledNavLink>
          ) : (
            <StyledNavLink to="/auth"> Skapa konto </StyledNavLink>
          )}

          <StyledNavLink to="/sök1"> Sök </StyledNavLink>
          <StyledNavLink to="/inställningar"> Inställningar </StyledNavLink>

          {authUser && <p> Mörkt tema </p>}
        </MenuIcons>
        {authUser && <StyledNightMode />}
      </div>
      <SocialIconWrapper>
        <p> Besök oss på sociala medier </p>
        <SocialIcons>
          <FacebookMenu />
          <Instagram />
          <LinkedInMenu />
        </SocialIcons>
      </SocialIconWrapper>
    </StyledMenu>
  );
};

export default Menu;
