import React from 'react';
import { ButtonOne } from '../../Components';

import './Header.section.css';

const Header = () => {
    return (
        <header className="header head-home" id="home">
            <div className="header__text-box">
                <h1 className="title">
                    <span className="title--main">Cara Cakes</span>
                    <span className="title--sub">Resting place for flavours</span>
                </h1>
                <ButtonOne link="/signup" styles="btn btn-deep--pink btn-animated--left" title="Sign-up" />
                <ButtonOne link="#login" styles="btn btn-deep--pink btn-animated--right" title="Login" />
            </div>
        </header>
    );
}

export default Header;