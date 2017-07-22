import React from 'react';

export function AddTodoPanel( props ) {
    return (
        <input onKeyPress={( e ) => {
            if( e.charCode == 13 && e.target.value) {
                props.addTodoFunction( e.target.value );
                e.target.value = '';
            }
        }}/>
    );
}