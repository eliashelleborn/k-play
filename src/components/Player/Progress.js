import React from 'react';
import styled from 'styled-components';

const StyledProgress = styled.div`
  padding: 0 ${({ theme }) => theme.space[4]}px;
  margin: ${({ theme }) => theme.space[2]}px 0;

  div {
    width: 100%;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;

const Progress = () => {
  return (
    <StyledProgress>
      <div />
    </StyledProgress>
  );
};

export default Progress;
