import styled from 'styled-components';

export const List = styled.div`
  margin-top: ${({ theme }) => theme.space[3]}px;
  border-top: 1px solid #f3f3f3;
  overflow-y: scroll;
`;

export const Item = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  cursor: pointer;

  button {
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;
  }
`;
