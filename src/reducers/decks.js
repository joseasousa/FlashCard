import * as ActionTypes from '../types';

const InitialState = {
  decks: [],
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_DECK:
      return [...state, action.deck];

    default:
      return state;
  }
}
