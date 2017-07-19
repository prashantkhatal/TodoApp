import todoRD from './todos';
import visibilityRD from './visibilityFilter';

import {combineReducers} from 'redux';

export const reducers = combineReducers({todoRD, visibilityRD});