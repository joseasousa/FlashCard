import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import FlashCards from './src/FlashCards';
// import './ReactotronConfig';

const App = () => (
  <Provider store={store}>
    <FlashCards />
  </Provider>
);

export default App;
