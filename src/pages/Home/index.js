import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styled-system';
import BannerImage from '../../images/banner-1-home.png';
import BannerImage2 from '../../images/banner-2-home.png';
import BannerImage3 from '../../images/banner-2-home2.png';
import ListHomeCard from '../../components/ListHomeCard';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import { useAuth } from '../../context/auth';
import { Text } from '../../components/Typography';
import {
  usePlayer,
  PLAYER_SET_CURRENT_MEDIA,
  PLAYER_EXPAND,
  PLAYER_OPEN
} from '../../context/player';

const StyledBanner = styled(Banner)`
  ${color}
  padding-bottom: 0px;
  padding-top: 0px;
  box-shadow: 0px 2px 8px rgba(54, 54, 54, 0.3);
  margin-bottom: 20px;
`;

const StyledBanner2 = styled(StyledBanner)`
  flex-direction: column;
  margin-top: 16px;
  justify-content: center;
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

const StyledButton = styled(Button)`
  width: 150px;
  > a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    letter-spacing: 0.5px;
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
          <Banner
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
              Podd- och webcasts om scenkonst, media och musik
            </Text>
          </Banner>
        </div>
      </div>

      {!authUser ? (
        <Category>Senaste avsnitten </Category>
      ) : (
        <Category>Fortsätt lyssna/titta</Category>
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

      {!authUser ? (
        <Category>Populärt på K-play</Category>
      ) : (
        <Category>Rekommenderas för dig</Category>
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
            <BannerText2>
              Tipsa om kurser på KA Klippverktyget (funktioner)
            </BannerText2>
            <BannerText3>Dela till kollegor/studenter</BannerText3>
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
            <StyledButton m="10px auto 0px">
              <NavLink to="/auth/skapa-konto"> Skapa konto </NavLink>
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