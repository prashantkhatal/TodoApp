import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { AppRouter } from '../routers';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from '../reducers';

import thunkMiddleware from 'redux-thunk';      //instead used asyncActionMiddleware
import {todoDecorator} from '../middlewares/todoDecorator';
import {asyncActionMiddleware} from '../middlewares/asyncActionMiddleware';
import {fetchContent} from '../actions/ActionCreators';
import config from '../configs/';

import { Provider } from 'react-redux';

fetch(config.apiUrl).then( response => response.json()).then(response => {

    let cnt = -1;	//purposefully added negative index temporary purpose
    let initialState = {
        todos: response.map( todo => {
            todo.id = cnt--;
            return todo;
        } )
    };

    const store = createStore( reducers, initialState, compose( applyMiddleware( asyncActionMiddleware, todoDecorator ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) );

    render( <Provider store={store}>
            <AppRouter />
        </Provider>,
        document.getElementById( 'TodoApp' )
    );

    Provider.propTypes = {
        store: PropTypes.object.isRequired
    }

});