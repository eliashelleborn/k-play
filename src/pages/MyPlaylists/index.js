import React from 'react';
import Banner from '../../components/Banner';
import { Heading } from '../../components/Typography';
import { Grid } from '../../components/Util';
import ListCard from '../../components/ListCard';

const MyPlaylists = () => {
  return (
    <div>
      <Banner
        image="https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        justifyContent="space-between"
        px="3"
      >
        <Heading m="0" color="white" as="h3">
          Mina Listor
        </Heading>
      </Banner>
      <Grid p="3" gridTemplateColumns="1fr 1fr" gridGap="2">
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
    </div>
  );
};

export default MyPlaylists;
