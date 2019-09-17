import React from 'react';
import styled from 'styled-components';

const StyledMiscControls = styled.div`
  margin: ${({ theme }) => theme.space[3]}px 0;
  padding: 0 ${({ theme }) => theme.space[3]}px;

  > div {
    display: flex;
    align-items: center;
    button {
      flex: 1 1 auto;
      background: none;
      border: none;
      border-right: 1px solid #f3f3f3;
      padding: 8px 0;
      &:last-child {
        border-right: none;
      }
    }
  }
`;

const MiscControls = () => {
  return (
    <StyledMiscControls>
      <div>
        <button type="button">o</button>
        <button type="button">o</button>
        <button type="button">o</button>
        <button type="button">o</button>
      </div>
    </StyledMiscControls>
  );
};

export default MiscControls;
