import React, { useState } from 'react';
import styled from 'styled-components';
import { border } from 'styled-system';
import { Show } from '../Icons';

const StyledInput = styled.div`
  ${border}
  height: 60px;
  position: relative;
  display: flex;
  font-family: Barlow;
  input {
    height: 100%;
    width: 100%;
    font-size: 16px;
    background: none;
    border: none;
    outline: none;
    font-family: Barlow;
    -webkit-tap-highlight-color: none;

    ${({ theme }) => theme.mediaQueries.medium} {
      width: 300px;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

const Icon = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 ${({ theme }) => theme.space[3]}px;
`;

const ToggleVisible = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 ${({ theme }) => theme.space[3]}px;
  cursor: pointer;
`;

const Input = ({
  type,
  placeholder,
  icon,
  onChange,
  value,
  autoComplete,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <StyledInput {...rest}>
      <Icon>{icon}</Icon>
      <input
        autoComplete={autoComplete || type}
        type={
          type === 'password' ? (visible ? 'text' : 'password') : type || 'text'
        }
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {type === 'password' && (
        <ToggleVisible onClick={() => setVisible(!visible)}>
          <Show color={visible ? '#474747' : '#AEAEAE'} />
        </ToggleVisible>
      )}
    </StyledInput>
  );
};

Input.defaultProps = {
  borderBottom: '1px solid',
  borderBottomColor: 'lineGrey'
};

export default Input;
