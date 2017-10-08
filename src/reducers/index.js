import { combineReducers } from 'redux';

import todoRD from './todos';
import visibilityRD from './visibilityFilter';
import searchTodoRD from './searchTodo';

const user = (state = {isLoggedIn:false}, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return { isLoggedIn: !state.isLoggedIn }
    }
    return state;
};

export const reducers = combineReducers( { user:user, todos: todoRD, visibility: visibilityRD, searchText: searchTodoRD } );