import { ADD_TO_DO, LOAD_TODOS } from './../actions';

export const todo = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return Object.assign({}, state, { newTodo: action.payload });
        case LOAD_TODOS:
            return Object.assign({}, state, { todos: action.payload });
        default:
            return state;
    }
}
