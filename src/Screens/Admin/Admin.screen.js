import React from 'react';
import { Route } from 'react-router';

import { WorkArea } from '../../Components';
import { ABakers, AdminNav, Dashboard } from '../../sections';
import styles from './Admin.module.css';

const Admin = () => {
    return (
        <div className={styles.admin}>
            <AdminNav />
            <WorkArea>
                <Route path="/admin/dashboard" exact component={Dashboard} />
                <Route path="/admin/dashboard/bakers" exact component={ABakers} />
            </WorkArea>
        </div>
    )
}

export default Admin;
