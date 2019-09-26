import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BannerImage from '../../images/banner-1-home.png';
import BannerImage2 from '../../images/banner-2-home.png';
import BannerImage3 from '../../images/banner-2-home2.png';
import ListHomeCard from '../../components/ListHomeCard';
import Banner from '../../components/Banner';
import { useAuth } from '../../context/auth';
import { Text } from '../../components/Typography';
import {
  usePlayer,
  PLAYER_SET_CURRENT_MEDIA,
  PLAYER_EXPAND,
  PLAYER_OPEN
} from '../../context/player';

const StyledBanner = styled(Banner)`
  ${({ theme }) => theme.mediaQueries.medium} {
    height: 500px;
    display: flex;
    align-items: flex-end;

    > p {
      font-size: 64px;
      max-width: 460px;
      margin-left: 48px;
      margin-bottom: 52px;
      line-height: 54px;
    }
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    height: 600px;
  }
`;

const StyledBanner2 = styled(StyledBanner)`
  flex-direction: column;
  margin-top: 16px;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 56px;
    height: 300px;
    display: flex;
    align-items: center;

    > p {
      font-size: 56px;
      margin: 0;
      line-height: 54px;
      max-width: 700px;

      &:nth-child(2) {
        font-size: 24px;
        line-height: 30px;
        max-width: 640px;
        margin-top: 20px;
        margin-bottom: 12px;
        font-weight: 400;
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    height: 400px;
  }
`;

const BannerText2 = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin: 3px 0;
  letter-spacing: 0.5px;
  > span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const BannerText3 = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 3px 0;
  letter-spacing: 0.5px;
`;

const Category = styled.p`
  font-size: 24px;
  margin: 16px;
  z-index: -1;
  font-weight: 500;

  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: 48px 0 0 64px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    margin-bottom: 24px;
  }
`;

const StyledButton = styled.button`
  width: 150px;
  height: 43px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 3px;
  margin: 8px auto;

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 230px;
    height: 46px;
  }

  > a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    letter-spacing: 0.5px;

    ${({ theme }) => theme.mediaQueries.large} {
      font-size: 24px;
      font-weight: 500;
    }
  }
