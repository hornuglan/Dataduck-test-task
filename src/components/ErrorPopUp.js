import React from 'react';

const ErrorPopUp = (props) => (
  <div className="popup">
    <div className="popup__wrapper">
      {props.error}
    </div>
  </div>
)

export default ErrorPopUp;