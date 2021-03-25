import React from 'react';
import { NavLink } from 'react-router-dom';
import {IoCart, IoEnter, IoHome, IoLogIn, IoLogInSharp, IoPersonAdd} from 'react-icons/io5';

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navi}>
            <input type="checkbox" id="navi-toggle" className={styles.naviCheckbox}/>
            <label htmlFor="navi-toggle" className={styles.naviButton}>
                <span className={styles.naviIcon}></span>
            </label>
            <div className={styles.naviList}>
                <span className={[styles.naviItem, styles.naviItem1].join(' ')}>
                    <NavLink to="/" exact title="Home"  activeClassName={styles.naviActive} className={styles.naviLink}><IoHome /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem2].join(' ')}>
                    <NavLink to="/login" title="About" activeClassName={styles.naviActive} className={styles.naviLink}><IoLogIn /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem3].join(' ')}>
                    <NavLink to="/register" title="Gallery" activeClassName={styles.naviActive} className={styles.naviLink}><IoPersonAdd /></NavLink>
                </span>
                <span className={[styles.naviItem, styles.naviItem4].join(' ')}>
                    <NavLink to="/user/cart" title="Story" activeClassName={styles.naviActive} className={styles.naviLink}><IoCart /></NavLink>
                </span>
            </div>
        </div>
    )
}

export default NavBar;
