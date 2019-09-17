import React from 'react';
import styled from 'styled-components';
import { Play, Pause, Skip, SkipTen } from '../Icons';

const StyledControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.space[4]}px 0;
  padding: 0 ${({ theme }) => theme.space[3]}px;
`;

const Button = styled.button`
  outline: 0;
  flex: 1;
  -webkit-tap-highlight-color: transparent;
  padding: ${({ theme }) => theme.space[3]}px 0;
  background: none;
  border: none;
`;

const PlayPauseButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const Controls = ({ playing, togglePlaying, next }) => {
  return (
    <StyledControls>
      <Button onClick={next} type="button">
        <SkipTen />
      </Button>
      <Button onClick={next} type="button">
        <Skip />
      </Button>

      <PlayPauseButton onClick={togglePlaying} type="button">
        {playing ? <Pause /> : <Play />}
      </PlayPauseButton>

      <Button onClick={next} type="button">
        <Skip forward />
      </Button>
      <Button onClick={next} type="button">
        <SkipTen forward />
      </Button>
    </StyledControls>
  );
};

export default Controls;
