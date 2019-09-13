import React from 'react';
import styled from 'styled-components';
import { color, space, typography, flexbox } from 'styled-system';
import { Flex } from 'rebass/styled-components';

const StyledButton = styled.button`
  ${color}
  ${space}
  ${typography}
  ${flexbox}
  height: 44px;
  border-radius: 3px;
  border: none;
  font-weight: 500;
  width: 100%;
  box-shadow: 0 4px 8px 0px rgba(43, 43, 43, 0.08);
  display: flex;
  align-items: center;
`;

const Button = ({ children, icon, ...rest }) => {
  return (
    <StyledButton justifyContent={icon ? 'flex-start' : 'center'} {...rest}>
      {icon && (
        <Flex width="20px" mr="4" justifyContent="center" alignItems="center">
          {icon}
        </Flex>
      )}
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  bg: 'orange',
  color: 'white',
  px: 3
};

export default Button;
