import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Caption, Plus, More, Snippet, Share } from '../Icons';

const StyledMiscControls = styled.div`
  margin: ${({ theme }) => theme.space[3]}px 0;
  padding: 0 ${({ theme }) => theme.space[3]}px;
  justify-self: flex-start;
  > div {
    display: flex;
    button {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      border-right: 1px solid #f3f3f3;
      padding: 8px 0;

      ${({ theme }) => theme.mediaQueries.desktop} {
        padding: 0;
      }

      &:last-child {
        border-right: none;
      }
      &:first-child {
        display: none;

        ${({ theme }) => theme.mediaQueries.desktop} {
          display: initial;
        }
      }
    }
  }
`;

const MiscControls = ({ onCreateSnippet }) => {
  return (
    <StyledMiscControls>
      <div>
        <button type="button">
          <Share />
        </button>
        <button type="button">
          <NavLink to="/player-text">
            <Caption />
          </NavLink>
        </button>
        <button onClick={onCreateSnippet} type="button">
          <Snippet />
        </button>
        <button type="button">
          <Plus height="28px" color="#363636" />
        </button>
        <button type="button">
          <More />
        </button>
      </div>
    </StyledMiscControls>
  );
};

export default MiscControls;
