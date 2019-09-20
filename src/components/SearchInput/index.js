import React from 'react';
import styled from 'styled-components';
import { Search, Filter, Close } from '../Icons';

const StyledSearchInput = styled.div`
  background-color: #dddddd;
  display: flex;
  border-radius: 3px;
  height: 52px;
  align-items: center;
  padding: 0 8px;

  input {
    flex: 1;
    min-width: 0;
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
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

const Category = styled.div`
  padding: ${({ theme }) => theme.space[2]}px 0;
  height: 100%;
  margin-right: ${({ theme }) => theme.space[2]}px;

  > div {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 ${({ theme }) => theme.space[2]}px;
    padding-right: 0;
    button {
      padding: auto 8px;
    }
  }
`;

const SearchInput = ({
  value,
  onChange,
  category,
  removeCategory,
  openSort
}) => {
  return (
    <StyledSearchInput>
      {category && (
        <Category>
          <div>
            {category}
            <button type="button" onClick={removeCategory}>
              <Close />
            </button>
          </div>
        </Category>
      )}

      <input type="text" value={value} onChange={onChange} />
      <button type="button">
        <Search />
      </button>
      <button type="button" onClick={openSort}>
        <Filter />
      </button>
    </StyledSearchInput>
  );
};

export default SearchInput;
