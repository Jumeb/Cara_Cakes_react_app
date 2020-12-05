import React from 'react';
import Icons, {FontAwesome} from 'react-web-vector-icons'

import './NavBar.component.css';

const NavBar = () => {
    return (
        <div className="navi">
            <input type="checkbox" id="navi-toggle" className="navi__checkbox" />
            <label for="navi-toggle" className="navi__button">
                <span className="navi__icon"></span>
            </label>
            <div className="navi__list">
                <span className="navi__item navi__item--1"><a href="/" title="Home"
                        className="navi__link navi__active fas fa-home"></a></span>
                <span className="navi__item navi__item--2"><a href="/about" title="About"
                        className="navi__link <%= path === '/about' ? 'navi__active' : '' %> fas fa-sign-in-alt"></a></span>
                <span className="navi__item navi__item--3"><a href="/gallery" title="Gallery"
                        className="navi__link <%= path === '/gallery' ? 'navi__active' : '' %> fas fa-sign-in-alt"></a></span>
                <span className="navi__item navi__item--4"><a href="/stories" title="Story"
                        className="navi__link <%= path === '/stories' ? 'navi__active' : '' %> fas fa-history"></a></span>
            </div>
        </div>
    )
}

export default NavBar;
