import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TabNavigator, StackNavigator  } from 'react-navigation';
import Decks from './src/pages/Decks';
import Deck from './src/pages/Deck';
import { Provider } from 'react-redux';
import store from './store';
//import Routes from './src/Routes';


const Routes = TabNavigator({
  Decks: {
    screen: Decks,
  },
  Deck: {
    screen: Deck,
  },
});
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
    <Text>oi</Text>
    <Routes />
  </View>
);

export default App;
