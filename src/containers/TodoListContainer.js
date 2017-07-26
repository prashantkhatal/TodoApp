import { connect } from 'react-redux';
import { TodoList } from '../components/Todo';
import { VISIBILITY_STATUSES } from '../actions';

import { todoActions } from '../actions'

function listOutTodos( todos, status, searchText = '' ) {
    let statusFlag = true;
    searchText = searchText.toLowerCase();

    switch( status ) {
        case VISIBILITY_STATUSES.SHOW_ACTIVE:
            statusFlag = false;
            break;
        case VISIBILITY_STATUSES.SHOW_COMPLETED:
        case VISIBILITY_STATUSES.SHOW_ALL:
    }

    return todos.filter( ( todo ) => ( VISIBILITY_STATUSES.SHOW_ALL == status || todo.completed == statusFlag ) && -1 != todo.text.toLowerCase().indexOf(searchText) );
}

const mapStatesToMap = function( state ) {
    return {
        todos: listOutTodos( state.todos, state.visibility, state.searchText )
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
        fetchContent: (url) => {
            dispatch(todoActions.fetchTodos(url));
        }
    }
}

export const TodoListContainer = connect( mapStatesToMap, mapDispatchToProps )( TodoList );