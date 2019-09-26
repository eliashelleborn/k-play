import React from 'react';
import styled from 'styled-components';
import { Lock } from '../Icons';
import { Text } from '../Typography';

const StyledRememberMe = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space[3]}px;
  background-color: #fff;
`;

const RememberMe = ({ value, onChange }) => {
  return (
    <StyledRememberMe>
      <Lock />
      <Text ml="3" mr="auto">
        Spara mina uppgifter
      </Text>
      <input
        type="checkbox"
        name="remember"
        value={value}
        onChange={onChange}
      />
    </StyledRememberMe>
  );
};

export default RememberMe;
