import {connect} from 'react-redux';
import {TodoList} from '../components/Todo';


import {todoActions} from '../actions'


const mapStatesToMap = function (state) {
    return {
        todos: state.todoRD
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
