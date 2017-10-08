import React from 'react';
import {
  BrowserRouter as  Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

const AuthObj  = {
    isAuthenticated: false,
    authenticate(){
        console.log('Yes Authenticated');
        this.isAuthenticated = true;
    }
}

const BasicExample = (props) => {
    return (
        <Router>
            <div>

                <Link to="/public" >Public Page</Link>
                <Link to="/protected" >Protected Page</Link>

                <hr/>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>

                <MyPrivateRoute path="/protected" component={Protected}/>

            </div>
        </Router>)
}

const Public = (props) => <div> This is Public</div>
const Protected = (props) => <div> <strong>This is Protected Area</strong></div>

const MyPrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        AuthObj.isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

const Login = ( props ) => {
    return <div>
        Must Login <button onClick={AuthObj.authenticate.bind(AuthObj)}>Login</button>
    </div>
}

export var RouterV4 = BasicExample;