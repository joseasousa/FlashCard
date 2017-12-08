import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import Decks from './src/pages/Decks';
import Deck from './src/pages/Deck';
import store from './store';
import './ReactotronConfig';

const Routes = TabNavigator({
  Decks: {
    screen: Decks,
  },
  Deck: {
    screen: Deck,
  },
});

const App = () => (
  <Provider store={store} >
    <Routes />
  </Provider>
);

export default App;
