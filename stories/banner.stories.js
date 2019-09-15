import React from 'react';

import { storiesOf } from '@storybook/react';
import Banner from '../src/components/Banner';
import Button from '../src/components/Button';
import { Heading, Text } from '../src/components/Typography';

storiesOf('Banner', module)
  .add('with text & image', () => (
    <Banner image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
      <Heading as="h2" color="white">
        Banner
      </Heading>
    </Banner>
  ))
  .add('with tint', () => (
    <Banner
      tint="rgba(0,0,0,.7)"
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      <Heading as="h2" color="white">
        Banner
      </Heading>
    </Banner>
  ))
  .add('with background color', () => (
    <Banner bg="orange">
      <Heading as="h2" color="white">
        Banner
      </Heading>
    </Banner>
  ))
  .add('full example', () => (
    <Banner
      tint="rgba(0,0,0,.7)"
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        as="h2"
        color="white"
        maxWidth="300px"
        fontStyle="italic"
        textAlign="center"
      >
        Skapa ett konto för att få ut mer av{' '}
        <Text as="span" color="orange">
          K-play
        </Text>
      </Heading>
      <Button maxWidth="150px">Skapa konto</Button>
    </Banner>
  ));
