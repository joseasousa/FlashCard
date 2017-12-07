import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Decks from './src/pages/Decks';
import Deck from './src/pages/Deck';
import { Provider } from 'react-redux';
import Routes from './src/Routes';
import store from './store';


import './ReactotronConfig';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Routes />
  </View>
);

export default App;
