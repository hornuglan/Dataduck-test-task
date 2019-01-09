import React from 'react';
import { render } from 'react-dom';

class ErrorPopUp extends React.Component {
    render() {
        return(
            <div className="popup">
                <div className="popup__wrapper">
                    {this.props.error}
                </div>
                <div className="popup__tail"></div>
           </div>
        )
    }
}

export default ErrorPopUp;