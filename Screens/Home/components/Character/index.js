import * as React from 'react';

import ImageHero from '../../../components/ImageHero';

import Divider from '../../../components/Divider';

import { Container, Hero, Name, SeeMore, Informations } from './styles';

function Character({ character, thumbnail, size }) {
  return (
    <Container>
      <Hero>
        <ImageHero
          width="100px"
          height="100px"
          thumbnail={thumbnail}
          size={size}
        />

        <Informations>
          <Name>{character?.item?.name}</Name>
          <SeeMore>See more</SeeMore>
        </Informations>
      </Hero>
      <Divider />
    </Container>
  );
}

export default Character;
