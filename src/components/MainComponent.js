import React from 'react';


class MainComponent extends React.Component {
    render() {
        return (
            <div>
                Yes This is main Wrapper
                {this.props.children}
            </div>
        )
    }
}

export default MainComponent;