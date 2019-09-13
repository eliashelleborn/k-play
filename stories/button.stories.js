import React from 'react';
import { Box } from 'rebass';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';

storiesOf('Button', module)
  .addDecorator(storyFn => (
    <Box width="100%" maxWidth="500px" p="3">
      {storyFn()}
    </Box>
  ))
  .add('with text', () => <Button onClick={action('clicked')}>Button</Button>)
  .add('with custom colors', () => (
    <Button color="grey" bg="white" onClick={action('clicked')}>
      Button
    </Button>
  ));
