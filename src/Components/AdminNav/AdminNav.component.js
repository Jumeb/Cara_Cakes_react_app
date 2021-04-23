import React from 'react';
import { NavLink } from 'react-router-dom';
import {IoArchive, IoCafe, IoCard, IoCart, IoGift, IoGrid, IoLogOut, IoPeople, IoPerson, IoStatsChart} from 'react-icons/io5';

import styles from './AdminNav.module.css';

const AdminNav = () => {
    return (
        <div className={styles.navi}>
            <input type="checkbox" id="navi-toggle" className={styles.naviCheckbox}/>
            <label htmlFor="navi-toggle" className={styles.naviButton}>
                <span className={styles.naviIcon}></span>
            </label>
            <div className={styles.naviList}>
                <span className={[styles.naviItem, styles.naviItem1].join(' ')}>
                    <NavLink to="/admin/dashboard"  exact title="Dashboard"  activeClassName={styles.naviActive} className={styles.naviLink}><IoGrid /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem2].join(' ')}>
                    <NavLink to="/admin/dashboard/bakers" title="Bakers" activeClassName={styles.naviActive} className={styles.naviLink}><IoCafe /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem3].join(' ')}>
                    <NavLink to="/admin/dashboard/users" title="Users" activeClassName={styles.naviActive} className={styles.naviLink}><IoPeople /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem4].join(' ')}>
                    <NavLink to="/admin/dashboard/pastry-super" title="Pastries" activeClassName={styles.naviActive} className={styles.naviLink}><IoGift /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem5].join(' ')}>
                    <NavLink to="/admin/dashboard/orders-super" title="Orders" activeClassName={styles.naviActive} className={styles.naviLink}><IoArchive /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem6].join(' ')}>
                    <NavLink to="/admin/dashboard/adminprofile" exact title="Profile" activeClassName={styles.naviActive} className={styles.naviLink}><IoPerson /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem7].join(' ')}>
                    <NavLink to="/" exact title="Logout" activeClassName={styles.naviActive} className={styles.naviLink}><IoLogOut /></NavLink>
                </span>
            </div>
        </div>
    )
}

export default AdminNav;
