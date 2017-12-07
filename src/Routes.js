import { StackNavigator } from 'react-navigation';
import Decks from './pages/Decks';
import Deck from './pages/Deck';

const Routes = StackNavigator({
  Decks: {
    screen: Decks,
  },
  Deck: {
    screen: Deck,
  },
});

export default Routes;
