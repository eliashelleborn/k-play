import React from 'react';
import styled from 'styled-components';

const StyledControls = styled.div``;

const Controls = ({ togglePlaying, next }) => {
  return (
    <StyledControls>
      <button onClick={togglePlaying} type="button">
        Play/Pause
      </button>
      <button onClick={next} type="button">
        Next
      </button>
    </StyledControls>
  );
};

export default Controls;
