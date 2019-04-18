import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { todo } from './../reducers/todo';

const initialState = { todos: '' };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(todo, initialState, composeEnhancers(thunk));