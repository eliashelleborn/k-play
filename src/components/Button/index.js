import React from 'react';
import styled from 'styled-components';
import { color, space, typography, flexbox, layout } from 'styled-system';

const StyledButton = styled.button`
  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${layout}
  height: 44px;
  border-radius: 3px;
  border: none;
  box-shadow: 0 4px 8px 0px rgba(43, 43, 43, 0.08);
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 20px;
  margin-right: ${({ theme }) => theme.spacing[4]}px;
  justify-content: center;
  align-items: center;
`;

const Button = ({ children, icon, ...rest }) => {
  return (
    <StyledButton
      bg="orange"
      color="white"
      fontWeight="500"
      px="3"
      width="100%"
      justifyContent={icon ? 'flex-start' : 'center'}
      {...rest}
    >
      {icon && <Icon>{icon}</Icon>}
      {children}
    </StyledButton>
  );
};

export default Button;
