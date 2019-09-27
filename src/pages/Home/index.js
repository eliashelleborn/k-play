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
    contentType: "PODD",
    title: "Tygdjur, musik och konstnärskap",
    subtitle: "Levade gosesedjur",
    description: "Producerat av Kulturakademin i samarbete med Atalante under Destination Atalante den 10 december 2018.\nReine Jönsson writes music. His list of work includes five operas, music for symphony orchestra, chamber music and various experiments.\nModerator: Sara Björklund Jönsson\nLjudtekniker: Rasmus Persson & Viktor Wendin",
    url: "https://soundcloud.com/user-994747535/70-kompositor-reine-jonsson-om-tygdockor-musik-och-konstnarskap-live-2018-12-10",
    episodes: "#75",
    image: "https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    subject: "Konst",
    key: 7,
  },
  {
    contentType: "VIDEO",
    title: "Att spela för en ung publik",
    subtitle: "Vocal strings för unga",
    description: "Stråf Vocal Strings framför en del av sin föreställning Familia samt berättar om sin arbetsprocess och hur de möter den unga publiken. Stråf Vocal Strings består av Sanna Källman, Tobias Edvardsson, Francis Schaughnessy och Åsa Johansson.",
    url: "https://www.youtube.com/watch?v=DyTBdvHvrbA",
    episodes: "1/2",
    image: "https://images.unsplash.com/photo-1499442711659-a9566695faed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    subject: "Musik",
    key: 10
  },
  {
    contentType: "VIDEO",
    title: "NETFLIX´S AMBITIONS FOR THE NORDIC REGION: Lina Bronéus",
    subtitle: "Keynote talk about Netflix ambitions",
    description: "Meet Netflix´s Lina Bronéus, Drirector of Co-Productions & Acquisitions, in a keynote talk about the growing importance of the international markets for Netflix and the company´s plans for the Nordics.",
    url: "https://www.youtube.com/watch?v=qvWzFtNPbB4",
    episodes: "1/3",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    subject: 'Media',
    key: 0
  },
  {
    contentType: "PODD",
    title: "Konferens – Publiken I fokus med Stina Oscarson (LIVE 2018-08-24)",
    subtitle: "Radio för publiken och hur det ändras.",
    description: "Konferens – Publiken I fokus med Stina Oscarson (LIVE 2018-08-24)\nPlats: Stora Teatern, Göteborg\nÅrets konferens handlar om publiken och om vilka möjligheter och utmaningar det medför att arbeta med publiken i fokus. Att välkomna en bredare grupp människor, med olika bakgrund och förutsättningar, innebär ofta att vi måste ifrågasätta invanda mönster och strukturer.\nAtt umgås med olikheter och att arbeta med konst som en inkluderande metod. Vad har den faktiska platsen för betydelse för hur vi upplever konst och kultur? Publikutveckling som demokratisk förankring och vinsten i att arbeta med publiken i fokus. Frågor och perspektiv som rör representation, mångfald och segmenteringsmodeller. Vad vet vi om de vi vill nå och hur når vi dem?\nMed utgångspunkt i forskning och teori, eller utifrån det självupplevda perspektivet berättar konferensens medverkande om sitt arbete med att sätta publiken i fokus. Programläggning till årets konferens är gjord av Nils Wiklander och Johanna Hagerius.\nStina Oscarson\nHur kan och bör vi förhålla oss till publikutveckling? Är det ett medel för att nå en utopi, eller är det bara ett kulturpolitiskt modeord? Stina är dramatiker, regissör och kulturdebattör. Hon ger oss en tankeväckande och kanske bitvis ifrågasättande reflektion kring det som har diskuterats under konferensen.\nFöreläsare: Stina Oscarson\nModerator: Johanna Koljonen\nLjudtekniker: Oskar Solvik\nProduced by Kulturakademin in collaboration with RePublik/Kultur i Väst, Producentbyrån, Gothenburg Dance and Theatre Festival 2018",
    url: "https://soundcloud.com/user-994747535/61-konferens-publiken-i-fokus-med-stina-oscarson-live-2018-08-24",
    episodes: "#61",
    image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1958&q=80",
    subject: "Radio",
    key: 9
  },
  {
    contentType: "VIDEO",
    title: "SPOTLIGHT ON ITALY: Nicola Serra from Palomar and Marco Chimenz from Cattleya",
    subtitle: "Två av Italiens top prodicenter pratar om trender innom TV",
    description: "Meet two of Italy´s top producers, Nicola Serra, Managing Director of Palomar and Marco Chimenz, Co-CEO of Cattleya, talking about their upcoming slates, trends in Italian drama and the new tv series The Name of the Rose. ",
    url: "https://www.youtube.com/watch?v=uRkfLsPntFY",
    episodes: "1/1",
    image: "https://images.unsplash.com/photo-1555726383-c1240a1d4808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    subject: "TV",
    key: 1
  },
  {
    contentType: "PODD",
    title: "Adaptionsseminarium – verktyg i arbetet med adaptionsprocessen",
    subtitle: "Lär dig mer om hur du jobbar med adaptionsprocessen",
    description: "Arrangeras av: Kreativa Europa Desk Sverige\nHUR BRANSCHEN JOBBAR MED ADAPTION FRÅN BOK TILL FILM.\nDet är alltid speciellt att se en filmatisering av en bok. Vilka val har gjorts i filmen och varför? Lyckas det skrivna ordet förmedlas till den vita duken?\nStatistiken visar att adaptioner oftast går bättre kommersiellt än originalhistorier, men vilka stora utmaningar finns i arbetet, och hur gör en egentligen för att lyckas skriva ett riktigt bra manus? Vi fördjupar oss i aktuella trender och framtiden, både nationellt och internationellt.\nMedverkande:\nPella Kågerman och Hugo Lilja – manusförfattare och regissörer till filmen Aniara (nyligen nominerad som Sveriges Oscarsbidrag) baserad på Harry Martinsons stora rymdepos med samma namn.\nSara Bergmark Elfgren – författare till boken Cirkeln som filmatiserats. Sara har dessutom skrivit för en mängd olika format.\nAlexia Wennberg – Producent på YellowBird där hon leder utvecklingen av nya filmer och serier. Nästa år ska hon producera sin första tv-serie – en adaption. 2013 började hon jobba som agent och startade\noch ledde avdelningen för manusförfattare på Salomonsson Agency.\nModerator: Jan Göransson, Filminstitutets presschef\nInspelningstekniker: Jan Cruseman\nINSPELAT FÖR K-PLAY AV KULTURAKADEMIN I SAMARBETE MED KREATIVA EUROPA DESK SVERIGE DEN 11 SEPTEMBER 2019 PÅ BIOGRAF MAURITZ, FILMHUSET, STOCKHOLM",
    url: "https://soundcloud.com/user-994747535/136-adaptionsseminarium-verktyg-i-arbetet-med-adaptionsprocessen",
    episodes: "#136",
    image: "https://images.unsplash.com/photo-1559677050-562526b74322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
    subject: "Scenkonst",
    key: 3
  },
  {
    contentType: "PODD",
    title: "Åsa Söderberg – 12 års erfarenhet av publikutveckling på Skånes Dansteater",
    subtitle: "”För mig är publiken alltid i fokus. Att få beröra och inspirera, överraska och utmana.”",
    description: "SEMINARIUM MED ÅSA SÖDERBERG - Samfundsansvar, konstnärlig frihet, tillgänglighet och relevans\nDatum: 2019-05-21\nPlats: Göteborg Stadsteater\nArrangeras av: RePublik och Kultur i Väst\n”För mig är publiken alltid i fokus. Att få beröra och inspirera, överraska och utmana.”\nVi välkomnar vårt regionala nätverk till ett seminarium med Åsa Söderberg, avgående VD och konstnärlig ledare för Skånes dansteater. Hör henne dela med sig av 12 års erfarenheter av att arbeta med publikutveckling, organisation och ledarskap på Skånes dansteater.\nRePubliks regionala nätverksträffar - är en branschöverskridande kunskapsarena för publikutveckling, organisation och ledarskap för konst- och kulturorganisationer i Västra Götalandsregionen.\nINSPELAT FÖR K-PLAY AV KULTURAKADEMIN I SAMARBETE MED REPUBLIK OCH KULTUR I VÄST",
    url: "https://soundcloud.com/user-994747535/125-asa-soderberg-12-ars-erfarenhet-av-publikutveckling-pa-skanes-dansteater",
    episodes: "#125",
    image: "https://i1.sndcdn.com/artworks-000555087723-0k2w43-t500x500.jpg",
    subject: "Dans",
    key: 4
  },
  {
    contentType: "VIDEO",
    title: "TV DRAMA VISION 2019: Sally Wainwright - big ideas in small towns",
    subtitle: "Multi award winning British television writer, producer and director Sally Wainwright ",
    description: "Multi award winning British television writer, producer and director Sally Wainwright (Happy Valley, Last Tango in Halifax) on her career and the art of writing.",
    url: "https://www.youtube.com/watch?v=UmGkHDYJRk4",
    episodes: "1/1",
    image: "https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    subject: "Manus",
    key: 2
  },
  {
    contentType: "PODD",
    title: "Do i really need a dramaturg? – Introduction into dance dramaturgy (LIVE: 2019-05-17)",
    subtitle: "In the field of dance, dramaturgy is still a relatively new discipline and a new profession, which is therefore still viewed with curiosity and suspicion",
    description: "SCENKONSTBIENNALEN 2019:\nDO I REALLY NEED A DRAMATURG? - A BRIEF INTRODUCTION INTO WHAT DANCE DRAMATURGY ACTUALLY DOES\nArrangerat av: Danscentrum Riks\nIn the field of dance, dramaturgy is still a relatively new discipline and a new profession, which is therefore still viewed with curiosity and suspicion. All too often one wonders what dramaturgy actually is. But instead of losing ourselves in attempts at definition, I will concentrate more on what dramaturgy can actually do and achieve, both for choreographers and for dance as such. Thus, various dramaturgical practices and methods will be introduced and critically discussed with the audience, such as dramaturgy as a structural, collaborative, contextualizing practice, etc.\nSeminar leader: Thomas Schaupp, dramaturg\nThomas Schaupp is a free-lancing dance dramaturg based in Berlin. He is collaborating with several international choreographers, currently with Anne-Mareike Hess, Janne-Camilla Lyster, Camille Mutel and Stian Danielsen. As a mentor and advisor for young choreographers he collaborates with institutions such as Dansearena Nord in Hammerfest and KHIO in Oslo. Thomas is a guest teacher at the Inter-University Centre for Dance in Berlin and facilitates workshops on dance-dramaturgy in choreographic centres across Europe. In collaboration with Ibsen International and Goethe Institut Beijing he also co-curates a Cultural Exchange Program on Dance Dramaturgy in China.\nPRODUCED FOR K-PLAY BY KULTURAKADEMIN IN COLLABORATION WITH DANSCENTRUM RIKS UNDER SCENKONSTBIENNALEN 2019",
    url: "https://soundcloud.com/user-994747535/110-do-i-really-need-a-dramaturg-introduction-into-dance-dramaturgy-live-2019-05-17",
    episodes: "#110",
    image: "https://i1.sndcdn.com/artworks-000553091940-tjn7hx-t500x500.jpg",
    subject: "Teater",
    key: 5
  },
  {
    contentType: "PODD",
    title: "Ekodesigndirektivet för ljuset – men går något konstnärligt förlorat (LIVE: 2019-05-16)",
    subtitle: "Arrangeras av: Svenska Ljussättareföreningen - SLF",
    description: "SCENKONSTBIENNALEN 2019:\nEKODESIGNDIREKTIVET FÖR LJUSET ÄR SNART ETT FAKTUM! MEN GÅR NÅGOT KONSTNÄRLIGT FÖRLORAT NU?\nArrangeras av: Svenska Ljussättareföreningen - SLF\n2021 kommer det nya Ekodirektivet för ljus att träda i kraft. Bland landets ljussättare har detta uppmärksammats främst genom att en hel del av de traditionella halogenlamporna har fått stryka på foten till förmån för det nya LED-ljuset som drar mindre energi men som ännu inte är helt fulländat ur ett tekniskt perspektiv t ex i hur färg återges i scenografi och kostymer. Samtidigt byter en rad teatrar ut sin utrustning mot den nya typen av ljuskällor. Har vi konstnärligt gått miste om något och är det så mycket att bråka om, nu när vi alla ska hjälpas åt för att rädda planeten? I ett samtal om design och utveckling försöker vi sätt in detta problem i sitt sammanhang.\nMedverkande:\nEmma Weil, chef för utvecklingssektionen på Dramaten\nMattias Fransson, ljusdesigner\nMauritz de Vries, ljusdesigner\nSamtalsledare:\nAnders Larsson, ordförande i Svenska Ljussättareföreningen – SLF\nINSPELAT FÖR K-PLAY AV KULTURAKADEMIN I SAMARBETE MED SVENSKA LJUSSÄTTAREFÖRENINGEN - SLF UNDER SCENKONSTBIENNALEN 2019",
    url: "https://soundcloud.com/user-994747535/105-ekodesigndirektivet-for-ljuset-men-gar-nagot-konstnarligt-forlorat-live-2019-05-16",
    episodes: "#105",
    image: "https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    subject: "Ljudteknik",
    key: 6
  },
  {
    contentType: "PODD",
    title: "Dynamisk Stadsutveckling Ger Fler Jobb I Filmbranschen (LIVE 2019 - 01 - 26)",
    subtitle: "Ljuset är de nya ljudet",
    description: "Hur kan vi bygga broar mellan stadsutveckling och rörlig bild? Ett samarbete med Film Capital Stockholm och White Arkitekter.\nMedverkande: Gabriela Pichler, regissör / Johanna Bernhardson, regissör / Filip Strebeyko, arkitekt på White Arkitekter / Kaj Granath, arkitekt och gästforskare på Chalmers\nModerator: Ulrika Bandeira, Smart Kreativ Stad\nLjudtekniker: Andre Laos\nProducerat för K-play av Kulturakademin i samarbete med Film Capital Stockholm och White Arkitekter under Göteborg Filmfestival 2019",
    url: "https://soundcloud.com/user-994747535/78-dynamisk-stadsutveckling-ger-fler-jobb-i-filmbranschen-live-2019-01-26",
    episodes: "#78",
    image: "https://i1.sndcdn.com/artworks-000478967073-74ar42-t500x500.jpg",
    subject: "Ljusteknik",
    key: 8
  }
];

  const homelists2 = [
    {
      contentType: "VIDEO",
      title: "TV DRAMA VISION 2019: Sally Wainwright - big ideas in small towns",
      subtitle: "Multi award winning British television writer, producer and director Sally Wainwright ",
      description: "Multi award winning British television writer, producer and director Sally Wainwright (Happy Valley, Last Tango in Halifax) on her career and the art of writing.",
      url: "https://www.youtube.com/watch?v=UmGkHDYJRk4",
      episodes: "1/1",
      image: "https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      subject: "Manus",
      key: 2
    },
    {
      contentType: "PODD",
      title: "Ekodesigndirektivet för ljuset – men går något konstnärligt förlorat (LIVE: 2019-05-16)",
      subtitle: "Arrangeras av: Svenska Ljussättareföreningen - SLF",
      description: "SCENKONSTBIENNALEN 2019:\nEKODESIGNDIREKTIVET FÖR LJUSET ÄR SNART ETT FAKTUM! MEN GÅR NÅGOT KONSTNÄRLIGT FÖRLORAT NU?\nArrangeras av: Svenska Ljussättareföreningen - SLF\n2021 kommer det nya Ekodirektivet för ljus att träda i kraft. Bland landets ljussättare har detta uppmärksammats främst genom att en hel del av de traditionella halogenlamporna har fått stryka på foten till förmån för det nya LED-ljuset som drar mindre energi men som ännu inte är helt fulländat ur ett tekniskt perspektiv t ex i hur färg återges i scenografi och kostymer. Samtidigt byter en rad teatrar ut sin utrustning mot den nya typen av ljuskällor. Har vi konstnärligt gått miste om något och är det så mycket att bråka om, nu när vi alla ska hjälpas åt för att rädda planeten? I ett samtal om design och utveckling försöker vi sätt in detta problem i sitt sammanhang.\nMedverkande:\nEmma Weil, chef för utvecklingssektionen på Dramaten\nMattias Fransson, ljusdesigner\nMauritz de Vries, ljusdesigner\nSamtalsledare:\nAnders Larsson, ordförande i Svenska Ljussättareföreningen – SLF\nINSPELAT FÖR K-PLAY AV KULTURAKADEMIN I SAMARBETE MED SVENSKA LJUSSÄTTAREFÖRENINGEN - SLF UNDER SCENKONSTBIENNALEN 2019",
      url: "https://soundcloud.com/user-994747535/105-ekodesigndirektivet-for-ljuset-men-gar-nagot-konstnarligt-forlorat-live-2019-05-16",
      episodes: "#105",
      image: "https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      subject: "Ljudteknik",
      key: 6
    },
    {
      contentType: "VIDEO",
      title: "SPOTLIGHT ON ITALY: Nicola Serra from Palomar and Marco Chimenz from Cattleya",
      subtitle: "Två av Italiens top prodicenter pratar om trender innom TV",
      description: "Meet two of Italy´s top producers, Nicola Serra, Managing Director of Palomar and Marco Chimenz, Co-CEO of Cattleya, talking about their upcoming slates, trends in Italian drama and the new tv series The Name of the Rose. ",
      url: "https://www.youtube.com/watch?v=uRkfLsPntFY",
      episodes: "1/1",
      image: "https://images.unsplash.com/photo-1555726383-c1240a1d4808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      subject: "TV",
      key: 1
    },
    {
      contentType: "PODD",
      title: "Åsa Söderberg – 12 års erfarenhet av publikutveckling på Skånes Dansteater",
      subtitle: "”För mig är publiken alltid i fokus. Att få beröra och inspirera, överraska och utmana.”",
      description: "SEMINARIUM MED ÅSA SÖDERBERG - Samfundsansvar, konstnärlig frihet, tillgänglighet och relevans\nDatum: 2019-05-21\nPlats: Göteborg Stadsteater\nArrangeras av: RePublik och Kultur i Väst\n”För mig är publiken alltid i fokus. Att få beröra och inspirera, överraska och utmana.”\nVi välkomnar vårt regionala nätverk till ett seminarium med Åsa Söderberg, avgående VD och konstnärlig ledare för Skånes dansteater. Hör henne dela med sig av 12 års erfarenheter av att arbeta med publikutveckling, organisation och ledarskap på Skånes dansteater.\nRePubliks regionala nätverksträffar - är en branschöverskridande kunskapsarena för publikutveckling, organisation och ledarskap för konst- och kulturorganisationer i Västra Götalandsregionen.\nINSPELAT FÖR K-PLAY AV KULTURAKADEMIN I SAMARBETE MED REPUBLIK OCH KULTUR I VÄST",
      url: "https://soundcloud.com/user-994747535/125-asa-soderberg-12-ars-erfarenhet-av-publikutveckling-pa-skanes-dansteater",
      episodes: "#125",
      image: "https://i1.sndcdn.com/artworks-000555087723-0k2w43-t500x500.jpg",
      subject: "Dans",
      key: 4
    },
    {
      contentType: "PODD",
      title: "Konferens – Publiken I fokus med Stina Oscarson (LIVE 2018-08-24)",
      subtitle: "Radio för publiken och hur det ändras.",
      description: "Konferens – Publiken I fokus med Stina Oscarson (LIVE 2018-08-24)\nPlats: Stora Teatern, Göteborg\nÅrets konferens handlar om publiken och om vilka möjligheter och utmaningar det medför att arbeta med publiken i fokus. Att välkomna en bredare grupp människor, med olika bakgrund och förutsättningar, innebär ofta att vi måste ifrågasätta invanda mönster och strukturer.\nAtt umgås med olikheter och att arbeta med konst som en inkluderande metod. Vad har den faktiska platsen för betydelse för hur vi upplever konst och kultur? Publikutveckling som demokratisk förankring och vinsten i att arbeta med publiken i fokus. Frågor och perspektiv som rör representation, mångfald och segmenteringsmodeller. Vad vet vi om de vi vill nå och hur når vi dem?\nMed utgångspunkt i forskning och teori, eller utifrån det självupplevda perspektivet berättar konferensens medverkande om sitt arbete med att sätta publiken i fokus. Programläggning till årets konferens är gjord av Nils Wiklander och Johanna Hagerius.\nStina Oscarson\nHur kan och bör vi förhålla oss till publikutveckling? Är det ett medel för att nå en utopi, eller är det bara ett kulturpolitiskt modeord? Stina är dramatiker, regissör och kulturdebattör. Hon ger oss en tankeväckande och kanske bitvis ifrågasättande reflektion kring det som har diskuterats under konferensen.\nFöreläsare: Stina Oscarson\nModerator: Johanna Koljonen\nLjudtekniker: Oskar Solvik\nProduced by Kulturakademin in collaboration with RePublik/Kultur i Väst, Producentbyrån, Gothenburg Dance and Theatre Festival 2018",
      url: "https://soundcloud.com/user-994747535/61-konferens-publiken-i-fokus-med-stina-oscarson-live-2018-08-24",
      episodes: "#61",
      image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1958&q=80",
      subject: "Radio",
      key: 9
    },
    {
      contentType: "VIDEO",
      title: "NETFLIX´S AMBITIONS FOR THE NORDIC REGION: Lina Bronéus",
      subtitle: "Keynote talk about Netflix ambitions",
      description: "Meet Netflix´s Lina Bronéus, Drirector of Co-Productions & Acquisitions, in a keynote talk about the growing importance of the international markets for Netflix and the company´s plans for the Nordics.",
      url: "https://www.youtube.com/watch?v=qvWzFtNPbB4",
      episodes: "1/3",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      subject: 'Media',
      key: 0
    },
    {
      contentType: "PODD",
      title: "Adaptionsseminarium – verktyg i arbetet med adaptionsprocessen",
      subtitle: "Lär dig mer om hur du jobbar med adaptionsprocessen",
      description: "Arrangeras av: Kreativa Europa Desk Sverige\nHUR BRANSCHEN JOBBAR MED ADAPTION FRÅN BOK TILL FILM.\nDet är alltid speciellt att se en filmatisering av en bok. Vilka val har gjorts i filmen och varför? Lyckas det skrivna ordet förmedlas till den vita duken?\nStatistiken visar att adaptioner oftast går bättre kommersiellt än originalhistorier, men vilka stora utmaningar finns i arbetet, och hur gör en egentligen för att lyckas skriva ett riktigt bra manus? Vi fördjupar oss i aktuella trender och framtiden, både nationellt och internationellt.\nMedverkande:\nPella Kågerman och Hugo Lilja – manusförfattare och regissörer till filmen Aniara (nyligen nominerad som Sveriges Oscarsbidrag) baserad på Harry Martinsons stora rymdepos med samma namn.\nSara Bergmark Elfgren – författare till boken Cirkeln som filmatiserats. Sara har dessutom skrivit för en mängd olika format.\nAlexia Wennberg – Producent på YellowBird där hon leder utvecklingen av nya filmer och serier. Nästa år ska hon producera sin första tv-serie – en adaption. 2013 började hon jobba som agent och startade\noch ledde avdelningen för manusförfattare på Salomonsson Agency.\nModerator: Jan Göransson, Filminstitutets presschef\nInspelningstekniker: Jan Cruseman\nINSPELAT FÖR K-PLAY AV KULTURAKADEMIN I SAMARBETE MED KREATIVA EUROPA DESK SVERIGE DEN 11 SEPTEMBER 2019 PÅ BIOGRAF MAURITZ, FILMHUSET, STOCKHOLM",
      url: "https://soundcloud.com/user-994747535/136-adaptionsseminarium-verktyg-i-arbetet-med-adaptionsprocessen",
      episodes: "#136",
      image: "https://images.unsplash.com/photo-1559677050-562526b74322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
      subject: "Scenkonst",
      key: 3
    },
    {
      contentType: "VIDEO",
      title: "Att spela för en ung publik",
      subtitle: "Vocal strings för unga",
      description: "Stråf Vocal Strings framför en del av sin föreställning Familia samt berättar om sin arbetsprocess och hur de möter den unga publiken. Stråf Vocal Strings består av Sanna Källman, Tobias Edvardsson, Francis Schaughnessy och Åsa Johansson.",
      url: "https://www.youtube.com/watch?v=DyTBdvHvrbA",
      episodes: "1/2",
      image: "https://images.unsplash.com/photo-1499442711659-a9566695faed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      subject: "Musik",
      key: 10
    },
    {
      contentType: "PODD",
      title: "Do i really need a dramaturg? – Introduction into dance dramaturgy (LIVE: 2019-05-17)",
      subtitle: "In the field of dance, dramaturgy is still a relatively new discipline and a new profession, which is therefore still viewed with curiosity and suspicion",
      description: "SCENKONSTBIENNALEN 2019:\nDO I REALLY NEED A DRAMATURG? - A BRIEF INTRODUCTION INTO WHAT DANCE DRAMATURGY ACTUALLY DOES\nArrangerat av: Danscentrum Riks\nIn the field of dance, dramaturgy is still a relatively new discipline and a new profession, which is therefore still viewed with curiosity and suspicion. All too often one wonders what dramaturgy actually is. But instead of losing ourselves in attempts at definition, I will concentrate more on what dramaturgy can actually do and achieve, both for choreographers and for dance as such. Thus, various dramaturgical practices and methods will be introduced and critically discussed with the audience, such as dramaturgy as a structural, collaborative, contextualizing practice, etc.\nSeminar leader: Thomas Schaupp, dramaturg\nThomas Schaupp is a free-lancing dance dramaturg based in Berlin. He is collaborating with several international choreographers, currently with Anne-Mareike Hess, Janne-Camilla Lyster, Camille Mutel and Stian Danielsen. As a mentor and advisor for young choreographers he collaborates with institutions such as Dansearena Nord in Hammerfest and KHIO in Oslo. Thomas is a guest teacher at the Inter-University Centre for Dance in Berlin and facilitates workshops on dance-dramaturgy in choreographic centres across Europe. In collaboration with Ibsen International and Goethe Institut Beijing he also co-curates a Cultural Exchange Program on Dance Dramaturgy in China.\nPRODUCED FOR K-PLAY BY KULTURAKADEMIN IN COLLABORATION WITH DANSCENTRUM RIKS UNDER SCENKONSTBIENNALEN 2019",
      url: "https://soundcloud.com/user-994747535/110-do-i-really-need-a-dramaturg-introduction-into-dance-dramaturgy-live-2019-05-17",
      episodes: "#110",
      image: "https://i1.sndcdn.com/artworks-000553091940-tjn7hx-t500x500.jpg",
      subject: "Teater",
      key: 5
    },
    {
      contentType: "PODD",
      title: "Dynamisk Stadsutveckling Ger Fler Jobb I Filmbranschen (LIVE 2019 - 01 - 26)",
      subtitle: "Ljuset är de nya ljudet",
      description: "Hur kan vi bygga broar mellan stadsutveckling och rörlig bild? Ett samarbete med Film Capital Stockholm och White Arkitekter.\nMedverkande: Gabriela Pichler, regissör / Johanna Bernhardson, regissör / Filip Strebeyko, arkitekt på White Arkitekter / Kaj Granath, arkitekt och gästforskare på Chalmers\nModerator: Ulrika Bandeira, Smart Kreativ Stad\nLjudtekniker: Andre Laos\nProducerat för K-play av Kulturakademin i samarbete med Film Capital Stockholm och White Arkitekter under Göteborg Filmfestival 2019",
      url: "https://soundcloud.com/user-994747535/78-dynamisk-stadsutveckling-ger-fler-jobb-i-filmbranschen-live-2019-01-26",
      episodes: "#78",
      image: "https://i1.sndcdn.com/artworks-000478967073-74ar42-t500x500.jpg",
      subject: "Ljusteknik",
      key: 8
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
                  url: p.url,
                  duration: 1381,
                  type: p.contentType,
                  title: p.title,
                  description: p.description,
                  episode: p.episodes,
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
        {homelists2.map(p => (
          <ListHomeCard
            play={() => {
              dispatch({ type: PLAYER_OPEN });
              dispatch({ type: PLAYER_EXPAND });
              dispatch({
                type: PLAYER_SET_CURRENT_MEDIA,
                payload: {
                  url: p.url,
                  duration: 1381,
                  type: p.contentType,
                  title: p.title,
                  description: p.description,
                  episode: p.episodes,
                  createdAt: Date.now()
                }
              });
            }}            key={p.key}
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
              Tipsa om kurser på KA Klippverktyget. Dela till
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
            play={() => {
              dispatch({ type: PLAYER_OPEN });
              dispatch({ type: PLAYER_EXPAND });
              dispatch({
                type: PLAYER_SET_CURRENT_MEDIA,
                payload: {
                  url: p.url,
                  duration: 1381,
                  type: p.contentType,
                  title: p.title,
                  description: p.description,
                  episode: p.episodes,
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
        <Category>Nytt inom Dans</Category>
      ) : (
        <Category>Dans</Category>
      )}

      <Box>
        {homelists2.map(p => (
          <ListHomeCard
            play={() => {
              dispatch({ type: PLAYER_OPEN });
              dispatch({ type: PLAYER_EXPAND });
              dispatch({
                type: PLAYER_SET_CURRENT_MEDIA,
                payload: {
                  url: p.url,
                  duration: 1381,
                  type: p.contentType,
                  title: p.title,
                  description: p.description,
                  episode: p.episodes,
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
    </div>
  );
};

export default Home;
