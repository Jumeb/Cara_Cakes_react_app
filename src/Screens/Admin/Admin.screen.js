import React from 'react';
import { Route } from 'react-router';

import { WorkArea } from '../../Components';
import { AdminNav, Dashboard } from '../../sections';
import styles from './Admin.module.css';

const Admin = () => {
    return (
        <div className={styles.admin}>
            <AdminNav />
            <WorkArea>
                <Route path="/admin/dashboard" component={Dashboard} />
            </WorkArea>
        </div>
    )
}

export default Admin;
