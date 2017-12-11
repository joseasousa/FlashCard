import React, { PureComponent } from 'react';
import {
  View,
  FlatList,
  StyleSheet,

} from 'react-native';
import { connect } from 'react-redux';

import Deck from './components/Deck';

import { Button } from '../../components/common';


class DeckList extends PureComponent {
  static navigationOptions = {
    headerTitle: 'Decks',
  };

  handleGoToCreateDeck = () =>
    this.props.navigation.navigate('CreateDeck');

  handleGoToDeckDetail = id =>
    this.props.navigation.navigate('DeckDetail', { id });

  renderDeck = ({ item }) => (
    <Deck
      {...item}
      goToDeckDetail={this.handleGoToDeckDetail}
    />
  );

  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={deck.decks}
          keyExtractor={(item, index) => index}
          renderItem={this.renderDeck}
          style={styles.deckList}
        />

        <Button
          label="Add"
          onPress={this.handleGoToCreateDeck}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  deckList: {
    width: '100%',
  },
});

const mapStateToProps = ({ deck }) => ({
  deck,
});

export default connect(mapStateToProps)(DeckList);
