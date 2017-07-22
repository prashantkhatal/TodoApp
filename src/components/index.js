import React from 'react';

import {TodoListContainer} from '../containers/TodoListContainer';
import {AddTodo} from '../containers/AddTodo';
import {VisibilityContainer} from '../containers/VisibilityContainer'

import {Footer} from './Footer';
import * as myActions from '../actions';

export class TodosApp extends React.Component {

    constructor(props) {
        super(props);
         this.state = {status: props.status};
    }

    render() {
        return (
            <div>
                <AddTodo />
                <TodoListContainer />
                <VisibilityContainer/>

                {/*<Footer visibilityFilter={this.state.status}/>*/}
            </div>
        );
    }
}

TodosApp.defaultProps = {
    status:myActions.VISIBILITY_STATUSES.SHOW_ALL
}