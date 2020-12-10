import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FlatList, TouchableOpacity } from 'react-native';
import * as HeroesActions from '../../store/modules/heroes/actions';

import Character from './components/Character';

import { Container } from './styles';

function Home({ getHeroes, heroes, navigation, setCurrentHero }) {
  useEffect(() => {
    getHeroes(null);
  }, []);

  function handleItem(hero) {
    setCurrentHero(hero);
    navigation.navigate('Details');
  }

  function handlePagination() {
    getHeroes(25);
  }

  return (
    <Container>
      <FlatList
        onEndReached={() => handlePagination()}
        onEndReachedThreshold={0.5}
        // onMomentumScrollBegin={() => handlehandle()}
        renderItem={(character) => (
          <TouchableOpacity onPress={() => handleItem(character)}>
            <Character
              size="medium"
              thumbnail={character?.item?.thumbnail}
              character={character}
            />
          </TouchableOpacity>
        )}
        data={heroes}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...HeroesActions,
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  heroes: state.heroes.heroes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
