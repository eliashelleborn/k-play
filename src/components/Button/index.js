import React from 'react';
import styled from 'styled-components';
import { color, space, typography, layout } from 'styled-system';

const StyledButton = styled.button`
  ${color}
  ${space}
  ${typography}
  ${layout}
  height: 44px;
  border-radius: 3px;
  border: none;
  box-shadow: 0 4px 8px 0px rgba(43, 43, 43, 0.08);
  display: flex;
  align-items: center;
  justify-content: ${props => (props.withIcon ? 'flex-start' : 'center')};
  cursor: pointer;
`;

const Icon = styled.div`
  width: 20px;
  margin-right: ${({ theme }) => theme.space[4]}px;
  justify-content: center;
  align-items: center;
`;

const Button = ({ children, icon, ...rest }) => {
  return (
    <StyledButton withIcon={!!icon} {...rest}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  bg: 'orange',
  color: 'white',
  fontWeight: '500',
  px: '3',
  width: '100%'
};

export default Button;
