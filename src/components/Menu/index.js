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
import { useAuth } from '../../context/auth';

const StyledMenu = styled.div`
  ${color}
  top: 0;
  background-color: ${({ theme }) => theme.colors.grey};
  position: fixed;
  z-index: 110;
  width: 100%;
  height: 100vh;
  /* transition: 0.3s; */

  ${({ theme }) => theme.mediaQueries.desktop} {
    height: 65px;
    margin-left: 170px;
    background-color: transparent;
    width: auto;
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    margin-top: 92px;

    ${({ theme }) => theme.mediaQueries.desktop} {
      margin-top: 24px;
    }
  }

  > div div p {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 24px;
    margin: 0 0 24px 16px;

    ${({ theme }) => theme.mediaQueries.desktop} {
      color: ${({ theme }) => theme.colors.grey};
      font-size: 16px;
      font-weight: 500;
      margin: 0 0 24px 40px;
    }
  }
`;

const MenuIcons = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: row;
  }

  > svg {
    margin-bottom: 25px;
    margin-top: 2px;
    margin-left: 36px;

    ${({ theme }) => theme.mediaQueries.desktop} {
      display: none;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 24px;
  margin-bottom: 24px;
  margin-left: 16px;

  &:nth-child(4) {
    display: initial;
    ${({ theme }) => theme.mediaQueries.desktop} {
      display: none;
    }
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 16px;
    font-weight: 500;
    margin-left: 40px;
  }
`;

const StyledNightMode = styled(NightMode)`
  margin: 208px 16px 0 0;
  position: absolute;
  right: 0;

  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: -2px 0 0 12px;
    position: relative;
  }
`;

const SocialIconWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.desktop} {
    display: none;
  }

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

const ProfileIcon = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.desktop} {
    display: flex;
    align-items: center;
    flex-direction: row;
    > a {
      margin-left: 8px;
    }
    > img {
      width: 32px;
      height: 32px;
      border-radius: 3px;
      margin-top: -24px;
    }
  }
`;

const Menu = ({ close }) => {
  const { authUser } = useAuth();

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

          {authUser &&
            <ProfileIcon>
              <img src="https://i.pinimg.com/originals/dc/55/a0/dc55a0fec14d93d9cf6fa32c32f7c7f2.jpg" alt="profile icon" />
              <StyledNavLink to="/"> Josefine </StyledNavLink>
            </ProfileIcon>
          }

          <StyledNavLink onClick={close} to="/">
            Start
          </StyledNavLink>

          {authUser ? (
            <StyledNavLink onClick={close} to="/mina-listor">
              Mina listor
            </StyledNavLink>
          ) : (
            <StyledNavLink onClick={close} to="/auth">
              Skapa konto
            </StyledNavLink>
          )}

          <StyledNavLink onClick={close} to="/sök">
            Sök
          </StyledNavLink>
          <StyledNavLink onClick={close} to="/inställningar">
            Inställningar
          </StyledNavLink>

          {authUser && <p>Mörkt tema</p>}
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
