import styled, { css } from 'styled-components';
import { color, space, typography, layout } from 'styled-system';

const base = css`
  ${color}
  ${space}
  ${layout}
  ${typography}
`;

export const Heading = styled.h1`
  ${base}
`;

export const Text = styled.p`
  ${base}
`;
