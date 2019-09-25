import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Caption, Plus, More, Snippet } from '../Icons';

const StyledMiscControls = styled.div`
  margin: ${({ theme }) => theme.space[3]}px 0;
  padding: 0 ${({ theme }) => theme.space[3]}px;
  justify-self: flex-start;
  > div {
    display: flex;
    button {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      background: none;
      border: none;
      border-right: 1px solid #f3f3f3;
      padding: 8px 0;
      font-size: 12px;

      svg,
      a {
        flex: 1;
        display: flex;
        align-items: center;
        margin-bottom: 3px;
      }

      &:last-child {
        border-right: none;
      }
    }
  }
`;

const MiscControls = ({ onCreateSnippet }) => {
  return (
    <StyledMiscControls>
      <div>
        <button type="button">
          <NavLink to="/player-text">
            <Caption />
          </NavLink>
          <span>Läs mer</span>
        </button>
        <button onClick={onCreateSnippet} type="button">
          <Snippet />
          <span>Spara stycke</span>
        </button>
        <button type="button">
          <Plus height="28px" color="#363636" />
          <span>Lägg till</span>
        </button>
        <button type="button">
          <More />
          <span>Mer</span>
        </button>
      </div>
    </StyledMiscControls>
  );
};

export default MiscControls;
