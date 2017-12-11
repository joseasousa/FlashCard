import { TabNavigator, StackNavigator } from 'react-navigation';

import DeckList from './pages/deck/DeckList';
import DeckDetail from './pages/deck/DeckDetail';
import CreateDeck from './pages/deck/CreateDeck';
import AddQuestion from './pages/question/AddQuestion';
import Quiz from './pages/quiz/Quiz';
import FinishedQuiz from './pages/quiz/FinishedQuiz';

export default StackNavigator({
  Main: {
    screen: DeckList,
  },
  DeckDetail: {
    screen: DeckDetail,
  },
  CreateDeck: {
    screen: CreateDeck,
  },
  AddQuestion: {
    screen: AddQuestion,
  },
  Quiz: {
    screen: Quiz,
  },
  FinishedQuiz: {
    screen: FinishedQuiz,
  },
});
