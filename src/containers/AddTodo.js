import { connect } from 'react-redux';

import { AddTodoPanel } from '../components/AddTodoPanel';
import { todoActions } from '../actions'


const mapDispatchToProps = function( dispatch ) {
    return {
        addTodoFunction: ( text ) => {
            dispatch( todoActions.addTodo( text ) )
        }
    }
}


export const AddTodo = connect( null, mapDispatchToProps )( AddTodoPanel );