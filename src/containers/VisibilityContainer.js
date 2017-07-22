import {connect} from 'react-redux';
import {Footer} from '../components/Footer';
import {visibilityActions} from '../actions';

const mapStatesToProps = function (state) {
    return {
        visibilityFilter: state.visibilityRD
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        switchVisibility: (status) => dispatch(visibilityActions.toggleVisibility(status))
    }
}

export const VisibilityContainer = connect(mapStatesToProps, mapDispatchToProps)(Footer);