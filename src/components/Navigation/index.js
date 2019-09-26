import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Hamburger, ArrowBack, Kplay, Search } from '../Icons';

import Menu from '../Menu';
import { usePlayer, PLAYER_MINIMIZE, PLAYER_CLOSE } from '../../context/player';
import useRouter from '../../hooks/useRouter';

const StyledNavigation = styled.nav`
  box-shadow: 0px 4px 8px rgba(54, 54, 54, 0.08);
  background-color: #fff;
  height: 65px;
  padding: 0 24px 0 16px;
  display: flex;
  align-items: center;
  z-index: 80;
  position: fixed;
  width: 100%;

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 0 64px;
  }

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

  > div div:nth-child(1) {
    ${({ theme }) => theme.mediaQueries.desktop} {
      display: none;
    }
  }

  > div div:nth-child(2) {
    justify-content: center;

    ${({ theme }) => theme.mediaQueries.desktop} {
      justify-content: flex-start;
    }
  }

  > div div:nth-child(3) {
    justify-content: center;

    ${({ theme }) => theme.mediaQueries.desktop} {
      width: 260px;
      background-color: #f3f3f3;
      justify-content: flex-end;
      padding: 6px 10px;
      border-radius: 3px;
    }
  }
`;

const HamburgerWrapper = styled.div`
  display: flex;
  width: calc(100% - 24px);
  height: 65px;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const StyledHamburger = styled(Hamburger)`
  z-index: 90;
  transition: 0.3s;
  position: fixed;
  display: initial;

  ${({ theme }) => theme.mediaQueries.desktop} {
    display: none;
  }
`;

const Back = styled.div`
  border: none;
  background: none;
  cursor: pointer;
`;

const DesktopMenu = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.desktop} {
    display: initial;
  }
  padding-bottom: 65px;
`;

const Navigation = () => {
  const { location, history } = useRouter();
  const {
    state: {
      playing: playerPlaying,
      open: playerOpen,
      minimized: playerMinimized
    },
    dispatch
  } = usePlayer();
  const [prevPath, setPrevPath] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [backQueue, setBackQueue] = useState([]);

  const addToBackQueue = path => {
    setBackQueue([path, ...backQueue]);
  };

  const handleBackClick = () => {
    if (playerOpen && !playerMinimized) {
      if (playerPlaying) {
        dispatch({ type: PLAYER_MINIMIZE });
      }
      dispatch({ type: PLAYER_CLOSE });
    } else {
      const to = backQueue.length > 0 ? backQueue[0] : null;
      history.push(to || '/');
      setBackQueue(backQueue.filter(b => b !== to));
    }
  };

  useEffect(() => {
    // showSearch logic
    if (location.pathname === '/sök') setShowSearch(false);
    else setShowSearch(true);

    // ===== Manual backQueue logic =====
    // Handle Auth nested routes
    if (location.pathname.match(/auth\/./g)) {
      addToBackQueue('/auth');
    }

    // Handle "/spellista", "/mina-listor" relation
    if (
      location.pathname.includes('/spellista') &&
      prevPath &&
      prevPath.includes('/mina-listor')
    ) {
      addToBackQueue('/mina-listor');
    }

    // Handle "/sök"
    if (location.pathname.includes('/sök')) {
      if (prevPath && prevPath.includes('/spellista')) {
        addToBackQueue(prevPath);
      }
    }

    const queueIndex = backQueue.indexOf(location.pathname);
    if (queueIndex > 0) {
      setBackQueue([...backQueue.filter((_, i) => i !== queueIndex)]);
    }

    setPrevPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setShowBack(location.pathname !== '/' || (playerOpen && !playerMinimized));
  }, [location.pathname, playerOpen, playerMinimized]);

  return (
    <div>
      {showMenu && <Menu close={() => setShowMenu(false)} />}
      <DesktopMenu>
        <Menu />
      </DesktopMenu>

      <StyledNavigation>
        <div>
          <div>
            {showBack && (
              <Back onClick={handleBackClick}>
                <ArrowBack />
              </Back>
            )}
          </div>
          <div>
            <NavLink to="/">
              <Kplay />
            </NavLink>
          </div>
          <div>
            {showSearch && (
              <NavLink to="/sök">
                <Search />
              </NavLink>
            )}
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
