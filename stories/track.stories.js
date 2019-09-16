import React from 'react';

import { storiesOf } from '@storybook/react';
import Track from '../src/components/Track';

storiesOf('Track', module)
  .addWithJSX('single video', () => (
    <div style={{ width: '100%', maxWidth: 300 }}>
      <Track
        title="Dance in fog"
        type="video"
        image="https://images.unsplash.com/photo-1494255109162-2f3d1eddb31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      />
    </div>
  ))
  .addWithJSX('with description', () => (
    <div style={{ width: '100%', maxWidth: 300 }}>
      <Track
        title="Dance in fog"
        type="podcast"
        description="Dansa dansa som en galning."
        image="https://images.unsplash.com/photo-1494255109162-2f3d1eddb31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      />
    </div>
  ))
  .addWithJSX('list', () => (
    <div style={{ width: '100%', maxWidth: 300 }}>
      <Track
        title="Måla ditt ansikte"
        type="video"
        image="https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <Track
        title="Dance in fog"
        type="podcast"
        description="Dansa dansa som en galning."
        image="https://images.unsplash.com/photo-1494255109162-2f3d1eddb31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      />
      <Track
        title="Pumpor"
        type="video"
        description="Stora fina pumpor till halloween."
        image="https://images.unsplash.com/photo-1568574097055-c552b8dfcc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
    </div>
  ));
