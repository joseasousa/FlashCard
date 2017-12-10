import React, { PureComponent } from 'react';
import { AsyncStorage, View, Text, StyleSheet } from 'react-native';
import { Font } from 'expo';
import { persistStore } from 'redux-persist';


import Router from './Router';
import store from './store';

import { Loading } from './components/common';

class FlashCards extends PureComponent {
  state = {
    isRehydrating: true,
    isLoadingFont: true,
  };

  componentDidMount() {
    this.handlePersistStore();
  }


  handlePersistStore = () =>
    persistStore(store, {
      storage: AsyncStorage,
      whitelist: ['deck'],
    }, () =>
      this.setState({
        isRehydrating: false,
      }),
    );

  render() {
    const { isRehydrating, isLoadingFont } = this.state;

    if (isRehydrating || isLoadingFont) {
      return (
        <Loading />
      );
    }

    return (
      <Router />
    );
  }
}

export default FlashCards;
