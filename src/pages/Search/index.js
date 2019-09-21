import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Grid } from '../../components/Util';
import SearchInput from '../../components/SearchInput';
import MediaFilter from '../../components/MediaFilter';
import ListCard from '../../components/ListCard';
import { Heading, Text } from '../../components/Typography';
import Track from '../../components/Track';
import SortDropdown from '../../components/SortDropdown';
import useSearch from '../../hooks/useSearch';
import Loading from '../../components/Loading';

const LoadingOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 32px;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const Search = () => {
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const { loading, media } = useSearch(input, sortBy, typeFilter);

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
        <MediaFilter current={typeFilter} setCurrent={setTypeFilter} />
      </Box>
      <Box mt="2">
        {selectedCategory || input !== '' ? (
          <Box minHeight="calc(100vw - 32px)" position="relative">
            <LoadingOverlay show={loading}>
              <Loading color="#363636" />
            </LoadingOverlay>

            {media.length > 0
              ? media.map(m => (
                  <Track
                    key={m.title}
                    title={m.title}
                    type={m.type}
                    description={m.description}
                    duration={m.duration}
                    episode={m.episode}
                    image={m.image}
                  />
                ))
              : !loading && (
                  <Box px="3" pt="5">
                    <Text textAlign="center" m="0">
                      0 resultat
                    </Text>
                  </Box>
                )}
          </Box>
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
