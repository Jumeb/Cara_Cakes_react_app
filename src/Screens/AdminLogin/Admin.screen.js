import React from 'react';
import { jbInc } from '../../res/img';

import styles from './Admin.module.css'

const Admin = (props) => {
    const {error} = props;
    return (
        <body className={styles.admin}>
            <div className="admin__box">
                <h2 className={styles.adminTitle}>Welcome Admin</h2>
                <div className={styles.adminContainer}>
                    <img src={jbInc} alt="Powered by Jb Inc" className={styles.adminLogo} />
                    <div className={styles.adminSignIn}>
                        <div className="admin__signin-sheet">
                            <input type="text" className="adminInput" id="user" name="user" placeholder="User Name" required />
                            <label for="user" className="adminLabel">Username</label>
                        </div>
                        <div className="admin__signin-sheet">
                            <input type="password" className="adminInput" id="password" name="password" placeholder="Password"
                                required />
                            <label for="password" className="adminLabel">Password</label>
                        </div>
                        <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                        <button className="admin__btn" type="submit">Login</button>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Admin;
