import React from 'react';
import { Box } from 'rebass';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Google, Facebook, LinkedIn } from '../src/components/Icons';
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
  ))
  .add('with icon', () => (
    <div>
      <Button
        icon={<Facebook />}
        color="white"
        bg="#2553B4"
        fontSize="14px"
        mb="3"
        onClick={action('clicked')}
      >
        Sign in with Facebook
      </Button>
      <Button
        icon={<Google />}
        color="rgba(0, 0, 0, 0.54)"
        bg="white"
        fontSize="14px"
        mb="3"
        onClick={action('clicked')}
      >
        Sign in with Google
      </Button>
      <Button
        icon={<LinkedIn />}
        color="white"
        bg="#0077B5"
        fontSize="14px"
        onClick={action('clicked')}
      >
        Sign in with LinkedIn
      </Button>
    </div>
  ));
