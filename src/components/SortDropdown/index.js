import React from 'react';
import styled from 'styled-components';

const StyledSortDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 3px;
  right: 16px;
  bottom: 100%;
  transform: translateY(
    ${props => (props.open ? 'calc(100% + 133px)' : '0px')}
  );
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`;

const Item = styled.button`
  display: block;
  color: ${props => (props.selected ? '#000' : 'grey')};
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
`;

const Background = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${props => (props.open ? '1' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease;
  z-index: 8;
`;

const SortDropdown = ({ onSelect, selected, isOpen, close }) => {
  return (
    <div>
      <Background open={isOpen} onClick={close} />
      <StyledSortDropdown open={isOpen}>
        <Item
          type="button"
          selected={selected === 'createdAt'}
          onClick={() => {
            onSelect('createdAt');
            close();
          }}
        >
          Datum
        </Item>
        <Item
          type="button"
          selected={selected === 'title'}
          onClick={() => {
            onSelect('title');
            close();
          }}
        >
          Från A-Ö
        </Item>
        <Item
          type="button"
          selected={selected === 'rating'}
          onClick={() => {
            onSelect('rating');
            close();
          }}
        >
          Populärt
        </Item>
      </StyledSortDropdown>
    </div>
  );
};

export default SortDropdown;
