import React from 'react';

import { storiesOf } from '@storybook/react';
import ListCard from '../src/components/ListCard';

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
    <div
      style={{
        display: 'grid',
        width: 400,
        height: 400,
        rowGap: 16,
        columnGap: 16,
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr'
      }}
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
    </div>
  ));
