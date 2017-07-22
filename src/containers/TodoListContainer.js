import {connect} from 'react-redux';
import {TodoList} from '../components/Todo';
import {VISIBILITY_STATUSES} from '../actions';

import {todoActions} from '../actions'

function listoutTodos(todos, status) {
    switch (status) {
        case VISIBILITY_STATUSES.SHOW_COMPLETED:
            return todos.filter((todo) => todo.completed == true);
        case VISIBILITY_STATUSES.SHOW_ACTIVE:
            return todos.filter((todo) => todo.completed != true);
        case VISIBILITY_STATUSES.SHOW_ALL:
        default:
            return todos;
    }
}

const mapStatesToMap = function (state) {
    return {
        todos: listoutTodos(state.todoRD, state.visibilityRD)
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        toggleTodo: (id) => {
            dispatch(todoActions.toggleTodo(id))
        }
    }
}


export const TodoListContainer = connect(mapStatesToMap, mapDispatchToProps)(TodoList);
