import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Box, Grid } from '../../components/Util';
import SearchInput from '../../components/SearchInput';
import MediaFilter from '../../components/MediaFilter';
import ListCard from '../../components/ListCard';
import { Heading } from '../../components/Typography';
import Track from '../../components/Track';
import { listMedias } from '../../graphql/queries';
import SortDropdown from '../../components/SortDropdown';

const Search = () => {
  const [mediaFilter, setMediaFilter] = useState('all');
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const { loading, error, data } = useQuery(gql(listMedias));

  console.log(loading, error, data);

  return (
    <Box pt="81px">
      <Box px="3">
        <SearchInput
          category={selectedCategory}
          removeCategory={() => setSelectedCategory(null)}
          value={input}
          onChange={e => setInput(e.target.value)}
          openSort={() => setSortOpen(true)}
        />
        <SortDropdown
          isOpen={sortOpen}
          close={() => setSortOpen(false)}
          selected={sortBy}
          onSelect={v => setSortBy(v)}
        />
        <MediaFilter current={mediaFilter} setCurrent={setMediaFilter} />
      </Box>
      <Box mt="2">
        {selectedCategory ? (
          <div>
            <Track
              title="Måla ditt ansikte"
              type="video"
              description="Måla ditt ansikte som en galning."
              duration="59 min"
              episode="3/10"
              image="https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <Track
              title="Dance in fog"
              type="podcast"
              description="Dansa dansa som en galning."
              duration="22 min"
              episode="1/3"
              image="https://images.unsplash.com/photo-1494255109162-2f3d1eddb31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            />
            <Track
              title="Pumpor"
              type="video"
              description="Stora fina pumpor till halloween."
              duration="15 min"
              episode="3/5"
              image="https://images.unsplash.com/photo-1568574097055-c552b8dfcc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        ) : (
          <Grid px="3" gridGap="2" gridTemplateColumns="1fr 1fr">
            <ListCard
              onClick={() => setSelectedCategory('Ljus')}
              title="Ljus"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
            <ListCard
              onClick={() => setSelectedCategory('Scenografi')}
              title="Scenografi"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
            <ListCard
              onClick={() => setSelectedCategory('Teater')}
              title="Teater"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
            <ListCard
              onClick={() => setSelectedCategory('Dans')}
              title="Dans"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
          </Grid>
        )}
      </Box>
      <Box mt="5" px="3">
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
