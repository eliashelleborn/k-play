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

const MiscControls = ({
  onCreateSnippet,
  mediaId,
  hide,
  onAddToList,
  onMore
}) => {
  return (
    <StyledMiscControls>
      <div>
        <button type="button">
          <Share />
        </button>
        <button type="button">
          <NavLink onClick={hide} to={`/media/${mediaId}`}>
            <Caption />
          </NavLink>
          <span>Läs mer</span>
        </button>
        <button onClick={onCreateSnippet} type="button">
          <Snippet />
          <span>Spara stycke</span>
        </button>
        <button onClick={onAddToList} type="button">
          <Plus height="28px" color="#363636" />
          <span>Lägg till</span>
        </button>
        <button onClick={onMore} type="button">
          <More />
          <span>Mer</span>
        </button>
      </div>
    </StyledMiscControls>
  );
};

export default MiscControls;
