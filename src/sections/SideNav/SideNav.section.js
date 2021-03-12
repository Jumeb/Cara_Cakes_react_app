import React from 'react';
import {NavLink} from 'react-router-dom';
import { 
    IoCalendar, 
    IoCard, 
    IoCart, 
    IoLogOut, 
    IoStatsChart 
} from 'react-icons/io5';

import styles from './SideNav.module.css'
import {favicon} from '../../res/img';

const SideNav = (props) => {
    const {isDetail} = props;

    return (
        <div className={isDetail ? styles.panelUserDetail : styles.panelUser}>
            <ul className={styles.panelSideNav}>
            <img src={favicon} alt="Logo" className={styles.panelLogo} />
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/shop" className={styles.panelSideNavLink}  activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoCard /></span> <span className={isDetail && styles.isDetailText}>Shop</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/cart" className={styles.panelSideNavLink} activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoCart /> </span> <span className={isDetail && styles.isDetailText}>My Cart</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/event" className={styles.panelSideNavLink}  activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoCalendar /></span> <span className={isDetail && styles.isDetailText}>Events</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/orders" className={styles.panelSideNavLink}  activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoStatsChart /></span><span className={isDetail && styles.isDetailText}> Orders</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/" exact className={styles.panelSideNavLink}  activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoLogOut /></span><span className={isDetail && styles.isDetailText}>Logout</span>
                    </NavLink>
                </li>
            </ul>
            <div className={styles.power}>
                <span>Copyrighted &copy;<NavLink to="#" className={styles.dev}>JB Inc.</NavLink>All Rights reserved</span>
            </div>
        </div>
    )
}

export default SideNav;
