import React from 'react';

export function TodoList(props) {
    return (
        <ul>
            {props.todos.map((todo, index) => <Todo key={index} {...todo} />)}
        </ul>
    )
}

function Todo(props) {
    return (
        <li>
            {props.text}
        </li>
    );
}