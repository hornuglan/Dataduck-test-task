import React from 'react';

const ErrorPopUp = () => (
    <div className="popup">
    <div className="popup__wrapper">
        {this.props.error}
    </div>
    <div className="popup__tail"></div>
</div>
)
 
export default ErrorPopUp;