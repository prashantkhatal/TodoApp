import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {TodosApp} from '../components';
import {createStore} from 'redux';
import {reducers} from '../reducers';

import {Provider} from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let todos = [{text: 'My First todo'}];

class MyApp extends React.Component {
    render() {
        return (
            <TodosApp todos={todos}/>
        );
    }
}

render(<Provider store={store}>
            <MyApp />
        </Provider>,
    document.getElementById('TodoApp')
);