`;

const homelists = [
  {
    title: 'Dansare - oavsett villkor?',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subtitle: 'I samarbete med Folkteatern.',
    description: 'Jennie Olsson om vikten av en dansares villkor.',
    contentType: 'podcast',
    subject: 'Foto',
    episodes: '1/4',
    key: 0
  },
  {
    title: 'Timelapse footage',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subtitle: 'I samarbete med Folkteatern.',
    description: 'Jennie Olsson om vikten av en dansares villkor.',
    contentType: 'video',
    subject: 'Dans',
    episodes: '1/4',
    key: 1
  },
  {
    title: 'Dansare - oavsett villkor?',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subtitle: 'I samarbete med Folkteatern.',
    description: 'Jennie Olsson om vikten av en dansares villkor.',
    contentType: 'podcast',
    subject: 'Dans',
    episodes: '1/4',
    key: 2
  },
  {
    title: 'Timelapse footage',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subtitle: 'I samarbete med Folkteatern.',
    description: 'Jennie Olsson om vikten av en dansares villkor.',
    contentType: 'podcast',
    subject: 'Foto',
    episodes: '1/3',
    key: 3
  },
  {
    title: 'Timelapse footage',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subtitle: 'I samarbete med Folkteatern.',
    description: 'Jennie Olsson om vikten av en dansares villkor.',
    contentType: 'video',
    subject: 'Ljus / Scen',
    episodes: '1/3',
    key: 4
  },
  {
    title: 'Dansare - oavsett villkor?',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subtitle: 'I samarbete med Folkteatern.',
    description: 'Jennie Olsson om vikten av en dansares villkor.',
    contentType: 'podcast',
    subject: 'Ljus / Scen',
    episodes: '1/3',
    key: 5
  },
  {
    title: 'Dansare - oavsett villkor?',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subtitle: 'I samarbete med Folkteatern.',
    description: 'Jennie Olsson om vikten av en dansares villkor.',
    contentType: 'podcast',
    subject: 'Konst',
    episodes: '1/4',
    key: 6
  }
];

const Home = () => {
  const { authUser } = useAuth();
  const { dispatch } = usePlayer();

  return (
    <div>
      <div>
        <div>
          <StyledBanner
            tint="rgba(4, 4, 4, 0.3)"
            image={BannerImage}
            justifyContent="space-between"
            px="3"
          >
            <Text
              m="0"
              fontSize="32px"
              color="white"
              fontStyle="italic"
              fontWeight="600"
              lineHeight="32px"
            >
              {authUser
                ? 'Välkommen tillbaka Josefine'
                : 'Podd- och webbcasts om scenkonst, media och musik'}
            </Text>
          </StyledBanner>
        </div>
      </div>

      {authUser ? (
        <Category>Fortsätt lyssna/titta</Category>
      ) : (
        <Category>Senaste avsnitten </Category>
      )}

      <Box>
        {homelists.map(p => (
          <ListHomeCard
            play={() => {
              dispatch({ type: PLAYER_OPEN });
              dispatch({ type: PLAYER_EXPAND });
              dispatch({
                type: PLAYER_SET_CURRENT_MEDIA,
                payload: {
                  url: 'https://www.youtube.com/watch?v=yGkn5KYk6sg',
                  duration: 1381,
                  type: 'VIDEO',
                  title: p.title,
                  description: 'Test description',
                  episode: '1/3',
                  createdAt: Date.now()
                }
              });
            }}
            key={p.key}
            title={p.title}
            image={p.image}
            subtitle={p.subtitle}
            description={p.description}
            contentType={p.contentType}
            subject={p.subject}
            episodes={p.episodes}
          />
        ))}
      </Box>

      {authUser ? (
        <Category>Rekommenderas för dig</Category>
      ) : (
        <Category>Populärt på K-play</Category>
      )}

      <Box>
        {homelists.map(p => (
          <ListHomeCard
            key={p.key}
            title={p.title}
            image={p.image}
            subtitle={p.subtitle}
            description={p.description}
            contentType={p.contentType}
            subject={p.subject}
            episodes={p.episodes}
          />
        ))}
      </Box>

      {authUser ? (
        <div>
          <StyledBanner2 tint="rgba(0, 0, 0, 0.1)" image={BannerImage3} px="3">
            <BannerText2>Tips om kurser</BannerText2>
            <BannerText3>
              Tipsa om kurser på KA Klippverktyget (funktioner). Dela till
              kollegor/studenter
            </BannerText3>
          </StyledBanner2>
        </div>
      ) : (
        <div>
          <StyledBanner2 tint="rgba(0, 0, 0, 0.7)" image={BannerImage2} px="3">
            <BannerText2>
              {' '}
              Upplev mer via <em> ditt </em> <span> K-play </span>{' '}
            </BannerText2>
            <BannerText3> Skapa, spara, tyck till och dela! </BannerText3>
            <StyledButton>
              <NavLink to="/auth"> Skapa konto </NavLink>
            </StyledButton>
          </StyledBanner2>
        </div>
      )}

      {authUser ? (
        <Category>Nytt inom Scenkonst</Category>
      ) : (
        <Category>Ljus</Category>
      )}

      <Box>
        {homelists.map(p => (
          <ListHomeCard
            key={p.key}
            title={p.title}
            image={p.image}
            subtitle={p.subtitle}
            description={p.description}
            contentType={p.contentType}
            subject={p.subject}
            episodes={p.episodes}
          />
        ))}
      </Box>

      {authUser ? (
        <Category>Nytt inom Dans</Category>
      ) : (
        <Category>Dans</Category>
      )}

      <Box>
        {homelists.map(p => (
          <ListHomeCard
            key={p.key}
            title={p.title}
            image={p.image}
            subtitle={p.subtitle}
            description={p.description}
            contentType={p.contentType}
            subject={p.subject}
            episodes={p.episodes}
          />
        ))}
      </Box>
    </div>
  );
};

export default Home;
