import React from 'react';
import { jbInc } from '../../res/img';

import styles from './Admin.module.css'

const Admin = (props) => {
    const {error} = props;
    return (
        <section className={styles.admin}>
            <div className={styles.adminBox}>
                <h2 className={styles.adminTitle}>Welcome Admin</h2>
                <div className={styles.adminContainer}>
                    <img src={jbInc} alt="Powered by Jb Inc" className={styles.adminLogo} />
                    <div className={styles.adminSignIn}>
                        <div className={styles.adminSignInSheet}>
                            <input type="text" className={styles.adminInput} id="user" name="user" placeholder="User Name" required />
                            <label htmlFor="user" className={styles.adminLabel}>Username</label>
                        </div>
                        <div className={styles.adminSignInSheet}>
                            <input type="password" className={styles.adminInput} id="password" name="password" placeholder="Password"
                                required />
                            <label htmlFor="password" className={styles.adminLabel}>Password</label>
                        </div>
                        <button className={styles.adminBtn} type="submit">Login</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Admin;
