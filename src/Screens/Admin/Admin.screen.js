import React from 'react';
import { WorkArea } from '../../Components';
import { AdminNav } from '../../sections';

import styles from './Admin.module.css';

const Admin = () => {
    return (
        <div className={styles.admin}>
            <AdminNav />
            <WorkArea>
                <div>
                    <p>Hello WorkArea</p>
                </div>
            </WorkArea>
        </div>
    )
}

export default Admin;
