import React from 'react';

export class AddTodoPanel extends React.Component {

    render() {
        return (
            <div>
                <input name="todo" ref={(input) => this.myInput = input} onKeyPress={(e) => {
                    if (e.charCode == 13) {
                        this.props.addTodoFunction(e.target.value)
                        e.target.value = '';
                    }
                }}/>
            </div>
        );
    }
}