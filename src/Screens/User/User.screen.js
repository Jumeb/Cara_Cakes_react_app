import React from 'react';

import './User.screen.css';
import {
    SideNav, 
    Cart, 
    Bakers, 
    Pastries, 
    Orders,
    Events,
    AddEvent,
    EditEvent,
    
} from '../../sections';
import { WorkArea } from '../../Components';

const User = () => {
    return (
        <body>
            <section className="panel">
                <SideNav />
                <WorkArea>
                    <Events />
                </WorkArea>
            </section>
        </body>
    )
}

export default User;
