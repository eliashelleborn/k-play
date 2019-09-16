import React from 'react';

import { storiesOf } from '@storybook/react';
import ListCard from '../src/components/ListCard';
import { Grid } from '../src/components/Util';

storiesOf('List Card (Category, Playlist)', module)
  .addWithJSX('single', () => (
    <div style={{ width: 200, height: 200, padding: 16 }}>
      <ListCard
        title="Ljus"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
    </div>
  ))
  .addWithJSX('list', () => (
    <Grid
      width="400px"
      gridGap="16px"
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="1fr 1fr"
    >
      <ListCard
        title="Ljus"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <ListCard
        title="Scenografi"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <ListCard
        title="Teater"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <ListCard
        title="Dans"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
    </Grid>
  ));
