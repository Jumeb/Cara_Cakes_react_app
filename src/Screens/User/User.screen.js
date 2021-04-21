import React from 'react';
import {Route, Switch} from 'react-router-dom';

import styles from './User.module.css';
import {
    SideNav, 
    Cart, 
    Bakers, 
    Pastries, 
    Orders,
    Events,
    UserProfile,
    
} from '../../sections';
import { UserNav, WorkArea } from '../../Components';

const User = () => {
    return (
        <div>
            <section className={styles.Panel}>
                <SideNav />
                <UserNav />
                <WorkArea>
                    <Switch>
                        <Route path="/user" exact component={UserProfile} />
                        <Route path="/user/event" component={Events} />
                        <Route path="/user/shop" exact component={Bakers} />
                        <Route path="/user/shop/pastries" component={Pastries} />
                        <Route path="/user/cart" component={Cart} />
                        <Route path="/user/orders" component={Orders} />
                    </Switch>
                </WorkArea>
            </section>
        </div>
    )
};

export default User;
