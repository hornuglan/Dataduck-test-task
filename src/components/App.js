import React from 'react';
import Header from './Header';
import FormValid from './FormValid';
import SignIn from './SIgnIn';
import TestForm from './TestForm';

class App extends React.Component {
    render() {
        return(
            <div className="container">
            <div className="wrapper">
                <Header/>
                <div className="text">
                    <div className="form-wrapper">
                        <h1 className="text__title">Начните торговать  прямо сейчас</h1>
                        <ul className="text__list">
                            <li className="text__item">Нет спреда — торгуйте с прозрачными и точными котировками</li>
                            <li className="text__item">Достаточно депозита в $10, чтобы начать торговать</li>
                        </ul>
                        <FormValid />
                    </div>
                    <div className="image">
                        <div className="image__img"></div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default App;