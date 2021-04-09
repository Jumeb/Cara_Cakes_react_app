import React from 'react';
import { Route, Switch } from 'react-router';

import { WorkArea } from '../../Components';
import { ABakers, AUsers, AdminNav, Dashboard, AOrders, APastry, APastryS, AProfile, SOrders, Profile } from '../../sections';
import styles from './Admin.module.css';

const Admin = () => {
    return (
        <div className={styles.admin}>
            <AdminNav />
            <WorkArea>
                <Switch>
                    <Route path="/admin/dashboard" exact component={Dashboard} />
                    <Route path="/admin/dashboard/bakers" component={ABakers} />
                    <Route path="/admin/dashboard/users" component={AUsers} />
                    <Route path="/admin/dashboard/orders" component={AOrders} />
                    <Route path="/admin/dashboard/orders-super" component={SOrders} />
                    <Route path="/admin/dashboard/pastry" component={APastry} />
                    <Route path="/admin/dashboard/pastry-super" component={APastryS} />
                    <Route path="/admin/dashboard/profile" component={AProfile} />
                    <Route path="/admin/dashboard/adminprofile" component={Profile} />
                </Switch>
            </WorkArea>
        </div>
    )
};

export default Admin;
