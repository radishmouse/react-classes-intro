import React from 'react';

class Decrement extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.handleClick}
            >
                -
            </button>
        );
    }
}

export default Decrement;