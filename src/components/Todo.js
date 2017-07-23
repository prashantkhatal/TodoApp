import React from 'react';

export function TodoList( props ) {
    return (
        <div className="todo-list">
            <a href="#" className={((props.todos.length) ? 'delete delete-all' : 'hide delete delete-all')} onClick={( e ) => {
                let ids = [];
                document.querySelectorAll('input[type=checkbox]:checked').forEach(function(e,d){
                    ids.push(e.getAttribute('data-id'))
                })
                props.deleteTodos(ids);
            }}>Delete All</a>

            <span>Todo List:</span>
            <div className="clearfix"></div>
            <ul>
                {props.todos.map( ( todo, index ) => ( <Todo key={index} {...todo} {...props}/>) )}
            </ul>
        </div>
    )
}

function Todo( props ) {
    return (
        <li className={(props.completed) ? 'striked' : ''} onClick={e => props.toggleTodo( props.id )}>
            <input type="checkbox" data-id={props.id} onClick={(e)=> e.stopPropagation()}/>
            {props.text}
            <a href="#" className="delete" onClick={( e ) => {
                e.stopPropagation();
                props.deleteTodos([props.id]);
            }}>Delete</a>
        </li>
    );
}