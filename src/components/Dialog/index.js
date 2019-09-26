import React from 'react';
import styled from 'styled-components';

const StyledDialog = styled.div`
  padding: ${({ theme }) => theme.space[4]}px;
  padding-bottom: 0;
  background-color: #fff;
  width: 100%;
  margin: 0 16px;
  position: relative;
  max-width: 400px;
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;

  button {
    justify-content: center;
    flex: 1;
    display: flex;
    margin: ${({ theme }) => theme.space[3]}px 0;
    padding: 8px 0;
    font-size: 20px;
    background: none;
    border: none;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    &:first-child {
      border-right: 1px solid #f3f3f3;
      font-weight: ${props => props.mainButton === 'cancel' && '600'};
    }
    &:last-child {
      font-weight: ${props => props.mainButton === 'confirm' && '600'};
    }
  }
`;

const Dialog = ({
  children,
  cancel,
  onCancel,
  confirm,
  onConfirm,
  mainButton
}) => {
  return (
    <StyledDialog>
      {children}
      <Buttons mainButton={mainButton}>
        <button onClick={onCancel} type="button">
          {cancel || 'Avbryt'}
        </button>
        <button onClick={onConfirm} type="button">
          {confirm || 'Fortsätt'}
        </button>
      </Buttons>
    </StyledDialog>
  );
};

export default Dialog;
