import React from 'react';
import styled from 'styled-components';
import { Search, Filter } from '../Icons';

const StyledSearchInput = styled.div`
  background-color: #dddddd;
  display: flex;
  border-radius: 3px;
  height: 52px;
  align-items: center;
  padding: 0 8px;

  input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    padding: 0 8px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SearchInput = ({ value, onChange }) => {
  return (
    <StyledSearchInput>
      <input type="text" value={value} onChange={onChange} />
      <button type="button">
        <Search />
      </button>
      <button type="button">
        <Filter />
      </button>
    </StyledSearchInput>
  );
};

export default SearchInput;
