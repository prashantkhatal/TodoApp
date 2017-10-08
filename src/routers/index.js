import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import { TodosApp } from '../components';
import {OtherComponent} from '../components/OtherComponents'
import CheckLoginContainer from '../containers/CheckLoginContainer';
import Login from '../components/Login';
import MainComponent from '../components/MainComponent';

export class AppRouter extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={MainComponent}>
                    <IndexRoute component={TodosApp}/>
                    <Route path="/login" component={Login}/>
                    <Route component={CheckLoginContainer} history={browserHistory}>
                        <Route path="/games" component={OtherComponent}/>
                    </Route>
                    <Route path="/(:filter)" component={TodosApp}/>
                </Route>
            </Router>
        );
    }
}