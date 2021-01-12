import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.component.css';

const NavBar = () => {
    return (
        <div className="navi">
            <input type="checkbox" id="navi-toggle" className="navi__checkbox" />
            <label for="navi-toggle" className="navi__button">
                <span className="navi__icon"></span>
            </label>
            <div className="navi__list">
                <span className="navi__item navi__item--1">
                    <NavLink to="/admin/dashboard" exact title="Home"  activeClassName="navi__active" className="navi__link fas fa-home"></NavLink>
                </span>
                <span className="navi__item navi__item--2">
                    <NavLink to="/login" title="About" activeClassName="navi__active" className="navi__link fas fa-sign-in-alt"></NavLink>
                </span>
                <span className="navi__item navi__item--3">
                    <NavLink to="/register" title="Gallery" activeClassName="navi__active" className="navi__link fas fa-sign-in-alt"></NavLink>
                </span>
                <span className="navi__item navi__item--4">
                    <NavLink to="/user/cart" title="Story" activeClassName="navi__active" className="navi__link fas fa-history"></NavLink>
                </span>
            </div>
        </div>
    )
}

export default NavBar;
