import React from 'react';
import { 
    IoArchive, 
    IoCafe, 
    IoDocument, 
    IoGrid, 
    IoLogOut, 
    IoPeople 
} from 'react-icons/io5';
import {NavLink} from 'react-router-dom';
import { favicon } from '../../res/img';

import styles from './AdminNav.module.css';

const AdminNav = () => {
    return (
            <div className={styles.panelUser}>
                <ul className={styles.panelSideNav}>
                    <img src={favicon} alt="Logo" className={styles.panelLogo} />
                    <li className={styles.panelSideNavItem}>
                        <NavLink to="/admin/dashboard" exact className={styles.panelSideNavLink} activeClassName={styles.panelSideNavActive}>
                        <span className={styles.panelSideNavIcon}><IoGrid /></span><span>Dasboard</span>
                        </NavLink>
                    </li>
                    <li className={styles.panelSideNavItem}>
                        <NavLink to="/admin/dashboard/orders" className={styles.panelSideNavLink} activeClassName={styles.panelSideNavActive}>
                           <span className={styles.panelSideNavIcon}><IoArchive /></span><span>Orders</span>
                        </NavLink>
                    </li>
                    {/* <li className={styles.panelSideNavItem}>
                        <NavLink to="/admin/addpastry" className={styles.panelSideNavLink}>
                            <span>Add Pastry</span>
                        </NavLink>
                    </li> */}
                    {/* <input type="checkbox" name="pastries" id="pastries" className={styles.addCategory} />
                    <li className={styles.panelSideNavItem}>
                        <label for="pastries" className={styles.panelSideNavLink}>View Pantry</label>
                    </li>
                        <div className={styles.addCategoryShow}>
                            <li className={styles.panelSideNavItem}><NavLink to="/admin/cakes" className={styles.panelSideNavLink}>Birthday Cakes</NavLink></li>
                            <li className={styles.panelSideNavItem}><NavLink to="/admin/cookies" className={styles.panelSideNavLink}>Cookies</NavLink></li>
                            <li className={styles.panelSideNavItem}><NavLink to="/admin/pans" className={styles.panelSideNavLink}>Pancakes</NavLink></li>
                            <li className={styles.panelSideNavItem}><NavLink to="/admin/weds" className={styles.panelSideNavLink}>Wedding Cakes</NavLink></li>
                            <li className={styles.panelSideNavItem}><NavLink to="/admin/dons" className={styles.panelSideNavLink}>Dougnuts</NavLink></li>
                            <li className={styles.panelSideNavItem}><NavLink to="/admin/cups" className={styles.panelSideNavLink}>Cup Cakes</NavLink></li>
                            <li className={styles.panelSideNavItem}><NavLink to="/admin/vals" className={styles.panelSideNavLink}>Valentine choice</NavLink></li>
                        </div> */}
                    <li className={styles.panelSideNavItem}>
                            <NavLink to="/admin/dashboard/bakers" className={styles.panelSideNavLink} activeClassName={styles.panelSideNavActive}>
                                <span className={styles.panelSideNavIcon}><IoCafe /></span><span>Bakers</span>
                            </NavLink>
                        </li>
                        <li className={styles.panelSideNavItem}>
                            <NavLink to="/admin/dashboard/users" className={styles.panelSideNavLink} activeClassName={styles.panelSideNavActive}>
                                <span className={styles.panelSideNavIcon}><IoPeople /></span><span>Users</span>
                            </NavLink>
                        </li>
                        <li className={styles.panelSideNavItem}>
                            <NavLink to="/admin/dashboard/all-orders" className={styles.panelSideNavLink} activeClassName={styles.panelSideNavActive}>
                                <span className={styles.panelSideNavIcon}><IoDocument /></span><span>All Orders</span>
                            </NavLink>
                        </li>
                        {/* <li className={styles.panelSideNavItem}>
                            <NavLink to="/admin/create" className={styles.panelSideNavLink}>
                                <span>Create Admin</span>
                            </NavLink>
                        </li> */}
                        <li className={styles.panelSideNavItem}>
                                <NavLink to="/" className={styles.panelSideNavLink}>
                                    <span className={styles.panelSideNavIcon}><IoLogOut /></span><span>Logout</span>
                                </NavLink>
                        </li>     
                </ul>
                <div className={styles.power}>
                <span>Copyrighted &copy;<NavLink to="#" className={styles.dev}>JB Inc.</NavLink>All Rights reserved</span> 
                </div>
            </div>
    )
}

export default AdminNav;