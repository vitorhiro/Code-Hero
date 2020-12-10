import * as React from 'react';

import { connect } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
import Details from '../Screens/Details';

const Stack = createStackNavigator();

function RootNavigator({ currentHero }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'red' },
          title: 'Marvel Heroes',
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'red' },
          title: currentHero?.item?.name || '',
          headerBackTitle: null,
        }}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
}
const mapStateToProps = (state) => ({
  currentHero: state.heroes.currentHero,
});

export default connect(mapStateToProps)(RootNavigator);
