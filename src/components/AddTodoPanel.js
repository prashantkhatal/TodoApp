import React from 'react';

export function AddTodoPanel( props ) {
    return (
        <div>
            <input className="goal" placeholder="Type a Goal and Press Enter...." onKeyPress={( e ) => {
                if( e.charCode == 13 && e.target.value) {
                    props.addTodoFunction( e.target.value );
                    e.target.value = '';
                }
            }}/>
            <a href="#" className="button add_todo_btn">Add Goal</a>
        </div>
    );
}