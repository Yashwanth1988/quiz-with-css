import { combineReducers } from 'redux';

import selectedQuestions, { questionsReducer, scoreReducer } from './selectedQuestions';

export const allReducers = combineReducers({
	selectedQuestions,
	questions : questionsReducer,
	score : scoreReducer
})