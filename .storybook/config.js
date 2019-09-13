import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Global from '../src/style/global';
import theme from '../src/style/theme';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => (
  <>
    <Global />
    <ThemeProvider theme={theme}>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        {storyFn()}
      </Flex>
    </ThemeProvider>
  </>
));

configure(loadStories, module);
