import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import styled, { ThemeProvider } from 'styled-components';
import Global from '../src/style/global';
import theme from '../src/style/theme';

const CenterContent = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

setAddon(JSXAddon);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => (
  <>
    <Global />
    <ThemeProvider theme={theme}>
      <CenterContent>{storyFn()}</CenterContent>
    </ThemeProvider>
  </>
));

configure(loadStories, module);
