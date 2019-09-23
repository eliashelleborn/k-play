import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tint = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(28, 28, 28, 0.4);
`;

const Modal = ({ children, isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <StyledModal>
          <Tint onClick={hide} />
          {children}
        </StyledModal>,
        document.body
      )
    : null;

export default Modal;
