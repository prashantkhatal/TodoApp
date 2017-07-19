import React from 'react';

import {TodoList} from './Todo';
import {AddTodoPanel} from './AddTodoPanel';
import {Footer} from './Footer';
import {VISIBILITY_STATUSES} from '../actions';

export class TodosApp extends React.Component {

    constructor(props) {
        super(props);
         this.state = {status: props.status};
    }

    render() {
        return (
            <div>
                <AddTodoPanel />
                <TodoList {...this.props}/>
                <Footer visibilityFilter={this.state.status}/>
            </div>
        );
    }
}

TodosApp.defaultProps = {
    status:VISIBILITY_STATUSES.SHOW_ALL
}