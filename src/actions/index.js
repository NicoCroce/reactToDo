export const ADD_TO_DO = 'ADD_TO_DO';
export const LOAD_TODOS = 'LOAD_TODOS';

export const addToDo = payload => ({ type: ADD_TO_DO, payload });
export const loadTodos = payload => ({ type: LOAD_TODOS, payload });

