import React, { useState } from 'react';
import { Box, Grid } from '../../components/Util';
import SearchInput from '../../components/SearchInput';
import MediaFilter from '../../components/MediaFilter';
import ListCard from '../../components/ListCard';
import { Heading } from '../../components/Typography';

const Search = () => {
  const [mediaFilter, setMediaFilter] = useState('all');
  return (
    <Box pt="81px" px="3">
      <SearchInput />
      <MediaFilter current={mediaFilter} setCurrent={setMediaFilter} />
      <Grid mt="2" gridGap="2" gridTemplateColumns="1fr 1fr">
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
      <Box mt="5">
        <Heading as="h2" fontWeight="500" m="0">
          Utforska fler kategorier
        </Heading>
        <Grid mt="3" gridGap="2" gridTemplateColumns="1fr 1fr">
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
      </Box>
    </Box>
  );
};

export default Search;
