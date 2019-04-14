import { ADD_TO_DO } from './../actions';

export const todo = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TO_DO:
            return { ...state, newTodo: action.payload }
        default:
            return state;
    }
    return state;
}
