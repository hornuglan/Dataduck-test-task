import React from 'react';
import Header from './Header';
import SignUpForm from './SignUpForm';

const App = () => (
  <div className="container">
    <div className="wrapper">
      <Header />
      <div className="text">
        <div className="form-wrapper">
          <h1 className="text__title">Начните торговать  прямо сейчас</h1>
          <ul className="text__list">
            <li className="text__item">Нет спреда&nbsp;&mdash; торгуйте с&nbsp;прозрачными и&nbsp;точными котировками</li>
            <li className="text__item">Достаточно депозита в&nbsp;$10, чтобы начать торговать</li>
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