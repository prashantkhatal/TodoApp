import React from 'react';

export class TodoList extends React.Component{


    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchContent(this.props.apiUrl);
    }

    render() {
        return (
            <div className="todo-list">
                <a href="#" className={`delete delete-all ${( (!this.props.todos.length) ? 'hide' : '')}`}
                   onClick={( e ) => {
                       let ids = [];
                       document.querySelectorAll( 'input[type=checkbox]:checked' ).forEach( function( e, d ) {
                           ids.push( +e.getAttribute( 'data-id' ) )
                       } );
                       ids.length && this.props.deleteTodos( ids );
                   }}>Delete All</a>

                <span>Todo List:</span>
                <a href="#" className="delete delete-all fetch hide" onClick={( e ) => {
                    this.props.fetchContent();
                }}>Fetch Content</a>
                <div className="clearfix"></div>
                <ul>
                    {this.props.todos.map( ( todo, index ) => (<Todo key={todo.id} {...todo} toggleTodo={this.props.toggleTodo}
                                                                deleteTodos={this.props.deleteTodos}/>) )}
                </ul>
            </div>
        )
    }
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