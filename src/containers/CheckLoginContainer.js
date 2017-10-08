import React from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login';


class CheckLoginComponent extends React.Component {

    componentDidMount(){

        if(!this.props.isLoggedIn) {
            this.props.route.history.replace( '/login' )
        }
    }

    render() {
        let {isLoggedIn} = this.props;
        return (isLoggedIn) ? this.props.children : null;
    }
}


const mapStatesToProps = (state) => ({isLoggedIn: state.user.isLoggedIn})

const CheckLoginContainer = connect(mapStatesToProps)(CheckLoginComponent);

export default CheckLoginContainer;