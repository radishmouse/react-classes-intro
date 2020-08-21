// 1. bring in React
import React from 'react';

// const Output = (props) => {

// }
// function Output(props) {

// }

// 3. define my component
class Output extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div>{this.props.value}</div>
        );
    }
}

// 2. export my component
// using "default" because this is the one and only
// thing I want folks to import
export default Output;