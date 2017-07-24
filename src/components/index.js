import React from 'react';

import { TodoListContainer } from '../containers/TodoListContainer';
import { AddTodo } from '../containers/AddTodo';
import { VisibilityContainer } from '../containers/VisibilityContainer';
import {OtherComponent} from './OtherComponents';

export function TodosApp( props ) {
    return (
        <div>
            <AddTodo />
            <TodoListContainer />
            <VisibilityContainer/>
            <OtherComponent />
        </div>
    );
}