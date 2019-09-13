import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'styled-modern-normalize';

const Global = createGlobalStyle`
  ${modernNormalize}

  @import url('https://fonts.googleapis.com/css?family=Barlow:400,500,600,600i,700&display=swap');

  body {
    font-family: 'Barlow', sans-serif;
  }
`;

export default Global;
