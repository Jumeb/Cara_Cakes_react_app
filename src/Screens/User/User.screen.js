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
                    <Route path="/user/event"  render={(props) => (<Events  {...props} isDetail={isDetail} setIsDetail={toggleDetail} /> )} />
                    <Route path="/user/bakers" render={(props) => (<Bakers {...props} isDetail={isDetail} setIsDetail={toggleDetail} />)} />
                    <Route path="/user/pastries" render={(props) => (<Pastries {...props} isDetail={isDetail} setIsDetail={toggleDetail} />)} />
                    <Route path="/user/cart" render={(props) => (<Cart {...props} isDetail={isDetail} setIsDetail={toggleDetail} />)} />
                    <Route path="/user/orders" render={(props) => (<Orders {...props} isDetail={isDetail} setIsDetail={toggleDetail} />)} />
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
