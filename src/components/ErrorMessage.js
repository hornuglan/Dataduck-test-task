import React from 'react';

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