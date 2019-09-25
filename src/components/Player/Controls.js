import React from 'react';
import styled from 'styled-components';
import { Play, Pause, Skip, SkipTen } from '../Icons';

const StyledControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.space[3]}px 0;
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
  border: none;
  -webkit-tap-highlight-color: transparent;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const PlayWrapper = styled.div`
  margin-left: 5px;
  margin-top: 3px;
`;

const Controls = ({
  playing,
  togglePlaying,
  next,
  previous,
  jump,
  disableNext,
  disablePrevious
}) => {
  return (
    <StyledControls>
      <Button onClick={() => jump(-1)} type="button">
        <SkipTen />
      </Button>
      <Button disabled={disablePrevious} onClick={previous} type="button">
        <Skip color={disablePrevious ? '#AEAEAE' : '#363636'} />
      </Button>

      <PlayPauseButton onClick={togglePlaying} type="button">
        {playing ? (
          <Pause />
        ) : (
          <PlayWrapper>
            <Play />
          </PlayWrapper>
        )}
      </PlayPauseButton>

      <Button disabled={disableNext} onClick={next} type="button">
        <Skip color={disableNext ? '#AEAEAE' : '#363636'} forward />
      </Button>
      <Button onClick={() => jump(1)} type="button">
        <SkipTen forward />
      </Button>
    </StyledControls>
  );
};

export default Controls;
