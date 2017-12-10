import * as ActionTypes from '../types';

export function addDecks(deck) {
  return {
    type: ActionTypes.ADD_DECK,
    deck,
  };
}
