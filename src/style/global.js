import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'styled-modern-normalize';
import 'rc-slider/assets/index.css';

const Global = createGlobalStyle`
  ${modernNormalize}

  @import url('https://fonts.googleapis.com/css?family=Barlow:400,500,600,600i,700&display=swap');

  body {
    font-family: 'Barlow', sans-serif;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;

  }

  h5 {
    font-weight: normal;
    font-size: 12px;

  }
`;

export default Global;
