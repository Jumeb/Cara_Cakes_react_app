import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './AdminNav.module.css';

const AdminNav = () => {
    return (
        <>
            <div className={styles.panelUser}>
                <ul className={styles.panelSideNav}>
                    <li className={styles.panelSideNavItem}>
                        <NavLink to="/admin/general" className={styles.panelSideNavLink}>
                        <span>Dasboard</span>
                        </NavLink>
                    </li>
                    <li className={styles.panelSideNavItem}>
                        <NavLink to="/admin/orders" className={styles.panelSideNavLink}>
                           <span>Orders</span>
                        </NavLink>
                    </li>
                    <li className={styles.panelSideNavItem}>
                        <NavLink to="/admin/addpastry" className={styles.panelSideNavLink}>
                             <span>Add Pastry</span>
                        </NavLink>
                    </li>
                    <input type="checkbox" name="pastries" id="pastries" className={styles.addCategory} />
                    <li className={styles.panelSideNavItem}>
                        <label for="pastries" className={styles.panelSideNavLink}>View Pantry</label>
                    </li>
                        <div className={styles.addCategoryShow}>
                            <li className={styles.panelSideNavItem2}><NavLink to="/admin/cakes" className={styles.panelSideNavLink}>Birthday Cakes</NavLink></li>
                            <li className={styles.panelSideNavItem2}><NavLink to="/admin/cookies" className={styles.panelSideNavLink}>Cookies</NavLink></li>
                            <li className={styles.panelSideNavItem2}><NavLink to="/admin/pans" className={styles.panelSideNavLink}>Pancakes</NavLink></li>
                            <li className={styles.panelSideNavItem2}><NavLink to="/admin/weds" className={styles.panelSideNavLink}>Wedding Cakes</NavLink></li>
                            <li className={styles.panelSideNavItem2}><NavLink to="/admin/dons" className={styles.panelSideNavLink}>Dougnuts</NavLink></li>
                            <li className={styles.panelSideNavItem2}><NavLink to="/admin/cups" className={styles.panelSideNavLink}>Cup Cakes</NavLink></li>
                            <li className={styles.panelSideNavItem2}><NavLink to="/admin/vals" className={styles.panelSideNavLink}>Valentine choice</NavLink></li>
                        </div>
                    <li className={styles.panelSideNavItem}>
                        <form action="/admin/logout" method="post">
                            <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                            <button type="submit" className={styles.panelSideNavLink}>Logout</button>
                        </form>
                    </li>   
                    <li className={styles.panelSideNavItem}>
                            <NavLink to="/admin/admins" className={styles.panelSideNavLink}>
                                <span>Bakers</span>
                            </NavLink>
                        </li>
                        <li className={styles.panelSideNavItem}>
                            <NavLink to="/admin/users" className={styles.panelSideNavLink}>
                                <span>Users</span>
                            </NavLink>
                        </li>
                        <li className={styles.panelSideNavItem}>
                            <NavLink to="/admin/all-orders" className={styles.panelSideNavLink}>
                                <span>Orders</span>
                            </NavLink>
                        </li>
                        <li className={styles.panelSideNavItem}>
                            <NavLink to="/admin/create" className={styles.panelSideNavLink}>
                                <span>Create Admin</span>
                            </NavLink>
                        </li>
                        <li className={styles.panelSideNavItem}>
                            <form action="/admin/logout" method="post">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <button type="submit" className={styles.panelSideNavLink}>Logout</button>
                            </form>
                        </li>     
                </ul>
                <div className={styles.power}>
                <span>Copyrighted &copy;<NavLink to="#" className={styles.dev}>JB Inc.</NavLink>All Rights reserved</span> 
                </div>
            </div>
                {/*
                    <ul className="panel-side-nav">
                        <li className="panelSideNavItem  <%= path === 'admin/admins' ? 'panelSideNavItem--active' : '' %>">
                            <NavLink to="/admin/admins" className={styles.panelSideNavLink}>
                                <span className={styles.panelSideNavIcon fas fa-plus"></span>  <span>Bakers</span>
                            </NavLink>
                        </li>
                        <li className="panelSideNavItem  <%= path === 'admin/users' ? 'panelSideNavItem--active' : '' %>">
                            <NavLink to="/admin/users   " className={styles.panelSideNavLink}>
                                <span className={styles.panelSideNavIcon fas fa-plus"></span>  <span>Users</span>
                            </NavLink>
                        </li>
                        <li className="panelSideNavItem  <%= path === 'admin/orders' ? 'panelSideNavItem--active' : '' %>">
                            <NavLink to="/admin/all-orders" className={styles.panelSideNavLink}>
                                <span className={styles.panelSideNavIcon fas fa-plus"></span>  <span>Orders</span>
                            </NavLink>
                        </li>
                        <li className="panelSideNavItem  <%= path === 'admin/create' ? 'panelSideNavItem--active' : '' %>">
                            <NavLink to="/admin/create" className={styles.panelSideNavLink}>
                                <span className={styles.panelSideNavIcon fas fa-plus"></span>  <span>Create Admin</span>
                            </NavLink>
                        </li>
                        <li className={styles.panelSideNavItem}>
                            <form action="/admin/logout" method="post">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <button type="submit" className={styles.panelSideNavLink}><span className={styles.panelSideNavIcon logoutIcon fas fa-power-off"></span>Logout</button>
                            </form>
                        </li>
                    </ul>
                    <div className="power">
                    <span>Copyrighted &copy;<NavLink to="#" className="dev">JB Inc.</NavLink>All Rights reserved</span> 
                    </div>
            </div> */}
</>
    )
}

export default AdminNav;