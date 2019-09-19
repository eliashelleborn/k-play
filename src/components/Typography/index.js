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

Heading.displayName = 'Heading';
Heading.defaultProps = {
  color: 'grey'
};

export const Text = styled.p`
  ${base}
`;

Text.displayName = 'Text';
Text.defaultProps = {
  color: 'grey'
};
