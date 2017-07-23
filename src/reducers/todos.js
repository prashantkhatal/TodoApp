import { ADD_TODO, TOGGLE_TODO, DELETE_TODOS } from '../actions';

let idCounter = 0;

export default function todoRD( state = [], action ) {
    switch( action.type ) {

        case ADD_TODO:
            state = [ ...state, { id: idCounter++, text: action.text, completed: false } ];
            break;

        case TOGGLE_TODO:
            state = state.map( function( todo ) {
                if( todo.id == action.id ) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            } );
            break;

        case DELETE_TODOS:
            state = state.filter((todo) => -1 == action.ids.indexOf(todo.id) );
            break;

        default:
            return [...state];
    }
    return state;
}