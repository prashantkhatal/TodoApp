import { connect } from 'react-redux';
import { TodoList } from '../components/Todo';
import { VISIBILITY_STATUSES } from '../actions';

import { todoActions } from '../actions'

function listOutTodos( todos, status ) {
    switch( status ) {
        case VISIBILITY_STATUSES.SHOW_COMPLETED:
            return todos.filter( ( todo ) => todo.completed == true );

        case VISIBILITY_STATUSES.SHOW_ACTIVE:
            return todos.filter( ( todo ) => todo.completed != true );

        case VISIBILITY_STATUSES.SHOW_ALL:
        default:
            return todos;
    }
}

const mapStatesToMap = function( state ) {
    return {
        todos: listOutTodos( state.todos, state.visibility )
    }
}

const mapDispatchToProps = function( dispatch ) {
    return {
        toggleTodo: ( id ) => {
            dispatch( todoActions.toggleTodo( id ) )
        },
        deleteTodos: (id) => {
            dispatch( todoActions.deleteTodos( id ) )
        },
        fetchContent: () => {
            console.log("I am here in Container");
            dispatch(todoActions.fetchTodos());
        }
    }
}


export const TodoListContainer = connect( mapStatesToMap, mapDispatchToProps )( TodoList );