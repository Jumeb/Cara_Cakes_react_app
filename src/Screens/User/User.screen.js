import React, {useState} from 'react';
import {Route} from 'react-router-dom';

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
import { WorkArea } from '../../Components';

const User = () => {
    const [isDetail, setIsDetail] = useState(false);

    return (
        <div>
            <section className={styles.Panel}>
                <SideNav isDetail={isDetail} />
                <WorkArea isDetail={isDetail}>
                    <Route path="/user" exact component={UserProfile} />
                    <Route path="/user/event"  render={(props) => (<Events  {...props} isDetail={isDetail} setIsDetail={setIsDetail} /> )} />
                    <Route path="/user/shop" exact render={(props) => (<Bakers {...props}  />)} />
                    <Route path="/user/shop/pastries" render={(props) => (<Pastries {...props} />)} />
                    <Route path="/user/cart" render={(props) => (<Cart {...props} />)} />
                    <Route path="/user/orders" render={(props) => (<Orders {...props} isDetail={isDetail} setIsDetail={setIsDetail} />)} />
                </WorkArea>
            </section>
        </div>
    )
}

export default User;
