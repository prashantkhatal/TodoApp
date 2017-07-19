import {SET_VISIBILITY_FILTER, visibilityActions} from '../actions';

export default function visibilityRD(state = [], action) {
    switch (action.type) {

        case SET_VISIBILITY_FILTER:
            return {...state, ...visibilityActions.toggleVisibility(action.filter)};
        default:
            return state;
    }
}