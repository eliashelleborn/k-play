import React from 'react';
import Banner from '../../components/Banner';
import { Heading } from '../../components/Typography';
import { Grid } from '../../components/Util';
import ListCard from '../../components/ListCard';
import Plus from '../../components/Icons/Plus';
import styled from 'styled-components';

const StyledBanner = styled(Banner)`
  ${({ theme }) => theme.mediaQueries.large} {
    height: 190px;
    display: flex;
    align-items: center;
    padding: 0 64px;

    > h3 {
      font-size: 56px;
      font-weight: 600;
    }

    > svg {
      width: 42px;
      height: 42px;
    }
  }
`;

const StyledGrid = styled(Grid)`
  ${({ theme }) => theme.mediaQueries.large} {
    padding: 50px 64px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;

    > a div h3 {
      font-size: 35px;
    }

    > a svg {
      margin: 8px;
      width: 24px;
      height: 24px;
    }
  }
`;

const playlists = [
  {
    title: 'Ljus',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Scenografi',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Teater',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Dans',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Opera',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Ljud',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Konst',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }
];

const MyPlaylists = () => {
  return (
    <>
      <StyledBanner
        tint="rgba(0,0,0,.85)"
        image="https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        justifyContent="space-between"
        px="3"
      >
        <Heading m="0" color="white" as="h3">
          Mina Listor
        </Heading>
        <Plus />
      </StyledBanner>
      <StyledGrid p="3" gridTemplateColumns="1fr 1fr" gridGap="2">
        {playlists.map(p => (
          <ListCard
            key={p.title}
            title={p.title}
            image={p.image}
            to="/spellista"
          />
        ))}
      </StyledGrid>
    </>
  );
};

export default MyPlaylists;
