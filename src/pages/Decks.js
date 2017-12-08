import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addDecks } from '../actions';


const Decks = () => (
  <View>
    <Text>Decks!</Text>
    {tron.log('testes', 2)}
    {console.log('testes', JSON.stringify(this.props))}
  </View>
);

const mapStateToProps = state => (
  { decks: state.decks.decks }
);

const mapDispatchToProps = dispatch => ({
  addDecks: () => {
    dispatch(addDecks());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Decks);
