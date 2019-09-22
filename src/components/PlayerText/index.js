import React from 'react';
import { Box } from '../Util';
import ListPlayerText from '../ListPlayerText';
import Image from '../../images/Player-text-img.png';

const playerText = [
  {
    title: 'Dansare - oavsett villkor?',
    subtitle: 'I samarbete med Folkteatern.',
    arranged: 'Arrangerades av: Teaterförbundet Dansavdelning',
    date: 'Inspelad 2010-05-15',
    description: 'Hur påverkar rådande villkor verksamma aktörer? Hur ser vardagen ut? Vilka konkreta åtgärderf skulle hjälpa? Hur bråttom är det?',
    image: Image,
    text: 'Teaterförbundets Dansavdelning lyfter fram aktörer från den fria dansscenen, vars situation är som mest prekär. Scenkonstbiennalen är ett viktigt tillfälle för dessa röster att höras, för att sprida viktig kunskap från fältet. Seminariet är en handuträckning att vara med i samtalet om dansens framtid. Vi behöver prata om villkoren för danskonstnärernas verksamheter, och om dansens betydelse och omätbara värde. Hur kan Dans fortsätta vara en vital konstform, och samtidigt en konstform med skäliga villkor och värdiga arbetsförhållnden?',
    key: 0
  }
];

const PlayerText = () => {
  return (
    <div>
    <Box>
      {playerText.map(p => (
        <ListPlayerText
          key={p.key}
          title={p.title}
          subtitle={p.subtitle}
          arranged={p.arranged}
          date={p.date}
          description={p.description}
          image={p.image}
          text={p.text}
        />
      ))}
    </Box>
    </div>
  );
};

export default PlayerText;
