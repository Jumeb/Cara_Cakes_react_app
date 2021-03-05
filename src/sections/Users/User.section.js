import React from 'react';
import { UserTable } from '../../Components';

import styles from './User.module.css';

const Users = () => {
    return(
       <div className={styles.bakerSection}>
           <div className={styles.bakerLength}>
               <h2 className={styles.bakerLengthTitle}>5 Users</h2>
           </div>
           <div className={styles.bakerCat}>
               <button className={styles.bakerChoice}>All Users</button>
               <button className={styles.bakerChoice}>New Users</button>
               <button className={styles.bakerChoice}>Suspended</button>
               <button className={styles.bakerChoice}>Add User</button>
           </div>
           <UserTable />
       </div>
    )
}

export default Users;