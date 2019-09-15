import React from 'react';

import { storiesOf } from '@storybook/react';
import { Google, Facebook, LinkedIn } from '../src/components/Icons';
import Button from '../src/components/Button';

storiesOf('Button', module)
  .addDecorator(storyFn => (
    <div style={{ width: '100%', maxWidth: '500px', padding: 16 }}>
      {storyFn()}
    </div>
  ))
  .addWithJSX('with text', () => <Button>Button</Button>, { jsx: { skip: 1 } })
  .addWithJSX(
    'with custom colors',
    () => (
      <Button color="grey" bg="white">
        Button
      </Button>
    ),
    { jsx: { skip: 1 } }
  )
  .addWithJSX(
    'with icon',
    () => (
      <div>
        <Button
          icon={<Facebook />}
          color="white"
          bg="#2553B4"
          fontSize="14px"
          mb="3"
        >
          Sign in with Facebook
        </Button>
        <Button
          icon={<Google />}
          color="rgba(0, 0, 0, 0.54)"
          bg="white"
          fontSize="14px"
          mb="3"
        >
          Sign in with Google
        </Button>
        <Button icon={<LinkedIn />} color="white" bg="#0077B5" fontSize="14px">
          Sign in with LinkedIn
        </Button>
      </div>
    ),
    { jsx: { skip: 2 } }
  );
