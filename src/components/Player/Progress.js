import React from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';

const StyledProgress = styled.div`
  padding: 0 ${({ theme }) => theme.space[4]}px;
  margin: ${({ theme }) => theme.space[2]}px 0;
`;

const Progress = ({ duration, current, onChange }) => {
  return (
    <StyledProgress>
      <Slider
        max={duration}
        min={0}
        defaultValue={0}
        value={current}
        onChange={onChange}
        trackStyle={{
          backgroundColor: '#EC733F'
        }}
        handleStyle={{
          backgroundColor: '#EC733F',
          border: 'none'
        }}
        railStyle={{
          backgroundColor: '#474747'
        }}
      />
    </StyledProgress>
  );
};

export default Progress;
