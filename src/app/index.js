import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { TodosApp } from '../components';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from '../reducers';

import thunkMiddleware from 'redux-thunk';      //instead used asyncActionMiddleware
import {todoDecorator} from '../middlewares/todoDecorator';
import {asyncActionMiddleware} from '../middlewares/asyncActionMiddleware';

import { Provider } from 'react-redux';

const store = createStore( reducers, compose(applyMiddleware(asyncActionMiddleware, todoDecorator), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) );

class MyApp extends React.Component {
    render() {
        return (
            <TodosApp />
        );
    }
}

render( <Provider store={store}>
        <MyApp />
    </Provider>,
    document.getElementById( 'TodoApp' )
);