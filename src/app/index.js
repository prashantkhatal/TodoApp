import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {TodosApp} from '../components';

let todos = [{text:'My First todo'}];

class MyApp extends React.Component{
    render(){
        return(
            <TodosApp todos={todos}/>
        );
    }
}

render(<MyApp />, document.getElementById('TodoApp'));