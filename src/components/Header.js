import React from 'react';
import SignIn from './SIgnIn';

  

class Header extends React.Component {
    render() {
        return(
            <header className="header"> 
            <div className="header__wrapper">
                <div className="line-wrapper">
                    <div className="line"><span className="line__inner"></span></div>
                </div>
                <SignIn />
            </div>
        </header>
        )
    }
}

export default Header;