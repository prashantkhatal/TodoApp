import { combineReducers } from 'redux';

import todoRD from './todos';
import visibilityRD from './visibilityFilter';


export const reducers = combineReducers( { todos: todoRD, visibility: visibilityRD } );