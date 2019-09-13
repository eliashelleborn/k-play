import React from 'react';
import styled from 'styled-components';
import { color as colorProps, space, typography } from 'styled-system';

const StyledButton = styled.button`
  ${colorProps}
  ${space}
  ${typography}
  border-radius: 3px;
  border: none;
  font-weight: 500;
  width: 100%;
  box-shadow: 0 4px 8px 0px rgba(43, 43, 43, 0.08);
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.defaultProps = {
  bg: 'orange',
  color: 'white',
  p: 3
};

export default Button;
