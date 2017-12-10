import { createAction, handleActions } from 'redux-actions';
import * as ActionTypes from '../types';

const initialState = {
  chosenDeck: null,
  currentQuestionIndex: 0,
  isFinished: false,
  stats: {
    isLoading: true,
    score: 0,
  },
};

export const setChosenDeck = createAction(ActionTypes.SET_CHOSEN_DECK);
export const clearQuiz = createAction(ActionTypes.CLEAR_QUIZ);
export const restartQuiz = createAction(ActionTypes.RESTART_QUIZ);

export const answerQuestion = createAction(ActionTypes.ANSWER_QUESTION);

export const calculateStats = createAction(ActionTypes.CALCULATE_STATS);

export default handleActions(
  {
    [ActionTypes.SET_CHOSEN_DECK]: (state, { payload: chosenDeck }) => ({
      ...state,
      chosenDeck,
      currentQuestionIndex: 0,
    }),

    [ActionTypes.CLEAR_QUIZ]: state => initialState,

    [ActionTypes.RESTART_QUIZ]: state => ({
      ...initialState,
      chosenDeck: state.chosenDeck,
    }),

    [ActionTypes.ANSWER_QUESTION]: (state, { payload: isAnswerCorrect }) => {
      const questions = state.chosenDeck.questions.map((question, index) => (
        index === state.currentQuestionIndex ?
          {
            ...question,
            isAnswerCorrect,
          } : question
      ));

      const currentQuestionIndex = questions.findIndex((question, index) =>
        index === state.currentQuestionIndex);

      const isFinished = currentQuestionIndex === (questions.length - 1);

      return {
        ...state,
        chosenDeck: {
          ...state.chosenDeck,
          questions,
        },
        currentQuestionIndex: !isFinished ? currentQuestionIndex + 1 : 0,
        isFinished,
      };
    },

    [ActionTypes.CALCULATE_STATS]: (state) => {
      const correctAnswers = state.chosenDeck.questions.filter(({ isAnswerCorrect }) => isAnswerCorrect);
      const questionsLength = state.chosenDeck.questions.length;

      return {
        ...state,
        stats: {
          isLoading: false,
          score: (correctAnswers.length / questionsLength) * 100,
        },
      };
    },
  },
  initialState,
);
