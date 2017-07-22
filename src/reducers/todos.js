import { ADD_TODO, TOGGLE_TODO, todoActions } from '../actions';

export default function todoRD( state = [], action ) {
    switch( action.type ) {

        case ADD_TODO:
            state = [ ...state, { id: state.length + 1, text: action.text, completed: false } ];

        case TOGGLE_TODO:
            state = state.map( function( todo ) {
                if( todo.id == action.id ) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            } );

        default:
            return state;
    }
}