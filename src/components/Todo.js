import React from 'react';
import DragSortableList from 'react-drag-sortable';
import PropTypes from 'prop-types';


export class TodoList extends React.Component{


    constructor(props){
        super(props);
        this.state = { showLoader: true };
    }

    componentDidMount(){
        this.props.fetchContent(this.props.apiUrl);
    }

    componentDidUpdate(prevProps, prevState){
        if( prevState.showLoader ) {
            this.setState( {
                showLoader: false
            } );
        }
    }

    render() {

        let list = [{'content':<li className='no-drag' style={{textAlign: 'center'}}>No Goals</li>}],
            placeholder = <li className="placeholderContent"> DROP HERE ! </li>;

        if( this.props.todos.length) {
	        list = [];
	        this.props.todos.map( ( todo, index ) => {
		        list.push( { 'content':<Todo key={todo.id} {...todo} toggleTodo={this.props.toggleTodo}
                       deleteTodos={this.props.deleteTodos} />});
	        } )
        }

        return (
            <div className="todo-list">
                <a href="#" className={`delete delete-all button ${( (!this.props.todos.length) ? 'hide' : '')}`}
                   onClick={( e ) => {
                       let ids = [];
                       document.querySelectorAll( 'input[type=checkbox]:checked' ).forEach( function( e, d ) {
                           ids.push( +e.getAttribute( 'data-id' ) )
                       } );
                       ids.length && this.props.deleteTodos( ids );
                   }}>Delete All</a>

                <span>Todo List:</span>
                <a href="#" className="delete delete-all fetch hide button" onClick={( e ) => {
                    this.props.fetchContent();
                }}>Fetch Content</a>

                <div className="clearfix"></div>

                {(this.state.showLoader) ? <div className="loader"></div>: <ul><DragSortableList items={list} placeholder={placeholder}/></ul>}
            </div>
        )
    }
}

function Todo( props ) {
    return (
        <li className={(props.completed) ? 'striked' : ''} onClick={e => props.toggleTodo( props.id )}>
            <i className="sort"></i>
            <input type="checkbox" data-id={props.id} onClick={(e)=> e.stopPropagation()}/>
            {props.text}
            <a href="#" className="delete button" onClick={( e ) => {
                e.stopPropagation();
                props.deleteTodos([props.id]);
            }}>Delete</a>
        </li>
    );
}

TodoList.propTypes = {
    apiUrl: PropTypes.string.isRequired,
    todos: PropTypes.array,
    toggleTodo: PropTypes.func.isRequired
}

Todo.propTypes = {
    id:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
}