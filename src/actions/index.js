import fetch from 'isomorphic-fetch';

export const ADD_TODO              = 'ADD_TODO',
             TOGGLE_TODO           = 'TOGGLE_TODO',
             DELETE_TODOS          = 'DELETE_TODOS',
             SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VISIBILITY_STATUSES = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const todoActions = {
    addTodo( text ) {
        return {
            type: ADD_TODO,
            text
        }
    },
    toggleTodo( id ){
        return {
            type: TOGGLE_TODO,
            id
        }
    },
    deleteTodos( ids ){
        return {
            type: DELETE_TODOS,
            ids
        }
    },
    fetchTodos(){
        return function() {
            return fetch('http://localhost:7777/').then(function( response ) {
                console.log("Yess In Res=>", response);
            }, function(error) {
                console.log("Yess In Res=>", error);
            });
        }
    }
}

export const visibilityActions = {
    toggleVisibility( visibility ){
        return {
            type: SET_VISIBILITY_FILTER,
            visibility
        }
    }
}