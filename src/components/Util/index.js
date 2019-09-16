import styled from 'styled-components';
import { space, layout, grid } from 'styled-system';

export const Box = styled.div`
  ${layout}
  ${space}
`;

export const Grid = styled(Box)`
  display: grid;
  ${grid}
`;
