export const ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VISIBILITY_STATUSES = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const todoActions = {
    addTodo(text) {
        return {
            type: ADD_TODO,
            text
        }
    },
    toggleTodo(id){
        return {
            type: TOGGLE_TODO,
            id
        }
    }
}

export const visibilityActions = {
    toggleVisibility(visibility){
        return {
            type: SET_VISIBILITY_FILTER,
            visibility
        }
    }
}