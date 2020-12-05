import React from 'react';

import './SideNav.section.css'
import {logo4} from '../../res/img';

const SideNav = () => {
    return (
        <div className="panel__user">
            <ul className="panel-side-nav">
            <img src={logo4} alt="Logo" className="panel__logo" />
                <li className="panel-side-nav__item  <%= path === '/user/bakers' ? 'panel-side-nav__item--active' : '' %>">
                    <a href="/user/bakers" className="panel-side-nav__link">
                        <span className="panel-side-nav__icon fas fa-cart-plus"></span> <span>Shop</span>
                    </a>
                </li>
                <li className="panel-side-nav__item  <%= path === '/user/cart' ? 'panel-side-nav__item--active' : '' %>">
                    <a href="/user/cart" className="panel-side-nav__link">
                        <span className="panel-side-nav__icon fas fa-shopping-basket"></span> <span>My Cart</span>
                    </a>
                </li>
                <li className="panel-side-nav__item  <%= path === '/user' ? 'panel-side-nav__item--active' : '' %>">
                    <a href="/user" className="panel-side-nav__link">
                        <span className="panel-side-nav__icon fas fa-calendar-day"></span> <span>Events</span>
                    </a>
                </li>
                <li className="panel-side-nav__item <%= path === '/user/add-event' ? 'panel-side-nav__item--active' : '' %>">
                    <a href="/user/add-event" className="panel-side-nav__link">
                        <span className="panel-side-nav__icon fas fa-plus"></span><span>Add Event</span>
                    </a>
                </li>
                <li className="panel-side-nav__item <%= path === '/user/orders' ? 'panel-side-nav__item--active' : '' %>">
                    <a href="/user/orders" className="panel-side-nav__link">
                        <span className="panel-side-nav__icon fas fa-shopping-basket"></span><span> Orders</span>
                    </a>
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
                <span>Copyrighted &copy;<a href="#" className="dev">JB Inc.</a>All Rights reserved</span>
            </div>
        </div>
    )
}

export default SideNav;
