import { createStore } from 'redux';
import { todo } from './../reducers/todo';

const initialState = {
    newTodo: 'nico'
};

export const store = createStore(todo, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());