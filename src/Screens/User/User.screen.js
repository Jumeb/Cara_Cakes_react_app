import React, {useState} from 'react';

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
        <body>
            <section className="panel">
                <SideNav isDetail={isDetail} />
                <WorkArea isDetail={isDetail}>
                    {/* <Events isDetail={isDetail} setIsDetail={toggleDetail} /> */}
                    {/* <Bakers isDetail={isDetail} setIsDetail={toggleDetail} /> */}
                    {/* <Pastries isDetail={isDetail} setIsDetail={toggleDetail} /> */}
                    <Cart isDetail={isDetail} setIsDetail={toggleDetail} />
                </WorkArea>
            </section>
        </body>
    )
}

export default User;
