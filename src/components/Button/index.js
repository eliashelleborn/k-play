import React from 'react';
import styled from 'styled-components';
import { color, space, typography, layout } from 'styled-system';

const StyledButton = styled.button`
  ${color}
  ${space}
  ${typography}
  ${layout}
  width: 100%;
  height: 44px;
  border-radius: 3px;
  font-weight: 500;
  border: none;
  box-shadow: 0px 4px 8px rgba(54, 54, 54, 0.08);
  display: flex;
  align-items: center;
  justify-content: ${props => (props.icon ? 'flex-start' : 'center')};
  cursor: pointer;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  text-decoration: none;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  transition: box-shadow .3s ease;
  position: relative;

  &::after {
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    transition: background-color .3s ease;
  }

  &:active {
    box-shadow: none;
    &::after {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Icon = styled.div`
  width: 20px;
  margin-right: ${({ theme }) => theme.space[4]}px;
  justify-content: center;
  align-items: center;
`;

const Button = ({ children, icon, ...rest }) => {
  return (
    <StyledButton {...rest} icon={icon}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  bg: 'orange',
  color: 'white'
};

export default Button;
