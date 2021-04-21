import React from 'react';
import { NavLink } from 'react-router-dom';
import {IoCard, IoCart, IoHome, IoLogIn, IoLogOut, IoPerson, IoPersonAdd, IoStatsChart} from 'react-icons/io5';

import styles from './UserNav.module.css';

const UserNav = () => {
    return (
        <div className={styles.navi}>
            <input type="checkbox" id="navi-toggle" className={styles.naviCheckbox}/>
            <label htmlFor="navi-toggle" className={styles.naviButton}>
                <span className={styles.naviIcon}></span>
            </label>
            <div className={styles.naviList}>
                <span className={[styles.naviItem, styles.naviItem1].join(' ')}>
                    <NavLink to="/user/shop"  title="Shop"  activeClassName={styles.naviActive} className={styles.naviLink}><IoCard /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem2].join(' ')}>
                    <NavLink to="/user/cart" title="Cart" activeClassName={styles.naviActive} className={styles.naviLink}><IoCart /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem3].join(' ')}>
                    <NavLink to="/user/orders" title="Orders" activeClassName={styles.naviActive} className={styles.naviLink}><IoStatsChart /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem4].join(' ')}>
                    <NavLink to="/user" exact title="Profile" activeClassName={styles.naviActive} className={styles.naviLink}><IoPerson /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem5].join(' ')}>
                    <NavLink to="/" exact title="Logout" activeClassName={styles.naviActive} className={styles.naviLink}><IoLogOut /></NavLink>
                </span>
            </div>
        </div>
    )
}

export default UserNav;
