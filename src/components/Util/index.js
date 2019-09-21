import styled from 'styled-components';
import { space, layout, grid, flexbox, position } from 'styled-system';

export const Box = styled.div`
  ${position}
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
