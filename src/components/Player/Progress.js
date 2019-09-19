import React from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import { Text } from '../Typography';

const StyledProgress = styled.div`
  padding: 0 ${({ theme }) => theme.space[4]}px;
  margin: ${({ theme }) => theme.space[2]}px 0;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 12px;
`;

const Progress = ({ duration, current, onChange }) => {
  return (
    <StyledProgress>
      <Time>
        <Text m="0">
          {new Date(current * 1000)
            .toISOString()
            .substring(duration > 3600 ? 11 : 14, 19)}
        </Text>
        <Text m="0">
          {new Date(duration * 1000)
            .toISOString()
            .substring(duration > 3600 ? 11 : 14, 19)}
        </Text>
      </Time>
      <Slider
        max={duration}
        min={0}
        defaultValue={0}
        value={current}
        onChange={onChange}
        trackStyle={{
          backgroundColor: '#EC733F',
          borderRadius: 0
        }}
        railStyle={{
          backgroundColor: '#474747',
          borderRadius: 0
        }}
        handleStyle={{
          backgroundColor: '#EC733F',
          border: 'none'
        }}
      />
    </StyledProgress>
  );
};

export default Progress;
