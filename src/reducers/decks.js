import * as ActionTypes from '../types';

const InitialState = {
  decks: [
    {
      id: 1,
      data: 'dado',
    },
    {
      id: 2,
      data: 'dado2',
    },
  ],
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_DECK:
      return [...state, action.deck];

    default:
      return state;
  }
}
