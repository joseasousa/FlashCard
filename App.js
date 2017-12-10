import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import FlashCards from './src/FlashCards';

import './ReactotronConfig';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <FlashCards />
    </PersistGate>
  </Provider>
);


export default App;
