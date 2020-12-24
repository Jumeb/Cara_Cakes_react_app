import React, {useState} from 'react';
import {Route} from 'react-router-dom';

import './User.screen.css';
import {
    SideNav, 
    Cart, 
    Bakers, 
    Pastries, 
    Orders,
    Events,
    
} from '../../sections';
import { WorkArea } from '../../Components';

const User = () => {
    const [isDetail, setIsDetail] = useState(false);

    const toggleDetail = () => {
        setIsDetail(!isDetail);
    }

    return (
        <div>
            <section className="panel">
                <SideNav isDetail={isDetail} />
                <WorkArea isDetail={isDetail}>
                    <Route path="/user/event" component={Events} />
                    <Route path="/user/bakers" component={Bakers} />
                    <Route path="/user/pastries" component={Pastries} />
                    <Route path="/user/cart" component={Cart} />
                    <Route path="/user/orders" component={Orders} />
                    {/* <Events isDetail={isDetail} setIsDetail={toggleDetail} /> */}
                    {/* <Bakers isDetail={isDetail} setIsDetail={toggleDetail} /> */}
                    {/* <Pastries isDetail={isDetail} setIsDetail={toggleDetail} /> */}
                    {/* <Cart isDetail={isDetail} setIsDetail={toggleDetail} /> */}
                </WorkArea>
            </section>
        </div>
    )
}

export default User;
