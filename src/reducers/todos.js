import {ADD_TODO, TOGGLE_TODO, todoActions} from '../actions';

export default function todoRD(state = [], action) {
    switch (action.type) {

        case ADD_TODO:
            state = {...state, ...todoActions.addTodo(action.text)}
            break;

        case TOGGLE_TODO:
            state = {...state, ...todoActions.toggleTodo(action.id)}
            break;

        default:
            return state;
    }
    return state;
}