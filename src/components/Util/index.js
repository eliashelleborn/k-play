import styled from 'styled-components';
import { space, layout, grid, flexbox } from 'styled-system';

export const Box = styled.div`
  ${layout}
  ${space}
`;

Box.displayName = 'Box';

export const Flex = styled(Box)`
  display: flex;
  ${flexbox}
`;

Flex.displayName = 'Flex';

export const Grid = styled(Box)`
  display: grid;
  ${grid}
`;

Grid.displayName = 'Grid';
