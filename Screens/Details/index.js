import React from 'react';

import { connect } from 'react-redux';

import { FlatList } from 'react-native';

import ImageHero from '../components/ImageHero';
import {
  Container,
  ImageArea,
  DescriptionArea,
  Title,
  Description,
  Comics,
  SubTitle,
  Comic,
} from './styles';
import Divider from '../components/Divider';

function Details({ currentHero }) {
  return (
    <Container>
      <ImageArea>
        <ImageHero
          size="large"
          width="100%"
          height="300px"
          thumbnail={currentHero?.item?.thumbnail}
        />
      </ImageArea>
      {currentHero?.item?.description ? (
        <DescriptionArea>
          <Title>Description</Title>
          <Description>{currentHero?.item?.description}</Description>
        </DescriptionArea>
      ) : (
        <></>
      )}
      <Divider />

      {currentHero?.item?.comics?.items.length > 0 ? (
        <Comics>
          <SubTitle>Comics</SubTitle>
          <FlatList
            renderItem={(comic) => (
              <Comic>
                {comic?.item?.name ? comic?.item?.name : 'Comic Not Found!'}
              </Comic>
            )}
            data={currentHero?.item?.comics?.items}
            keyExtractor={(item, index) => index.toString()}
          />
        </Comics>
      ) : (
        <></>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  currentHero: state.heroes.currentHero,
});

export default connect(mapStateToProps)(Details);
