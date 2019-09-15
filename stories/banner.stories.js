import React from 'react';
import { Heading, Flex, Text } from 'rebass/styled-components';

import { storiesOf } from '@storybook/react';
import Banner from '../src/components/Banner';
import Button from '../src/components/Button';

storiesOf('Banner', module)
  .add('with text & image', () => (
    <Banner image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
      <Flex
        sx={{
          justifyContent: 'center',
          color: 'white'
        }}
      >
        <Heading>Banner</Heading>
      </Flex>
    </Banner>
  ))
  .add('with tint', () => (
    <Banner
      tint="rgba(0,0,0,.7)"
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      <Flex
        sx={{
          justifyContent: 'center',
          color: 'white'
        }}
      >
        <Heading>Banner</Heading>
      </Flex>
    </Banner>
  ))
  .add('with background color', () => (
    <Banner bg="#EC733F">
      <Flex
        sx={{
          justifyContent: 'center',
          color: 'white'
        }}
      >
        <Heading>Banner</Heading>
      </Flex>
    </Banner>
  ))
  .add('full example', () => (
    <Banner
      tint="rgba(0,0,0,.7)"
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '300px',
          mx: 'auto',
          textAlign: 'center',
          fontStyle: 'italic'
        }}
      >
        <Heading
          sx={{
            color: 'white',
            mb: '4'
          }}
        >
          Skapa ett konto för att få ut mer av{' '}
          <Text sx={{ display: 'inline', color: 'orange' }}>K-play</Text>
        </Heading>
        <Button width="150px">Skapa konto</Button>
      </Flex>
    </Banner>
  ));
