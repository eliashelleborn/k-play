import React from 'react';
import styled from 'styled-components';
import { Text } from '../Typography';

const StyledMediaFilter = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    font-size: 20px;
    padding: ${({ theme }) => theme.space[3]}px;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;

    p {
      margin: 0;
    }
  }
`;

const MediaFilter = ({ current, setCurrent }) => {
  return (
    <StyledMediaFilter>
      <button type="button" onClick={() => setCurrent('all')}>
        <Text fontWeight={current === 'all' ? 600 : 'normal'}>Alla</Text>
      </button>
      <button type="button" onClick={() => setCurrent('podcast')}>
        <Text fontWeight={current === 'podcast' ? 600 : 'normal'}>Podd</Text>
      </button>
      <button type="button" onClick={() => setCurrent('video')}>
        <Text fontWeight={current === 'video' ? 600 : 'normal'}>Video</Text>
      </button>
    </StyledMediaFilter>
  );
};

export default MediaFilter;