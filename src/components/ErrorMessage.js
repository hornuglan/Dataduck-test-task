import React from 'react';
import { render } from 'react-dom';

class ErrorMessage extends React.Component {
    render() {
        return(
            <div className="error-message">
            {this.props.error}
        </div>
        )
    }
}

export default ErrorMessage;