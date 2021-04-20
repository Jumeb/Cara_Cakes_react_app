import React from 'react';
import {NavLink} from 'react-router-dom';
import { 
    IoCalendar, 
    IoCard, 
    IoCart, 
    IoLogOut, 
    IoPerson, 
    IoStatsChart 
} from 'react-icons/io5';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './SideNav.module.css'
import { favicon } from '../../res/img';
import { resetUser } from '../../redux/Actions/Auth.actions';

const SideNav = (props) => {
    const {isDetail} = props;

    return (
        <div className={styles.panelUser}>
            <ul className={styles.panelSideNav}>
            <img src={favicon} alt="Logo" className={styles.panelLogo} />
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/shop" className={styles.panelSideNavLink}  activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoCard /></span> <span className={styles.isDetailText}>Shop</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/cart" className={styles.panelSideNavLink} activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoCart /> </span> <span className={styles.isDetailText}>My Cart</span>
                    </NavLink>
                </li>
                {/* <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/event" className={styles.panelSideNavLink}  activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoCalendar /></span> <span className={styles.isDetailText}>Events</span>
                    </NavLink>
                </li> */}
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user/orders" className={styles.panelSideNavLink}  activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoStatsChart /></span><span className={styles.isDetailText}> Orders</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem}>
                    <NavLink to="/user" exact className={styles.panelSideNavLink}  activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoPerson /></span><span className={styles.isDetailText}> Profile</span>
                    </NavLink>
                </li>
                <li className={styles.panelSideNavItem} onClick={() => props.resetUser()}>
                    <NavLink to="/" exact className={styles.panelSideNavLink}  activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoLogOut /></span><span className={styles.isDetailText}>Logout</span>
                    </NavLink>
                </li>
            </ul>
            <div className={styles.power}>
                <span>Copyrighted &copy;<NavLink to="#" className={styles.dev}>JB Inc.</NavLink>All Rights reserved</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ resetUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SideNav);
