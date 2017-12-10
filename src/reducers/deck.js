import { createAction, handleActions } from 'redux-actions';
import * as ActionTypes from '../types';

const initialState = {
  decks: [],
};

export const createDeck = createAction(ActionTypes.CREATE_DECK);
export const addQuestion = createAction(ActionTypes.ADD_QUESTION);

export default handleActions(
  {
    [ActionTypes.CREATE_DECK]: (state, { payload: deck }) => ({
      ...state,
      decks: [
        ...state.decks,
        {
          ...deck,
          id: state.decks.length + 1,
          questions: [],
          createdAt: new Date().toISOString(),
        },
      ],
    }),

    [ActionTypes.ADD_QUESTION]: (state, { payload }) => {
      const { deckId, ...question } = payload;

      const decks = [...state.decks];
      const deck = decks.filter(({ id }) => id === deckId)[0];

      deck.questions = [
        ...deck.questions,
        {
          ...question,
          id: deck.questions.length + 1,
        },
      ];

      return {
        ...state,
        decks,
      };
    },
  },
  initialState,
);
