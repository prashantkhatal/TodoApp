import React from 'react';

export function TodoList( props ) {
    return (
        <ul>
            {props.todos.map( ( todo, index ) => ( <Todo key={index} {...todo} toggleTodo={props.toggleTodo}/>) )}
        </ul>
    )
}

function Todo( props ) {
    return (
        <li className={(props.completed) ? 'striked' : ''} onClick={e => props.toggleTodo( props.id )}>
            {props.text}
        </li>
    );
}