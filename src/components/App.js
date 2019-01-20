import React from 'react';
import Header from './Header';
import SignUpForm from './SignUpForm';

const App = () => (
  <div className="container">
    <div className="wrapper">
      <Header />
      <div className="text">
        <div className="form-wrapper">
          <h1 className="text__title">Sign Up&nbsp;Form</h1>
          <ul className="text__list">
            <li className="text__item">Nam liber tempor cum soluta nobis eleifend option</li>
            <li className="text__item">Eodem modo typi, qui nunc nobis videntur parum futurum</li>
          </ul>
          <SignUpForm />
        </div>
        <div className="image">
          <div className="image__img"></div>
        </div>
      </div>
    </div>
  </div>
)

export default App;