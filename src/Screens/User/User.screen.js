import React from 'react';

import './User.screen.css';
import {SideNav, Cart, Bakers, Pastries, Orders} from '../../sections';
import { WorkArea } from '../../Components';

const User = () => {
    return (
        <body>
            <section className="panel">
                <SideNav />
                <WorkArea>
                    <Orders />
                </WorkArea>
            </section>
        </body>
    )
}

export default User;
