import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './SideNav.module.css'
import {favicon} from '../../res/img';

const SideNav = (props) => {
    const {isDetail} = props;

    return (
        <div className={isDetail ? styles.panelUserDetail : styles.panelUser}>
            <ul className={styles.panelSideNav}>
            <img src={favicon} alt="Logo" className={styles.panelLogo} />
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/cart" className={styles.panelSideNavLink}>
                        <span className="panel-side-nav__icon fas fa-shopping-basket"></span> <span className={isDetail && styles.isDetailText}>My Cart</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/bakers" className={styles.panelSideNavLink}>
                        <span className="panel-side-nav__icon fas fa-cart-plus"></span> <span className={isDetail && styles.isDetailText}>Shop</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/event" className={styles.panelSideNavLink}>
                        <span className="panel-side-nav__icon fas fa-calendar-day"></span> <span className={isDetail && styles.isDetailText}>Events</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/orders" className={styles.panelSideNavLink}>
                        <span className="panel-side-nav__icon fas fa-shopping-basket"></span><span className={isDetail && styles.isDetailText}> Orders</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <form action="/logout" method="post">
                        <button type="submit" className={styles.panelSideNavLink}><span
                                className="panel-side-nav__icon logout_icon fas fa-power-off"></span>Logout</button>
                    </form>
                </li>
            </ul>
            <div className={styles.power}>
                <span>Copyrighted &copy;<NavLink to="#" className={styles.dev}>JB Inc.</NavLink>All Rights reserved</span>
            </div>
        </div>
    )
}

export default SideNav;
