import React from 'react';
import {NavLink} from 'react-router-dom';

import './SideNav.section.css'
import {favicon} from '../../res/img';

const SideNav = (props) => {
    const {isDetail} = props;

    return (
        <div className={isDetail ? "panel__userDetail" : "panel__user"}>
            <ul className="panel-side-nav">
            <img src={favicon} alt="Logo" className="panel__logo" />
                <li className="panel-side-nav__item  <%= path === '/user/cart' ? 'panel-side-nav__item--active' : '' %>">
                    <NavLink to="/user/cart" className="panel-side-nav__link">
                        <span className="panel-side-nav__icon fas fa-shopping-basket"></span> <span className={isDetail && "isDetail__text"}>My Cart</span>
                    </NavLink>
                </li>
                <li className="panel-side-nav__item  <%= path === '/user/bakers' ? 'panel-side-nav__item--active' : '' %>">
                    <NavLink to="/user/bakers" className="panel-side-nav__link">
                        <span className="panel-side-nav__icon fas fa-cart-plus"></span> <span className={isDetail && "isDetail__text"}>Shop</span>
                    </NavLink>
                </li>
                <li className="panel-side-nav__item  <%= path === '/user' ? 'panel-side-nav__item--active' : '' %>">
                    <NavLink to="/user/event" className="panel-side-nav__link">
                        <span className="panel-side-nav__icon fas fa-calendar-day"></span> <span className={isDetail && "isDetail__text"}>Events</span>
                    </NavLink>
                </li>
                <li className="panel-side-nav__item <%= path === '/user/orders' ? 'panel-side-nav__item--active' : '' %>">
                    <NavLink to="/user/orders" className="panel-side-nav__link">
                        <span className="panel-side-nav__icon fas fa-shopping-basket"></span><span className={isDetail && "isDetail__text"}> Orders</span>
                    </NavLink>
                </li>
                <li className="panel-side-nav__item">
                    <form action="/logout" method="post">
                        <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                        <button type="submit" className="panel-side-nav__link"><span
                                className="panel-side-nav__icon logout_icon fas fa-power-off"></span>Logout</button>
                    </form>
                </li>
            </ul>
            <div className="power">
                <span>Copyrighted &copy;<NavLink to="#" className="dev">JB Inc.</NavLink>All Rights reserved</span>
            </div>
        </div>
    )
}

export default SideNav;
